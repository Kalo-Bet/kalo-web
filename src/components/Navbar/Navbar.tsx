"use client"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ThemeBasedImage from '../ThemeLogo/ThemeLogo';
import NotificationIcon from '../NotificationIcon/NotificationIcon';
import UserIcon from '../UserIcon/UserIcon';
import PlayIcon from '../PlayIcon/PlayIcon';
import Link from 'next/link';
import Sidebar from '../SideBar/SideBar';

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <div className='flex items-center justify-between px-24 py-6 bg-nav-light-bg dark:bg-nav-dark-bg drop-shadow-xl'>
                <ThemeBasedImage />
                <div className='flex items-center gap-12'>
                    <Link href="/create-bet">
                        <div className={`hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-6 p-2 ${pathname === '/create-bet' ? "border-b-2 border-light-text dark:border-dark-text" : ""}`}>
                            <span className='mt-[-4px] font-semibold text-[28px]'>+</span>
                            <p className='font-semibold text-[20px]'>Create bet</p>
                        </div>
                    </Link>
                    <Link href="/live-bets">
                        <div className={`hover:scale-110 transition-all duration-300 cursor-pointer flex items-center gap-6 p-2 ${pathname === '/live-bets' ? "border-b-2 border-light-text dark:border-dark-text" : ""}`}>
                            <PlayIcon />
                            <p className='font-semibold text-[20px]'>Live bet</p>
                        </div>
                    </Link>
                    <ThemeToggle />
                </div>
                <div className='flex items-center gap-[48px]'>
                    <Link href="/notifications"><NotificationIcon iconType={true} /></Link>
                    <button onClick={toggleSidebar}><UserIcon /></button>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    )
}

export default Navbar