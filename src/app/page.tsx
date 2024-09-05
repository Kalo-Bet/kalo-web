"use client"
import solanaProvider from "./services/solanaProvider";
import { useWeb3Auth } from "./context/AuthContext";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const {provider, login} = useWeb3Auth()

  const handleClick = async() => {
    const {getBalance, getAccounts} = solanaProvider(provider)

    const tokdn = await getAccounts()
    const balance = await getBalance()
    console.log("balance:", balance)
    console.log("balance:", tokdn)
  }

  return (
    <main>
     {/* <button className="block" onClick={handleClick}>djdjjde</button>
     <button onClick={() => login()}>Login</button> */}
      <Navbar />
      <Hero />
    </main>
  );
}
