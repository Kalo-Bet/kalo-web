"use client"
import Navbar from "@/components/Navbar/Navbar";
import BetCard from "@/components/BetCard/BetCard";
import UserCard from "@/components/UserCard/UserCard";
import { MoveLeft } from "lucide-react"
import Link from "next/link";

const Bet = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-[73px] mx-2 lg:mx-[150px]">
                <div>
                    <div className="flex items-center gap-[20px]">
                        <Link href="/live-bets"><MoveLeft /></Link>
                        <h1 className="font-bold text-[28px]">Bet Details</h1>
                    </div>
                    <BetCard className="mt-[58px]" title='Big brother Africa' price1='$20.00' price2='$20.00' time='20:00 pm' date='Apr-21/Apr30' betcount='+3' completed={true} />
                    <div>
                        <h2 className="mb-[58px] mt-[64px] text-center"><span className="font-bold text-[28px]">Conditions:</span> <span className="font-semibold text-[24px]">Ladies for the trophy</span></h2>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="mb-[16px] font-bold text-center text-[20px]">For:</h3>
                                <UserCard name="user1" won={true} price="$20.00" />
                            </div>
                            <div className="flex flex-col    items-center gap-[16px]">
                                <h3 className="mb-[16px] font-bold text-[20px]">Against:</h3>
                                <UserCard name="user1" Against={true} price="$20.00" />
                                <UserCard name="user2" Against={true} price="$20.00" />
                                <UserCard name="user3" Against={true} price="$20.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bet;