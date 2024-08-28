// context/Web3AuthContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const rpc = process.env.NEXT_PUBLIC_RPC

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.SOLANA,
  chainId: "0x1",
  rpcTarget: rpc,
  displayName: "Solana Devnet",
  blockExplorerUrl: "https://explorer.solana.com/",
  ticker: "SOL",
  tickerName: "Solana",
};

const Web3AuthContext = createContext<any>(null);

export const useWeb3Auth = () => useContext(Web3AuthContext);

export const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        if(!rpc && !clientId){
          console.log("error....")
          return
        }
        const privateKeyProvider = new SolanaPrivateKeyProvider({
          config: { chainConfig },
        });

        const web3auth = new Web3Auth({
          clientId: clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider,
        });

        // const web3auth = new Web3Auth({
        //     privateKeyProvider: {
        //         clientId,
        //         web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
        //         privateKeyProvider,
        //     }
        // })

        const openloginAdapter = new OpenloginAdapter({
          privateKeyProvider: privateKeyProvider,
        });
        web3auth.configureAdapter(openloginAdapter);

        await web3auth.initModal();

        setWeb3auth(web3auth);
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error("Error initializing Web3Auth", error);
      }
    };

    initWeb3Auth();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("No web3auth")
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    setLoggedIn(true);
  };

  const logout = async () => {
    if (!web3auth) return;
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
  };

  return (
    <Web3AuthContext.Provider value={{ provider, loggedIn, login, logout }}>
      {children}
    </Web3AuthContext.Provider>
  );
};
