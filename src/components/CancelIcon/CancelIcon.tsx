"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const CancelIcon = ({ onClose }: any) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const imageSrc = currentTheme === 'dark' ? "/cancel.svg" : "/cancel-dark.svg";

  return (
    <div>
    <Image onClick={onClose} className="cursor-pointer absolute top-8 right-8" src={imageSrc} alt="cancel-icon" width={24} height={24} />
</div>
  )
}

export default CancelIcon;