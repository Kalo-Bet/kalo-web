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
    const [sourceOfVerification, setSourceOfVerification] = useState("");
    const [sourceError, setSourceError] = useState("");
    const [minimumStake, setMinimumStake] = useState("");
    const [minimumStakeError, setMinimumStakeError] = useState("");
    const [stakeAmount, setStakeAmount] = useState("");
    const [stakeAmountError, setStakeAmountError] = useState("");

    const closePopup = () => {
        setIsOpen(false);
        setBetSuccess(true);
    };

    const closeDeposit = () => {
        setIsDeposit(false);
        setIsOpen(true);
    };

    const validateUrl = (url: string) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    };

    const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSourceOfVerification(value);
        if (!validateUrl(value)) {
            setSourceError("Please enter a valid URL");
        } else {
            setSourceError("");
        }
    };

    const validateNumber = (value: string) => {
        return /^\d+(\.\d{1,2})?$/.test(value);
    };

    const handleMinimumStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinimumStake(value);
        if (!validateNumber(value)) {
            setMinimumStakeError("Please enter a valid number");
        } else {
            setMinimumStakeError("");
        }
    };

    const handleStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStakeAmount(value);
        if (!validateNumber(value)) {
            setStakeAmountError("Please enter a valid number");
        } else {
            setStakeAmountError("");
        }
    };

    const handleCreateBet = () => {
        if (sourceError || minimumStakeError || stakeAmountError) {
            return;
        }
        setIsDeposit(true);
    };


    return (
        <>
            <Navbar />
            {betSuccess ? <BetDetails condition="Big Brother..." creator="Ashley" paymentDate="Mar7, 2024-Mar20 2024" title="Big Brother" price1="$40.00" time="20:00 PM" date="Apr-21/Apr30" /> :
                <div className="flex m-[100px] h-screen justify-center items-center">
                    <div className="rounded-md p-8 bg-bet-light-bg dark:bg-bet-dark-bg">
                        <h1 className="font-semibold text-[32px] text-center mb-[42px] text-btn-light dark:text-btn-dark">CREATE BET</h1>
                        <div className="flex items-center gap-4 justify-center mb-[42px]">
                            <p className="font-semibold md:text-[24px] text-[18px]">Bet Action</p>
                            <div className="flex gap-2">
                                <label className="text-[20px]" htmlFor="for">For</label>
                                <input name="for" id="for" type="radio" />
                            </div>
                            <div className="flex gap-2">
                                <label className="text-[20px]" htmlFor="against">Against</label>
                                <input name="against" id="against" type="radio" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[32px]">
                            <input className="w-full px-6 py-3 rounded-lg" type="text" placeholder="Bet Title*" />
                            <input className="w-full px-6 py-3 rounded-lg" type="text" placeholder="State Betting Event" />
                            <div className="flex gap-[32px]">
                                <div>
                                    <label className="text-[12px] md:text-[16px]" htmlFor="minstake">Minimum Stake</label>
                                    <input name="minstake" id="minstake" className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="USDC" value={minimumStake}
                                        onChange={handleMinimumStakeChange} />
                                    {minimumStakeError && <p className="text-red-500 text-sm mt-1">{minimumStakeError}</p>}
                                </div>
                                <div>
                                    <label className="text-[12px] md:text-[16px]" htmlFor="stakeamount">Stake Amount</label>
                                    <input name="stakeamount" id="stakeamount" className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="stake amount" value={stakeAmount}
                                        onChange={handleStakeAmountChange} />
                                    {stakeAmountError && <p className="text-red-500 text-sm mt-1">{stakeAmountError}</p>}
                                </div>
                            </div>
                            <div className="flex gap-[32px]">
                                <div className="self-start w-full">
                                    <label htmlFor="deadline" className="text-[12px] md:text-[16px]">Set Deadline for Bet*</label>
                                    <input name="deadline" id="deadline" className="mt-[16px] w-full px-6 py-3 rounded-lg" type="time" />
                                </div>
                                <input className="self-end py-3 w-full px-6 rounded-lg" type="date" />
                            </div>
                            <div className="flex items-center gap-[32px]">
                                <div className="w-full self-start">
                                    <label className="text-[12px] md:text-[16px]" htmlFor="verification">Source of Verification</label>
                                    <input name="verification" id="verification" className="mt-[16px] w-full px-6 py-3 rounded-lg" type="text" placeholder="a link to verify your bet" value={sourceOfVerification}
                                        onChange={handleSourceChange} />
                                    {sourceError && <p className="text-red-500 text-sm mt-1">{sourceError}</p>}
                                </div>
                                <button onClick={handleCreateBet} className="self-end w-full px-6 py-3 rounded-lg bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark">Create Bet</button>
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