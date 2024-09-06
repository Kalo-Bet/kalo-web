"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const TiktokIcon = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const imageSrc = currentTheme === 'dark' ? "/tiktok-dark.svg" : "/tiktok.svg";

    return (
        <div className='p-6 rounded-full bg-social-light dark:bg-social-dark hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer'>
            <Image src={imageSrc} alt="user-icon" width={24} height={24} />
        </div>
    )
}

export default TiktokIcon;