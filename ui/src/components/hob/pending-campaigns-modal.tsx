"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, Filter, Users, Calendar } from "lucide-react"
import { Inter } from "next/font/google"
import { Campaign } from "@/data/campaigns"
import WithdrawalFlow from "./withdrawal-flow"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface PendingCampaignsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  campaigns: Campaign[]
  userWalletAddress?: string // Wallet address of the current user to check if they're a creator
}

type TabType = "ready" | "pending"

export default function PendingCampaignsModal({ 
  open, 
  onOpenChange, 
  campaigns,
  userWalletAddress
}: PendingCampaignsModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("ready")
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)
  const [isWithdrawalFlowOpen, setIsWithdrawalFlowOpen] = useState(false)

  // Filter campaigns based on tab
  // For "ready" - campaigns that are 100% funded and ended
  // For "pending" - campaigns that are still active or under review
  const readyCampaigns = campaigns.filter(c => {
    const percentFunded = (c.raised / c.goal) * 100
    return percentFunded >= 100 && c.daysRemaining <= 0
  })

  const pendingCampaigns = campaigns.filter(c => {
    const percentFunded = (c.raised / c.goal) * 100
    return percentFunded < 100 || c.daysRemaining > 0
  })

  // Check if user is creator of a campaign (simplified - in real app, check against campaign.creator)
  const isCreator = (campaign: Campaign) => {
    // In a real app, you'd check: campaign.creator === userWalletAddress
    // For now, we'll assume userWalletAddress exists means they can see withdraw buttons
    return !!userWalletAddress
  }

  const handleWithdraw = (campaign: Campaign) => {
    setSelectedCampaign(campaign)
    setIsWithdrawalFlowOpen(true)
  }

  const handleClose = () => {
    onOpenChange(false)
  }

  const currentCampaigns = activeTab === "ready" ? readyCampaigns : pendingCampaigns

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent 
          className={`max-w-4xl max-h-[90vh] overflow-y-auto p-0 ${inter.variable} font-[var(--font-inter)]`} 
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
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

          <div className="p-6 md:p-8">
            {/* Header with Tabs */}
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("ready")}
                    className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                      activeTab === "ready"
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Ready for Withdrawal
                  </button>
                  <button
                    onClick={() => setActiveTab("pending")}
                    className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                      activeTab === "pending"
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Pending Campaigns
                  </button>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </DialogHeader>

            {/* Content */}
            {currentCampaigns.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 md:py-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  No {activeTab === "ready" ? "Ready" : "Pending"} Campaigns
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 text-center max-w-md">
                  {activeTab === "ready"
                    ? "Your campaigns will appear here when they reach 100% funding and the campaign period ends."
                    : "Your campaigns will appear here when you start a campaign."}
                </p>
                {activeTab === "pending" && (
                  <Button
                    onClick={handleClose}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Start a Campaign
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {currentCampaigns.map((campaign) => {
                  const percentFunded = Math.round((campaign.raised / campaign.goal) * 100)
                  const canWithdraw = isCreator(campaign) && activeTab === "ready"

                  return (
                    <div
                      key={campaign.id}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                      {/* Campaign Image */}
                      <div className="relative h-48 w-full">
                        <Image
                          src={campaign.image}
                          alt={campaign.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Campaign Content */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {campaign.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                          {campaign.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                            <span className="text-gray-700 font-medium">
                              Target: {campaign.goal} SOL
                            </span>
                            <span className="text-gray-700 font-medium">
                              Raised: {campaign.raised} SOL
                            </span>
                            <span className="text-gray-700 font-medium">
                              {percentFunded}% Complete
                            </span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-pink-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${percentFunded}%` }}
                            />
                          </div>
                        </div>

                        {/* Statistics */}
                        <div className="flex items-center gap-4 md:gap-6 mb-4 text-sm md:text-base text-gray-600">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 md:h-5 md:w-5" />
                            <span>{campaign.donorCount} Donors</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                            <span>
                              {campaign.daysRemaining > 0
                                ? `${campaign.daysRemaining} Days Remaining`
                                : "Campaign Ended"}
                            </span>
                          </div>
                        </div>

                        {/* Withdraw Button (only for creators) */}
                        {canWithdraw && (
                          <Button
                            onClick={() => handleWithdraw(campaign)}
                            className="w-full bg-red-600 hover:bg-red-700 text-white"
                          >
                            Withdraw
                          </Button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Withdrawal Flow */}
      {selectedCampaign && (
        <WithdrawalFlow
          campaign={selectedCampaign}
          open={isWithdrawalFlowOpen}
          onOpenChange={setIsWithdrawalFlowOpen}
          onSuccess={() => {
            // Refresh campaigns or show success message
            setIsWithdrawalFlowOpen(false)
            setSelectedCampaign(null)
          }}
        />
      )}
    </>
  )
}

