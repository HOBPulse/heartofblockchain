"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, ArrowLeft, AlertTriangle } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface ConfirmWithdrawalModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBack: () => void
  onConfirm: () => void
  withdrawalData: {
    amount: string
    amountUSD: number
    toAddress: string
    email?: string
  }
}

export default function ConfirmWithdrawalModal({ 
  open, 
  onOpenChange, 
  onBack,
  onConfirm,
  withdrawalData
}: ConfirmWithdrawalModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleConfirm = async () => {
    setIsProcessing(true)
    // Simulate transaction processing
    setTimeout(() => {
      onConfirm()
      setIsProcessing(false)
      onOpenChange(false)
    }, 2000)
  }

  const handleClose = () => {
    if (!isProcessing) {
      onOpenChange(false)
    }
  }

  const truncatedAddress = withdrawalData.toAddress.length > 20 
    ? `${withdrawalData.toAddress.slice(0, 6)}...${withdrawalData.toAddress.slice(-4)}`
    : withdrawalData.toAddress

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent 
        className={`max-w-md p-0 ${inter.variable} font-[var(--font-inter)]`} 
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        showCloseButton={false}
      >
        {/* Close Button */}
        {!isProcessing && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        )}

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={onBack}
                disabled={isProcessing}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Back"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900">
                Confirm Withdrawal
              </DialogTitle>
            </div>
          </DialogHeader>

          {/* Warning Section */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm md:text-base font-semibold text-red-900 mb-2">
                  Please Verify
                </p>
                <ul className="space-y-1 text-xs md:text-sm text-red-800 list-disc list-inside">
                  <li>Double-check the recipient address is correct</li>
                  <li>Ensure you have access to the recipient wallet</li>
                  <li>Verify the withdraw amount</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Withdrawal Information */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-sm md:text-base text-gray-600">Amount:</span>
              <span className="text-sm md:text-base font-semibold text-gray-900">
                ${withdrawalData.amountUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-sm md:text-base text-gray-600">To Address:</span>
              <span className="text-sm md:text-base font-semibold text-gray-900 font-mono">
                {truncatedAddress}
              </span>
            </div>
            {withdrawalData.email && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-sm md:text-base text-gray-600">Confirmation Email:</span>
                <span className="text-sm md:text-base font-semibold text-gray-900">
                  {withdrawalData.email}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isProcessing}
              className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={isProcessing}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Processing..." : "Confirm Withdrawal"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

