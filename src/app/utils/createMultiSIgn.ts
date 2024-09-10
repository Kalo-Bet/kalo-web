import { Keypair, PublicKey, SystemProgram, TransactionMessage } from "@solana/web3.js";
import * as multisig from '@sqds/multisig';
import { connection } from "./data";

export async function createBetMultisig(creator: Keypair, stake: number): Promise<string | undefined> {
    const platformSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    if (!platformSecretKey) {
        console.error("No platform secret key");
        return undefined;
    }

    const platformKeypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(platformSecretKey)));

    const createKey = Keypair.generate();
    const [multisigPda] = multisig.getMultisigPda({ createKey: createKey.publicKey });

    try {
        // Create the multisig
        await multisig.rpc.multisigCreateV2({
            connection,
            createKey,
            creator,
            multisigPda,
            configAuthority: null,
            timeLock: 0,
            members: [
                { key: creator.publicKey, permissions: multisig.types.Permissions.all() },
                { key: platformKeypair.publicKey, permissions: multisig.types.Permissions.all() },
            ],
            threshold: 2,
            treasury: platformKeypair.publicKey,
            rentCollector: null
        });

        return multisigPda.toBase58();
    } catch (error) {
        console.error("Error creating multisig:", error);
        return undefined;
    }
}