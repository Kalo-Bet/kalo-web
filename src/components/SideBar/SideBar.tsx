"use client"
import { useState } from 'react';
import Image from 'next/image';
import CancelIcon from '../CancelIcon/CancelIcon';
import { Eye, EyeOff } from 'lucide-react';
import PlayIcon from '../PlayIcon/PlayIcon';
import NotificationIcon from '../NotificationIcon/NotificationIcon';


const Sidebar = ({ isOpen, onClose }: any) => {
    const [visible, setVisible] = useState(false);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed z-50 overflow-y-scroll no-scrollbar top-0 right-0 h-full lg:w-[585px] bg-light-background dark:bg-side-dark p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <CancelIcon onClose={onClose} />
            <div className="mt-[72px] mb-[24px] relative rounded-full w-[85px] h-[85px] bg-[#666464] flex items-center justify-center">
                <span className="text-white text-[24px] font-medium">
                    ?
                </span>
            </div>
            <label className='mb-[12px]'>Name</label>
            <div className='mb-[16px]'>
                <input className='w-full bg-input-bg-light dark:bg-input-bg-dark text-text-input-light dark:text-text-input-light px-[16px] py-[8px] rounded-md' type="text" value="Mark Donald" />
            </div>
            <p className='mb-[12px]'>Wallet address</p>
            <div className='flex justify-between bg-input-bg-light dark:bg-input-bg-dark text-text-input-light dark:text-text-input-light px-[16px] py-[8px] rounded-md'>
                <p>Gxce244sdhf......2e</p>
                <Image src="/copy.svg" alt="copy" width={24} height={24} />
            </div>
            <div className='mt-[24px] flex items-center justify-between mb-[32px]'>
                <div>
                    <p>Balance</p>
                    <p>{visible ? "$0.00" : "***"}</p>
                </div>
                <span className='cursor-pointer rounded-xl bg-input-bg-light dark:bg-input-bg-dark p-3' onClick={() => { setVisible(!visible) }}>{visible ? <Eye size={24} /> : <EyeOff size={24} />}</span>
            </div>
            <div className='flex gap-[16px]'>
                <button className='w-full px-6 py-3 rounded-lg bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark'>Deposit</button>
                <button className='w-full px-6 py-3 rounded-lg border-2 border-light-text dark:border-dark-text transition-all duration-300 ease-in-out transform hover:scale-105'>Withdraw</button>
            </div>
            <h3 className='mt-[24px] mb-[40px]'>ACCOUNT</h3>
            <div className='flex justify-between items-center border-b border-[#6D6D6D] cursor-pointer'>
                <div className='flex gap-[12px] py-[24px]'>
                    <PlayIcon />
                    <p className='font-semibold text-[20px]'>My Account</p>
                </div>
                <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
            </div>
            <div className='flex justify-between items-center border-b border-[#6D6D6D] cursor-pointer'>
                <div className='flex gap-[12px] py-[24px]'>
                    <PlayIcon />
                    <p className='font-semibold text-[20px]'>History</p>
                </div>
                <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
            </div>
            <div className='flex justify-between items-center border-b border-[#6D6D6D] cursor-pointer'>
                <div className='flex gap-[12px] py-[24px]'>
                    <NotificationIcon iconType={false} />
                    <p className='font-semibold text-[20px]'>Notifications</p>
                </div>
                <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
            </div>

            <div className='mt-[68px] flex items-center gap-[8px] text-[#BA5E61] font-medium text-[20px] cursor-pointer'>
                <Image src="/logout.svg" alt="logout" width={24} height={24} />
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;