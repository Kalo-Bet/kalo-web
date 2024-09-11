import { Connection } from "@solana/web3.js";


export const connection = new Connection(process.env.NEXT_PUBLIC_RPC?? "", 'confirmed');


// How to use the api