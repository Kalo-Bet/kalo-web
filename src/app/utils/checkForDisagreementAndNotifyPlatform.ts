// export async function checkForDisagreementAndNotifyPlatform(betId: string): Promise<void> {
//     const bet = await getBetInfo(betId);
    
//     for (const opponent of bet.opponents) {
//       if ((bet.creatorApproved && opponent.rejected) || (bet.creatorRejected && opponent.approved)) {
//         // Disagreement found, notify platform
//         await notifyPlatformForApproval(betId, opponent.publicKey);
//         return;
//       }
//     }
  
//     // If no disagreements, check if we can execute payouts
//     await checkAndExecutePayouts(betId);
//   }