export async function opponentVoteOutcome(betId: string, opponent: web3.PublicKey, vote: Vote): Promise<void> {
    const bet = await getBetInfo(betId);
    const opponentBet = bet.opponents.find(o => o.publicKey.equals(opponent));
    if (!opponentBet) throw new Error("Opponent not found");
    if (opponentBet.approved || opponentBet.rejected) throw new Error("Opponent already voted");
    
    if (vote === 'approve') {
      opponentBet.approved = true;
    } else {
      opponentBet.rejected = true;
    }
    
    await updateBetInfo(bet);
    await checkForDisagreementAndNotifyPlatform(betId);
  }