"use client"
import Navbar from "@/components/Navbar/Navbar";
import NotificationCard from "@/components/NotificationCard/NotificationCard";
import Image from "next/image";
import Link from "next/link";

const Notifications = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-[73px] mb-[73px] mx-[150px]">
                <div>
                    <div className="flex items-center gap-[20px] mt-[50px] mb-[50px]">
                        <Link href="/"><Image alt="arrow-icon" src="/arrow_back.svg" height={16} width={16} /></Link>
                        <h1 className="font-bold text-[28px]">Notifications</h1>
                    </div>
                    <h2 className="font-bold text-[24px]">Today</h2>
                    <NotificationCard title="Big brother" message="Your bet has ended please click to verify the winner and complete the bet" />
                    <h2 className="font-bold text-[24px] mt-[50px]">Few weeks</h2>
                    <NotificationCard read={true} title="Big brother" message="Your bet has ended please click to verify the winner and complete the bet" />
                    <NotificationCard read={true} title="Big brother" message="Your bet has ended please click to verify the winner and complete the bet" />
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications;