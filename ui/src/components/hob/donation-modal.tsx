"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, Heart, ExternalLink } from "lucide-react";
import { Campaign } from "@/data/campaigns";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign: Campaign;
}

type ModalState = "not-connected" | "connected" | "success";

const getTagStyles = (variant: string) => {
  switch (variant) {
    case "urgent":
      return "bg-red-400/20 text-red-600";
    case "verified":
      return "bg-green-400/20 text-green-600";
    case "child":
      return "bg-purple-400/20 text-purple-600";
    case "recovery":
      return "bg-blue-400/20 text-blue-600";
    case "low-funded":
      return "bg-gray-400/20 text-gray-600";
    case "adult":
      return "bg-orange-400/20 text-orange-600";
    case "ongoing":
      return "bg-orange-400/20 text-orange-600";
    case "mother":
      return "bg-pink-400/20 text-pink-600";
    default:
      return "bg-gray-400/20 text-gray-600";
  }
};

export default function DonationModal({
  open,
  onOpenChange,
  campaign,
}: DonationModalProps) {
  const [modalState, setModalState] = useState<ModalState>("not-connected");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletName, setWalletName] = useState<string | null>(null);
  const [donationData, setDonationData] = useState<{
    amount: number;
    txHash: string;
    date: string;
  } | null>(null);

  const handleConnectWallet = () => {
    // Simulate wallet connection - replace with actual wallet integration
    setWalletAddress("0xAB12...CD34");
    setWalletName("Solflare Wallet");
    setModalState("connected");
  };

  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }

    // Simulate donation - replace with actual blockchain transaction
    const donationAmount = parseFloat(amount);
    const txHash = `0xF4a${Math.random().toString(16).substring(2, 10)}8K91`;
    const date = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short",
    });

    setDonationData({
      amount: donationAmount,
      txHash,
      date,
    });
    setModalState("success");
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after a delay to allow animation
    setTimeout(() => {
      setModalState("not-connected");
      setAmount("");
      setDonationData(null);
    }, 300);
  };

  const percentFunded = Math.round((campaign.raised / campaign.goal) * 100);
  const solPrice = 140.4; // Approximate SOL price in USD

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={`max-w-md p-0 ${inter.variable} font-[var(--font-inter)]`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        showCloseButton={false}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {modalState === "success" && donationData ? (
          /* Success State */
          <div className="p-6 md:p-8">
            <DialogHeader className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Thank you for donating {donationData.amount} SOL to{" "}
                {(() => {
                  if (
                    campaign.name.includes("Help") &&
                    campaign.name.includes("Get")
                  ) {
                    // Extract name from "Help Amal Get Life-Saving Liver Transplant"
                    const parts = campaign.name.split(" ");
                    return parts[1]; // "Amal"
                  } else if (campaign.name.includes("for")) {
                    // Extract from "Monthly Medications for Idris"
                    return campaign.name.split(" for ")[1];
                  } else {
                    // Use name directly or first part
                    return campaign.name.split(",")[0];
                  }
                })()}
                's recovery!
              </DialogTitle>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Your donation is confirmed and recorded on Solana.
              </p>
            </DialogHeader>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  Donation Summary
                </h3>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount donated:</span>
                    <span className="font-semibold text-gray-900">
                      {donationData.amount} SOL ($
                      {(donationData.amount * solPrice).toFixed(2)})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tx Hash:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs">
                        {donationData.txHash}
                      </span>
                      <Link
                        href={`https://solscan.io/tx/${donationData.txHash}`}
                        target="_blank"
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        View on Solscan
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campaign:</span>
                    <span className="font-semibold text-gray-900">
                      {campaign.name.includes("Help") &&
                      campaign.name.includes("Get")
                        ? campaign.name
                        : campaign.name.includes("for")
                        ? campaign.name
                        : `${campaign.name}'s ${
                            campaign.name.includes("Liver")
                              ? "Liver Transplant"
                              : "Treatment"
                          }`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-gray-900">
                      {donationData.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                Share
              </Button>
              <Button
                onClick={() => {
                  handleClose();
                  window.location.href = "/explore";
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Explore Campaigns
              </Button>
            </div>
          </div>
        ) : (
          /* Donation Form States */
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-start gap-4 mb-4">
                {/* Campaign Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={campaign.image}
                    alt={campaign.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {campaign.name.includes("Get")
                      ? campaign.name
                      : `Help ${campaign.name} Get Life-Saving Treatment`}
                  </DialogTitle>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {campaign.tags.slice(0, 3).map((tag, index) => (
                      <Badge
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full border ${getTagStyles(
                          tag.variant
                        )}`}
                      >
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>
            <div className="pb-4">
              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentFunded}%` }}
                  />
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 float-right">
                {percentFunded}% Funded
              </p>
            </div>

            {modalState === "not-connected" ? (
              /* Wallet Not Connected State */
              <div className="space-y-4">
                <div>
                  <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                    Enter Amount
                  </label>
                  <Input
                    type="number"
                    placeholder="Amount in Sol"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
                    disabled
                  />
                </div>
                <button
                  onClick={handleConnectWallet}
                  className="text-red-600 hover:text-red-700 text-sm md:text-base font-medium w-full text-left"
                >
                  Connect Wallet
                </button>
                <p className="text-xs md:text-sm text-gray-500">
                  Your donation will be publicly visible on-chain.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConnectWallet}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md"
                    disabled
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            ) : (
              /* Wallet Connected State */
              <div className="space-y-4">
                <div>
                  <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                    Enter Amount
                  </label>
                  <Input
                    type="number"
                    placeholder="Amount in Sol"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  Connected: <span className="font-semibold">{walletName}</span>{" "}
                  ({walletAddress})
                </div>
                <p className="text-xs md:text-sm text-gray-500">
                  Your donation will be publicly visible on-chain.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDonate}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
