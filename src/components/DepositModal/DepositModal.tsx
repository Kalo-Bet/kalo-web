import Image from "next/image";
import CancelIcon from "../CancelIcon/CancelIcon";
import QrCode from "../QrCode/QrCode";

const DepositModal = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    const copyToClipboard = (text: string) => {
        const tempInput = document.createElement('input');
        tempInput.value = text;

        document.body.appendChild(tempInput);

        tempInput.select();

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        alert('Copied to clipboard: ' + text);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative bg-light-background dark:bg-bet-dark-bg rounded-lg p-8 m-4 max-h-full text-center px-[30px] overflow-y-scroll">
                <CancelIcon onClose={onClose} />
                <h1 className="font-bold text-[30px] mt-[56px] mb-[27px]">Scan QR Code</h1>
                <p className="font-medium text-[20px]">Scan this code and pay directly from your wallet</p>
                <div className="flex justify-center mt-[30px]">
                    <QrCode />
                </div>
                <div className="flex items-center my-8">
                    <div className="flex-grow border-t-2 border-[#909090]"></div>
                    <span className="flex-shrink mx-4 font-medium text-base">or copy wallet address</span>
                    <div className="flex-grow border-t-2 border-[#909090]"></div>
                </div>
                <div className="flex justify-between px-[12px] py-[16px] bg-social-light dark:bg-social-dark rounded-md">
                    <p>http://www.livestream.app/eple</p>
                    <Image className="cursor-pointer hover:scale-105 transition-all duration-300" src="/copy.svg" alt="copy-icon" width={24} height={24} onClick={() => { copyToClipboard('http://www.livestream.app/eple') }} />
                </div>
            </div>
        </div>
    )
}

export default DepositModal