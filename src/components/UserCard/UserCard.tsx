import Image from "next/image";

interface UserCardProps {
    name: string;
    won?: boolean;
    Against?: boolean;
    price: string;
    imagePath?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, won, price, imagePath, Against }) => {
    return (
        <div>
            <div className="mb-[12px] flex flex-col items-center justify-center">
                {won ? <Image alt="completed" src="/done.svg" width={24} height={24} /> : <Image alt="completed" src="/disabled.svg" width={24} height={24} />}
                <Image className="mt-[10px] rounded-full" alt="avatar" src="/avatar.svg" width={50} height={50} />
                <div className="flex items-center gap-[6px] mt-[8px]"><span className="font-medium text-[16px]">{Against ? name : "You"}</span> <span className={`text-white font-medium text-[10px] ${Against ? "bg-danger" : "bg-btn-light dark:bg-btn-dark"} px-3 py-0.5 rounded-xl`}>{Against ? "Against" : "For"}</span></div>
            <p className="font-semibold text-[18px] mt-[5px]">{won? `Won the bet ${price}` : price}</p>
            </div>
        </div>
    )
}

export default UserCard