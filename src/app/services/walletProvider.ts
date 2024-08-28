import { IProvider } from "@web3auth/base";
import solanaProvider from "./solanaProvider";

export interface IWalletProvider {
  getAccounts: () => Promise<any>;
  getBalance: () => Promise<any>;
  signAndSendTransaction: () => Promise<void>;
  signTransaction: () => Promise<void>;
  signMessage: () => Promise<void>;
  getTokenBalance?: () => Promise<void>;
  signAndSendTokenTransaction?: () => Promise<void>;
  randomContractInteraction?: () => Promise<void>;
}

export const getWalletProvider = (chain: string, provider: IProvider, uiConsole: any): IWalletProvider => {
    return solanaProvider(provider, uiConsole);
};