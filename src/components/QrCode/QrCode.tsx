"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const QrCode = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const imageSrc = currentTheme === 'dark' ? "/qr-dark.svg" : "/qr.svg";

    return (
        <div className="border border-[#4f4f4f] rounded-xl bg-icon-light w-[317px] dark:bg-light-text">
            <Link href="/">
                <Image src={imageSrc} alt="qr-code" width={317} height={320} />
            </Link>
        </div>
    )
}

export default QrCode;