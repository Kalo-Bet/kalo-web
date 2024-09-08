"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NotificationIcon = ({iconType}: any) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const imageSrc = currentTheme === 'dark' ? "/notification-dark.svg" : "/notification.svg";

  return (
    <div className={`${iconType ? 'p-3 rounded-xl bg-icon-light dark:bg-icon-dark hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer hidden md:block' : ''}`}>
      <Image src={imageSrc} alt="notification-icon" width={24} height={24} />
    </div>
  );
};

export default NotificationIcon;