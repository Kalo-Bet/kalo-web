"use client"
import Navbar from "@/components/Navbar/Navbar";
import BetCard from "@/components/BetCard/BetCard";

const LiveBets = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-[73px]">
                <div>
                    <h1 className="font-bold text-[28px] mb-[58px]">My Bets</h1>
                    <h3 className="font-bold text-[24px]">Last Week</h3>
                    <BetCard title='Big brother Africa' price1='$20.00' time='20:00 pm' date='Apr-21/Apr30' />
                    <h3 className="mt-[61px] font-bold text-[24px]">Last Week</h3>
                    <BetCard title='Big brother Africa' price1='$20.00' price2='$20.00' time='20:00 pm' date='Apr-21/Apr30' betcount='+3' completed={true} />
                </div>
            </div>
        </>
    )
}

export default LiveBets;