"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import BetCard from "@/components/BetCard/BetCard";
import UserCard from "@/components/UserCard/UserCard";
import Link from "next/link";
import { MoveLeft } from "lucide-react"
import WinnerModal from "@/components/WinnerModal/WinnerModal";

const BetNotificationPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-[50px] lg:mt-[73px] mx-2 lg:mx-[150px]">
                <div>
                    <div className="flex items-center gap-[20px]">
                        <Link href="/notifications"><MoveLeft /></Link>
                        <h1 className="font-bold text-[28px]">Notifications</h1>
                    </div>
                    <BetCard className="mt-[58px]" title='Big brother Africa' price1='$20.00' price2='$20.00' time='20:00 pm' date='Apr-21/Apr30' betcount='+3' completed={true} />
                    <div>
                        <h2 className="mb-[58px] mt-[64px] text-center"><span className="font-bold text-[28px]">Conditions:</span> <span className="font-semibold text-[24px]">Ladies for the trophy</span></h2>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="mb-[16px] font-bold text-center text-[20px]">For:</h3>
                                <div className="flex items-center justify-center gap-[10px] font-medium mb-[28px]">
                                    <div className="flex gap-[5px]">
                                        <input className="accent-[#5CA027]" type="radio" name="win" id="" />
                                        <label htmlFor="win">Win</label>
                                    </div>
                                    <div className="flex gap-[5px]">
                                        <input className="accent-[#FE1E1E]" type="radio" name="lose" id="" />
                                        <label htmlFor="lose">Lose</label>
                                    </div>
                                </div>
                                <UserCard name="user1" won={true} price="$20.00" />
                            </div>
                            <div className="flex flex-col items-center gap-[16px]">
                                <h3 className="mb-[16px] font-bold text-[20px]">Against:</h3>
                                <div className="flex items-center justify-center gap-[10px] font-medium">
                                    <div className="flex gap-[5px]">
                                        <input className="accent-[#5CA027]" type="radio" name="win" id="" />
                                        <label htmlFor="win">Win</label>
                                    </div>
                                    <div className="flex gap-[5px]">
                                        <input className="accent-[#FE1E1E]" type="radio" name="lose" id="" />
                                        <label htmlFor="lose">Lose</label>
                                    </div>
                                </div>
                                <UserCard name="user1" Against={true} price="$20.00" />
                                <UserCard name="user2" Against={true} price="$20.00" />
                                <UserCard name="user3" Against={true} price="$20.00" />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => { setOpen(true) }} className="mt-[85px] mb-20 w-full px-6 py-3 rounded-lg bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark">Submit</button>
                </div>
            </div>

            <WinnerModal isOpen={open} onClose={() => { setOpen(false) }} />
        </>
    )
};

export default BetNotificationPage;