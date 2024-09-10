import { Keypair, PublicKey, SystemProgram, TransactionMessage } from "@solana/web3.js";
import * as multisig from '@sqds/multisig';
import { connection } from "./data"

export async function executePayout(betId: string, opponentKey: PublicKey): Promise<void> {
    const platformSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY

    if (!platformSecretKey) {
        console.error("No platform secret key");
        return;
    }

    const platformKeypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(platformSecretKey)));

    const bet = await getBetInfo(betId);
    const opponent = bet.opponents.find(o => o.publicKey.equals(opponentKey));
    if (!opponent) throw new Error("Opponent not found");

    const totalStake = bet.creatorStake + opponent.stake;
    let winnerKey: PublicKey;

    if (bet.creatorApproved && opponent.approved) {
        winnerKey = bet.outcome === 'creatorWin' ? bet.creator : opponentKey;
    } else if (bet.platformApproval !== 'pending') {
        winnerKey = bet.platformApproval === 'creatorWin' ? bet.creator : opponentKey;
    } else {
        throw new Error("Cannot execute payout: no agreement and no platform decision");
    }

    const amount = Math.floor(totalStake * 0.995);
    const feeAmount = Math.floor(totalStake * 0.005);

    const [vaultPda] = multisig.getVaultPda({ multisigPda: new PublicKey(bet.multisigPda), index: 0 });

    const payoutInstruction = SystemProgram.transfer({
        fromPubkey: vaultPda,
        toPubkey: winnerKey,
        lamports: amount,
    });

    const feeInstruction = SystemProgram.transfer({
        fromPubkey: vaultPda,
        toPubkey: platformKeypair.publicKey,
        lamports: feeAmount,
    });

    const message = new TransactionMessage({
        payerKey: vaultPda,
        recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
        instructions: [payoutInstruction, feeInstruction],
    });

    const multisigAccount = await multisig.accounts.Multisig.fromAccountAddress(
        connection,
        new PublicKey(bet.multisigPda)
    );

    const currentTransactionIndex = multisigAccount.transactionIndex;
    const newTransactionIndex = BigInt(Number(currentTransactionIndex) + 1);

    await multisig.rpc.vaultTransactionCreate({
        connection,
        multisigPda: new PublicKey(bet.multisigPda),
        transactionMessage: message,
        feePayer: platformKeypair,
        creator: bet.creator,
        transactionIndex: newTransactionIndex,
        vaultIndex: 0,
        ephemeralSigners: 0, 
        rentPayer: platformKeypair.publicKey,
    });

    // Create and approve the proposal
    await multisig.rpc.proposalCreate({
        connection,
        multisigPda: new PublicKey(bet.multisigPda),
        transactionIndex: newTransactionIndex,
        creator: platformKeypair,
        feePayer: platformKeypair,
    });

    await multisig.rpc.proposalApprove({
        connection,
        multisigPda: new PublicKey(bet.multisigPda),
        transactionIndex: newTransactionIndex,
        member: platformKeypair,
        feePayer: platformKeypair,
    });

    // Execute the transaction
    await multisig.rpc.vaultTransactionExecute({
        connection,
        multisigPda: new PublicKey(bet.multisigPda),
        transactionIndex: newTransactionIndex,
        member: platformKeypair.publicKey,
        feePayer: platformKeypair,
    });

    opponent.paidOut = true;
    // await updateBetInfo(bet);
}