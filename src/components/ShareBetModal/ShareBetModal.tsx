import Image from "next/image";
import CancelIcon from "../CancelIcon/CancelIcon";
import TwitterIcon from "../TwitterIcon/TwitterIcon";
import WhatsappIcon from "../WhatsappIcon/WhatsappIcon";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import TiktokIcon from "../TiktokIcon/TiktokIcon";

const ShareBetModal = ({ isOpen, onClose }: any) => {
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
      <div className="relative bg-light-background dark:bg-bet-dark-bg rounded-lg p-8 m-4 max-h-full">
        <p className="font-medium text-[20px]">Share</p>
        <CancelIcon onClose={onClose} />
        <div className="mt-[68px] flex gap-[58px]">
            <TwitterIcon />
            <WhatsappIcon />
            <InstagramIcon />
            <TiktokIcon />
        </div>
        <p className="mt-[48px] mb-[12px] font-medium text-[16px]">Copy Link</p>
        <div className="flex justify-between px-[12px] py-[16px] bg-social-light dark:bg-social-dark rounded-md">
            <p>http://www.livestream.app/eple</p>
            <Image className="cursor-pointer hover:scale-105 transition-all duration-300" src="/copy.svg" alt="copy-icon" width={24} height={24} onClick={() => {copyToClipboard('http://www.livestream.app/eple')}} />
        </div>
      </div>
    </div>
  )
}

export default ShareBetModal;