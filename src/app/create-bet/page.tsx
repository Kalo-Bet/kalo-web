"use client"
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import BetDetails from "@/components/BetDetails/BetDetails";
import BetSuccessModal from "@/components/BetSuccessModal/BetSuccessModal";
import DepositModal from "@/components/DepositModal/DepositModal";

const CreateBet = () => {
    const [betSuccess, setBetSuccess] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDeposit, setIsDeposit] = useState(false);

    const closePopup = () => {
        setIsOpen(false);
        setBetSuccess(true);
    };

    const closeDeposit = () => {
        setIsDeposit(false);
        setIsOpen(true);
    };

    return (
        <>
            <Navbar />
            {betSuccess ? <BetDetails condition="Big Brother..." creator="Ashley" paymentDate="Mar7, 2024-Mar20 2024" title="Big Brother" price1="$40.00" time="20:00 PM" date="Apr-21/Apr30" /> :
                <div className="flex m-[100px] h-screen justify-center items-center">
                    <div className="rounded-md p-8 bg-bet-light-bg dark:bg-bet-dark-bg">
                        <h1 className="font-semibold text-[32px] text-center mb-[42px] text-btn-light dark:text-btn-dark">CREATE BET</h1>
                        <div className="flex items-center gap-4 justify-center mb-[42px]">
                            <p className="font-semibold text-[24px]">Bet Action</p>
                            <div className="flex gap-2">
                                <label className="text-[20px]" htmlFor="for">For</label>
                                <input type="radio" />
                            </div>
                            <div className="flex gap-2">
                                <label className="text-[20px]" htmlFor="for">Against</label>
                                <input type="radio" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[32px]">
                            <input className="w-full px-6 py-3 rounded-lg" type="text" placeholder="Bet Title*" />
                            <input className="w-full px-6 py-3 rounded-lg" type="text" placeholder="State Betting Event" />
                            <div className="flex gap-[32px]">
                                <div>
                                    <label>Minimum Stake</label>
                                    <input className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="USDC" />
                                </div>
                                <div>
                                    <label htmlFor="">Verification Source</label>
                                    <input className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="flex gap-[32px]">
                                <div className="self-start w-full">
                                    <label>Set Deadline for Bet*</label>
                                    <input className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" />
                                </div>
                                <input className="self-end py-3 w-full px-6 rounded-lg" type="date" />
                            </div>
                            <div className="flex gap-[32px]">
                                <div className="w-full self-start">
                                    <label htmlFor="">Stake Amount</label>
                                    <input className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="stake amount" />
                                </div>
                                <button onClick={() => { setIsDeposit(true) }} className="self-end w-full px-6 py-3 rounded-lg bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark">Create Bet</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <BetSuccessModal isOpen={isOpen} onClose={closePopup} />
            <DepositModal isOpen={isDeposit} onClose={closeDeposit} />
        </>
    )
}

export default CreateBet