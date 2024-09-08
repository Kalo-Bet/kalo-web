"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const MenuIcon = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const imageSrc = currentTheme === 'dark' ? "/menu-dark.svg" : "/menu.svg";

    return (
        <div>
            <Link href="/">
                <Image className="lg:hidden w-6 h-6" src={imageSrc} alt="logo" width={100} height={100} />
            </Link>
        </div>
    )
}

export default MenuIcon