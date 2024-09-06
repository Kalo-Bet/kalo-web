import Link from 'next/link'

const Hero = () => {
    return (
        <div className='h-screen flex flex-col justify-center max-h-[861px] px-24 bg-hero-img bg-cover bg-center'>
            <div>
                <h1 className='font-semibold text-[64px] max-w-[706px]'>Bet on anything, <span className='text-[#d23634]'>win everything.</span></h1>
                <Link href="/create-bet"><button className='mt-[61px] px-12 w-[591px] py-6 font-bold text-[20px] rounded-xl bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark'>Create Bet</button></Link>
            </div>
        </div>
    )
}

export default Hero