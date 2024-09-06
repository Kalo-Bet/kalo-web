import Image from "next/image";

interface BetCardProps {
    title: string;
    price1: string;
    price2?: string;
    time: string;
    date: string;
    betcount?: string;
    completed?: boolean;
    className?: string;
}

const BetCard: React.FC<BetCardProps> = ({ title, price1, price2, time, date, betcount, completed, className }) => {
    return (

        <div className={`bg-bet-light-bg dark:bg-bet-dark-bg px-[52px] py-[24px] mt-[10px] rounded-xl ${className}`}>
            <h1 className="text-center font-semibold text-[16px] mb-[44px]">{title}</h1>
            <div className="flex gap-[156px]">
                <div>
                    <div className=" mb-[12px] flex flex-col items-center justify-center">
                        {completed && <Image alt="completed" src="/done.svg" width={24} height={24} />}
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
                        {completed && <Image alt="completed" src="/disabled.svg" width={24} height={24} />}
                        <div className="mt-[10px] relative rounded-full w-[50px] h-[50px] bg-[#666464] flex items-center justify-center">
                            <span className="text-white text-[24px] font-medium">
                                {betcount || "?"}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[6px]"><span className="font-medium text-[16px]">????</span> <span className="text-white font-medium text-[10px] bg-danger px-3 py-0.5 rounded-xl">Against</span></div>
                    <p className="font-semibold text-[18px] mt-[5px]">{price2 || "-----"}</p>
                </div>
            </div>
        </div>
    )
}

export default BetCard;