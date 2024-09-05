"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeBasedImage = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const imageSrc = currentTheme === 'dark' ? "/kalo-dark.svg" : "/kalo.svg";

    return (
        <div>
            <Link href="/">
                <Image src={imageSrc} alt="logo" width={100} height={100} />
            </Link>
        </div>
    );
};

export default ThemeBasedImage;