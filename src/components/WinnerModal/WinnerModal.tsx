import Image from "next/image";
import CancelIcon from "../CancelIcon/CancelIcon";

const WinnerModal = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative bg-light-background dark:bg-dark-background rounded-lg p-8 m-4 max-h-full text-center">
                <CancelIcon onClose={onClose} />
                <div className="mt-6 mb-4 flex justify-center">
                    <Image alt="ticket" src='/winner.svg' width={100} height={100} />
                </div>
                <h3 className="text-xl font-bold mb-2">Congratulations</h3>
                <p className="mb-6">Your have crowned Ashley as the winner</p>
                <p className="text-[24px]"><span className="font-bold">Bet Title: </span><span>Manchester city will win the EPL</span></p>
                <div>
                    <div className="mt-[24px] mb-[12px] flex gap-[30px] items-center justify-center">
                        <div className="flex gap-[10px] items-center">
                            <Image alt="trophy" src="/trophy.svg" width={32} height={32} />
                            <p>Winner:</p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <Image className="rounded-full" alt="avatar" src="/avatar.svg" width={50} height={50} />
                            <p>Ashley</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-full rounded bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default WinnerModal;
