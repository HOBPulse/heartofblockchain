import {
  Connection,
  PublicKey,
  TransactionSignature,
} from "@solana/web3.js";
import { Program, AnchorProvider, Wallet, BN } from "@coral-xyz/anchor";
import { Heartofblockchain } from "../types/heartofblockchain";
import idl from "@/idl/heartofblockchain.json";

export const PROGRAM_ID = new PublicKey(
  "3pgACwNx4AjBnqJzoeaXH26rLG9hVKqePTuaz64KXaQR"
);
const RPC_URL = process.env.SOLANA_RPC_URL || "http://127.0.0.1:8899";

export function createConnection(): Connection {
  return new Connection(RPC_URL, "confirmed");
}

// Provider generation
export const getProvider = (
  publicKey: PublicKey | null,
  signTransaction: any,
  sendTransaction: any
): Program<Heartofblockchain> | null => {
  if (!publicKey || !signTransaction) {
    console.error("Wallet not connected or missing signTransaction.");
    return null;
  }
  const connection = createConnection();
  const provider = new AnchorProvider(
    connection,
    { publicKey, signTransaction, sendTransaction } as unknown as Wallet,
    { commitment: "processed" }
  );

  return new Program<Heartofblockchain>(idl as any, provider);
};

export const getReadonlyProvider = (): Program<Heartofblockchain> => {
  const connection = createConnection();
  // dummy wallet for read-only operations
  const dummyWallet = {
    publicKey: PublicKey.default,
    signTransaction: async () => {
      throw new Error("Read-only provider cannot sign transactions.");
    },
    signAllTransactions: async () => {
      throw new Error("Read-only provider cannot sign transactions.");
    },
  };

  const provider = new AnchorProvider(connection, dummyWallet as any, {
    commitment: "processed",
  });

  return new Program<Heartofblockchain>(idl as any, provider);
};

export interface CampaignAccount {
  publicKey: PublicKey;
  creator: PublicKey;
  name: string;
  description: string;
  targetAmount: BN;
  amountDonated: BN;
  mint: PublicKey;
  thresholdReached: boolean;
  bump: number;
}

export function getClusterUrl(): string {
  return RPC_URL;
}

// PDA derivation utils
export function deriveCampaignPDA(
  creator: PublicKey,
  name: string
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("campaign"), creator.toBuffer(), Buffer.from(name, "utf8")],
    PROGRAM_ID
  );
}

export function deriveDonorPDA(
  campaign: PublicKey,
  donor: PublicKey
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("donor"), donor.toBuffer(), campaign.toBuffer()],
    PROGRAM_ID
  );
}

export function deriveGlobalConfigPDA(): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("global_config")],
    PROGRAM_ID
  );
}

// Fetching utils
export const fetchAllCampaigns = async (
  program: Program<Heartofblockchain>
): Promise<CampaignAccount[]> => {
  const campaigns = await program.account.campaign.all();
  return campaigns.map((c) => ({
    publicKey: c.publicKey,
    ...c.account,
  }));
};

export const fetchCampaign = async (
  program: Program<Heartofblockchain>,
  name: string,
  creator: string
): Promise<CampaignAccount | null> => {
  const campaigns = await program.account.campaign.all();
  const required = campaigns.find(
    (c) => c.account.name === name && c.account.creator.toBase58() === creator
  );
  return required
    ? {
        ...required.account,
        publicKey: required.publicKey,
      }
    : null;
};

export const fetchCampaignByCreator = async (
  program: Program<Heartofblockchain>,
  creator: string
): Promise<CampaignAccount[]> => {
  const campaigns = await program.account.campaign.all();
  const required = campaigns.filter(
    (c) => c.account.creator.toBase58() === creator
  );
  return required.map((c) => ({
    ...c.account,
    publicKey: c.publicKey,
  }));
};

export const fetchCampaignByAddress = async (
  program: Program<Heartofblockchain>,
  address: string
): Promise<CampaignAccount | null> => {
  try {
    const campaign = await program.account.campaign.fetch(address);
    return {
      ...campaign,
      publicKey: new PublicKey(address),
    };
  } catch (error) {
    // If the account does not exist, return null
    return null;
  }
};

// instruction fns
export const initialize = async (
  program: Program<Heartofblockchain>,
  publicKey: PublicKey
): Promise<TransactionSignature> => {
  const tx = await program.methods
    .initializeGlobalConfig()
    .accountsPartial({
      admin: publicKey,
    })
    .rpc();
  const connection = new Connection(
    program.provider.connection.rpcEndpoint,
    "confirmed"
  );
  await connection.confirmTransaction(tx, "finalized");
  return tx;
};
