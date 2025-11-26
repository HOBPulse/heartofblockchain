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
import { X, ArrowLeft } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface RecipientAddressModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBack: () => void
  onProceed: (data: { address: string; email: string; saveAddress: boolean; addressLabel?: string }) => void
  initialAddress?: string
}

export default function RecipientAddressModal({ 
  open, 
  onOpenChange, 
  onBack,
  onProceed,
  initialAddress
}: RecipientAddressModalProps) {
  const [recipientAddress, setRecipientAddress] = useState(initialAddress || "0x1234...abcd")
  const [email, setEmail] = useState("")
  const [saveAddress, setSaveAddress] = useState(false)
  const [addressLabel, setAddressLabel] = useState("")

  const handleProceed = () => {
    if (recipientAddress) {
      onProceed({
        address: recipientAddress,
        email,
        saveAddress,
        addressLabel: saveAddress ? addressLabel : undefined
      })
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setRecipientAddress(initialAddress || "0x1234...abcd")
      setEmail("")
      setSaveAddress(false)
      setAddressLabel("")
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
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={onBack}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900">
                Recipient Address
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-4 md:space-y-6">
            {/* Recipient Wallet Address */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Recipient Wallet Address
              </label>
              <Input
                type="text"
                placeholder="0x1234...abcd"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
              />
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="checkbox"
                  id="save-address"
                  checked={saveAddress}
                  onChange={(e) => setSaveAddress(e.target.checked)}
                  className="w-4 h-4 border-2 border-red-600 rounded text-red-600 focus:ring-red-600 focus:ring-2"
                />
                <label htmlFor="save-address" className="text-sm md:text-base text-gray-700 cursor-pointer">
                  Save this address for future withdrawals
                </label>
              </div>
            </div>

            {/* Address Label (shown when save address is checked) */}
            {saveAddress && (
              <div>
                <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                  Address Label
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Main Wallet, Charity Account"
                  value={addressLabel}
                  onChange={(e) => setAddressLabel(e.target.value)}
                  className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
                />
              </div>
            )}

            {/* Email (Optional) */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Email (Optional)
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
              />
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                We'll send you a confirmation when the withdrawal is complete
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
                onClick={handleProceed}
                disabled={!recipientAddress}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Withdraw
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

