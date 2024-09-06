import Image from "next/image";

interface NotificationCardProps {
    read?: boolean;
    title: string;
    message: string;
}

const NotificationCard:React.FC<NotificationCardProps> = ({read, title, message}) => {
  return (
    <div className="flex items-center gap-[27px] bg-bet-light-bg dark:bg-bet-dark-bg px-[52px] py-[24px] mt-[10px] rounded-xl">
        {read ? <Image src='/read.svg' alt="completed" width={24} height={24} /> : <Image src='/unread.svg' alt="completed" width={24} height={24} />}
        <div>
            <h1 className="mb-[14px]">{title}</h1>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default NotificationCard