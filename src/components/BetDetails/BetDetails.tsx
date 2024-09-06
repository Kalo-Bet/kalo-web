import Image from "next/image";
import ShareBetModal from "../ShareBetModal/ShareBetModal";
import { useState } from "react";

interface BetDetailsProps {
    title: string;
    price1: string;
    time: string;
    date: string;
    creator: string;
    paymentDate: string;
    condition: string;
}

const BetDetails: React.FC<BetDetailsProps> = ({ title, price1, time, date, creator, paymentDate, condition }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex m-[200px] h-screen justify-center items-center">
                <div className="rounded-md p-8 bg-bet-light-bg dark:bg-bet-dark-bg">
                    <h1 className="font-semibold text-[32px] text-center mb-[42px] text-btn-light dark:text-btn-dark">YOUR BET</h1>
                    <h2 className="text-center text-[32px] mb-[40px]"><span className="font-bold">Bet Title: </span><span>{title}</span></h2>
                    <div className="flex gap-[156px]">
                        <div>
                            <div className=" mb-[12px] flex flex-col items-center justify-center">
                                <Image className="mt-[10px] rounded-full" alt="avatar" src="/avatar.svg" width={50} height={50} />
                            </div>
                            <div className="flex items-center gap-[6px]"><span className="font-medium text-[16px]">You</span> <span className="text-white font-medium text-[10px] bg-btn-light dark:bg-btn-dark px-3 py-0.5 rounded-xl">For</span></div>
                            <p className="font-semibold text-[18px] mt-[5px]">{price1}</p>
                        </div>
                        <div>
                            <p className="text-center">VS</p>
                            <p>{time} | {date}</p>
                        </div>
                        <div>
                            <div className="mb-[12px] flex flex-col items-center justify-center">
                                <div className="mt-[10px] relative rounded-full w-[50px] h-[50px] bg-[#666464] flex items-center justify-center">
                                    <span className="text-white text-[24px] font-medium">
                                        ?
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[6px]"><span className="font-medium text-[16px]">????</span> <span className="text-white font-medium text-[10px] bg-danger px-3 py-0.5 rounded-xl">Against</span></div>
                            <p className="font-semibold text-[18px] mt-[5px]">-----</p>
                        </div>
                    </div>
                    <h3 className="text-center font-semibold text-[14px] mt-[32px] mb-[28px]">Bet Details</h3>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex justify-between">
                            <p>Bet name</p>
                            <p>{title}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Condition</p>
                            <p>{condition}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Payment Date</p>
                            <p>{paymentDate}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>For</p>
                            <p>{creator}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Against</p>
                            <p>????</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Amount Bet</p>
                            <p>{price1}</p>
                        </div>
                    </div>
                    <button className="mt-[61px] w-full px-12 py-6 font-bold text-[20px] rounded-xl bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark">Download Bet</button>
                    <button className="mt-[24px] w-full px-12 py-6 font-bold text-[20px] rounded-xl border-2 border-light-text dark:border-dark-text transition-all duration-300 ease-in-out transform hover:scale-105" onClick={() => setIsOpen(true)}>Share Bet</button>
                </div>
            </div>
            <ShareBetModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default BetDetails

