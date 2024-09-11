export async function creatorVoteOutcome(betId: string, vote: Vote, outcome?: Outcome): Promise<void> {
    const bet = await getBetInfo(betId);
    if (bet.creatorApproved || bet.creatorRejected) throw new Error("Creator already voted");
    
    if (vote === 'approve') {
      bet.creatorApproved = true;
      bet.outcome = outcome!;
    } else {
      bet.creatorRejected = true;
    }
    
    await updateBetInfo(bet);
    await checkForDisagreementAndNotifyPlatform(betId);
  }