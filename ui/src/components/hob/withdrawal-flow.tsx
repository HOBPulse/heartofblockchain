"use client"

import { useState } from "react"
import WithdrawFundsModal from "./withdraw-funds-modal"
import RecipientAddressModal from "./recipient-address-modal"
import ConfirmWithdrawalModal from "./confirm-withdrawal-modal"
import { Campaign } from "@/data/campaigns"

interface WithdrawalFlowProps {
  campaign: Campaign
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess?: () => void
}

type WithdrawalStep = "withdraw" | "recipient" | "confirm"

export default function WithdrawalFlow({ campaign, open, onOpenChange, onSuccess }: WithdrawalFlowProps) {
  const [step, setStep] = useState<WithdrawalStep>("withdraw")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [recipientData, setRecipientData] = useState<{
    address: string
    email: string
    saveAddress: boolean
    addressLabel?: string
  } | null>(null)

  const solPrice = 149.52
  const totalFundsRaised = campaign.raised * solPrice
  const platformFees = totalFundsRaised * 0.025
  const netAmountAvailable = totalFundsRaised - platformFees

  const handleWithdrawContinue = (amount: string) => {
    setWithdrawalAmount(amount)
    setStep("recipient")
  }

  const handleRecipientProceed = (data: { address: string; email: string; saveAddress: boolean; addressLabel?: string }) => {
    setRecipientData(data)
    setStep("confirm")
  }

  const handleConfirm = () => {
    // Here you would make the actual withdrawal API call
    console.log("Withdrawing:", {
      amount: withdrawalAmount,
      recipient: recipientData,
      campaign: campaign.id
    })
    
    if (onSuccess) {
      onSuccess()
    }
    
    // Reset flow
    setTimeout(() => {
      setStep("withdraw")
      setWithdrawalAmount("")
      setRecipientData(null)
      onOpenChange(false)
    }, 1000)
  }

  const handleBack = () => {
    if (step === "recipient") {
      setStep("withdraw")
    } else if (step === "confirm") {
      setStep("recipient")
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setStep("withdraw")
      setWithdrawalAmount("")
      setRecipientData(null)
    }, 300)
  }

  return (
    <>
      <WithdrawFundsModal
        open={open && step === "withdraw"}
        onOpenChange={handleClose}
        campaign={campaign}
        onContinue={handleWithdrawContinue}
      />
      <RecipientAddressModal
        open={open && step === "recipient"}
        onOpenChange={handleClose}
        onBack={handleBack}
        onProceed={handleRecipientProceed}
        initialAddress={recipientData?.address}
      />
      <ConfirmWithdrawalModal
        open={open && step === "confirm"}
        onOpenChange={handleClose}
        onBack={handleBack}
        onConfirm={handleConfirm}
        withdrawalData={{
          amount: withdrawalAmount,
          amountUSD: parseFloat(withdrawalAmount) * solPrice,
          toAddress: recipientData?.address || "",
          email: recipientData?.email
        }}
      />
    </>
  )
}

