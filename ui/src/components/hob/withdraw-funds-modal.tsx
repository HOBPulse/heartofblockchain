"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Inter } from "next/font/google"
import { Campaign } from "@/data/campaigns"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface WithdrawFundsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  campaign: Campaign
  onContinue: (amount: string) => void
}

export default function WithdrawFundsModal({ 
  open, 
  onOpenChange, 
  campaign,
  onContinue 
}: WithdrawFundsModalProps) {
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  
  const solPrice = 149.52 // Approximate SOL price in USD
  const totalFundsRaised = campaign.raised * solPrice
  const platformFees = totalFundsRaised * 0.025 // 2.5% platform fees
  const netAmountAvailable = totalFundsRaised - platformFees
  const maxWithdrawalSOL = netAmountAvailable / solPrice

  const handleContinue = () => {
    if (withdrawalAmount && parseFloat(withdrawalAmount) > 0) {
      onContinue(withdrawalAmount)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setWithdrawalAmount("")
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent 
        className={`max-w-md p-0 ${inter.variable} font-[var(--font-inter)]`} 
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
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 text-left">
              Withdraw Funds
            </DialogTitle>
            <p className="text-sm md:text-base text-gray-600 mt-2">Ready for Withdrawal</p>
          </DialogHeader>

          {/* Campaign Name */}
          <div className="mb-6">
            <p className="text-base md:text-lg font-semibold text-red-600">
              {campaign.name}
            </p>
          </div>

          {/* Campaign Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-5 mb-6">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
              Campaign Summary
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Funds Raised:</span>
                <span className="font-semibold text-gray-900">
                  {campaign.raised} SOL (${totalFundsRaised.toLocaleString(undefined, { maximumFractionDigits: 0 })})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fees (2.5%):</span>
                <span className="font-semibold text-gray-900">
                  ${platformFees.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-900 font-semibold">Net Amount Available:</span>
                <span className="font-bold text-gray-900">
                  ${netAmountAvailable.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Enter the amount you wish to withdraw. You can withdraw a smaller amount first to verify the process.
          </p>

          {/* Withdrawal Amount Input */}
          <div className="mb-4">
            <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
              Withdrawal Amount (SOL)
            </label>
            <Input
              type="number"
              placeholder="0.00"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              min="0"
              max={maxWithdrawalSOL}
              step="0.01"
              className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
            />
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Maximum: ${netAmountAvailable.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!withdrawalAmount || parseFloat(withdrawalAmount) <= 0 || parseFloat(withdrawalAmount) > maxWithdrawalSOL}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

