import Image from 'next/image';
import Link from 'next/link';
import CancelIcon from '../CancelIcon/CancelIcon';
import PlayIcon from '../PlayIcon/PlayIcon';
import NotificationIcon from '../NotificationIcon/NotificationIcon';
import { Settings } from 'lucide-react';

const MenuNav = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (
        <div className={`fixed w-[250px] z-50 overflow-y-scroll no-scrollbar top-0 left-0 h-full bg-light-background dark:bg-side-dark p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <CancelIcon onClose={onClose} />
            <div className="flex flex-col h-full">
                <Link href="/create-bet">
                    <div className='mt-[72px] mb-[24px] flex hover:scale-110 transition-all duration-300 cursor-pointer items-center gap-6 p-2 border-b-2 border-light-text dark:border-dark-tex'>
                        <span className='mt-[-4px] font-semibold text-[28px]'>+</span>
                        <p className='font-semibold text-[20px]'>Create bet</p>
                    </div>
                </Link>
                <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-[12px] py-[24px]'>
                        <PlayIcon />
                        <p className='font-semibold text-[20px]'>My Account</p>
                    </div>
                    <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
                </div>
                <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-[12px] py-[24px]'>
                        <NotificationIcon iconType={false} />
                        <p className='font-semibold text-[20px]'>Notifications</p>
                    </div>
                    <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
                </div>
                <div className="flex-grow"></div>
                <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-[12px] py-[24px]'>
                        <Settings />
                        <p className='font-semibold text-[20px]'>Settings</p>
                    </div>
                    <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
                </div>
            </div>
        </div>
    )
}

export default MenuNav