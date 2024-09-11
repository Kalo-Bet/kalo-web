import { PublicKey } from "@solana/web3.js";

export async function joinBet(betId: string, opponent: PublicKey, stake: number): Promise<void> {
    // const bet = await getBetInfo(betId);
    bet.opponents.push({
      publicKey: opponent,
      stake,
      approved: false,
      rejected: false,
      paidOut: false,
    });
    
    bet.totalAmount += stake;
    await updateBetInfo(bet);
  }