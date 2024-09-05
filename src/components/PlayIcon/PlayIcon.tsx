"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const PlayIcon = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const imageSrc = currentTheme === 'dark' ? "/play-dark.svg" : "/play.svg";

  return (
    <div>
      <Image src={imageSrc} alt="play-icon" width={24} height={24} />
    </div>
  );
};

export default PlayIcon;