"use client"
import Navbar from "@/components/Navbar/Navbar";
import BetCard from "@/components/BetCard/BetCard";
import Link from "next/link";

const LiveBets = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-[73px]">
                <div>
                    <h1 className="font-bold text-[28px] mb-[58px]">My Bets</h1>
                    <h3 className="font-bold text-[24px]">Last Week</h3>
                    <Link href="/bet/1"><BetCard className="transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" title='Big brother Africa' price1='$20.00' time='20:00 pm' date='Apr-21/Apr30' /></Link>
                    <h3 className="mt-[61px] font-bold text-[24px]">Last Week</h3>
                    <Link href="/bet/2"><BetCard className="transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" title='Big brother Africa' price1='$20.00' price2='$20.00' time='20:00 pm' date='Apr-21/Apr30' betcount='+3' completed={true} /></Link>
                </div>
            </div>
        </>
    )
}

export default LiveBets;