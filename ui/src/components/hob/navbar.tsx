"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Inter } from "next/font/google"
import CreateCampaignModal from "./create-campaign-modal"
import PendingCampaignsModal from "./pending-campaigns-modal"
import { campaigns } from "@/data/campaigns"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface NavbarProps {
  variant?: "transparent" | "white"
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false)
  const [isPendingCampaignsOpen, setIsPendingCampaignsOpen] = useState(false)
  const [userWalletAddress, setUserWalletAddress] = useState<string | undefined>(undefined)

  const isTransparent = variant === "transparent"
  const textColor = isTransparent ? "text-white" : "text-gray-900"
  const hoverColor = isTransparent ? "hover:text-gray-200" : "hover:text-gray-700"
  const bgColor = isTransparent ? "bg-transparent" : "bg-white"
  const borderColor = isTransparent ? "border-white/30" : "border-gray-300"
  const buttonVariant = isTransparent ? "outline" : "outline"
  const buttonClassName = isTransparent 
    ? "border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent"
    : "border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 z-50 ${bgColor} ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/logo.png"
                  alt="HOB Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className={`text-lg md:text-xl font-bold ${textColor}`}>HOB</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className={`text-sm lg:text-base font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/explore"
                className={`text-sm lg:text-base font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                Explore Campaigns
              </Link>
              <Link
                href="/about"
                className={`text-sm lg:text-base font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                About
              </Link>
              <Link
                href="/faq"
                className={`text-sm lg:text-base font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                FAQ
              </Link>
              <Button
                variant={buttonVariant}
                className={`${buttonClassName} ml-2`}
              >
                Connect Wallet
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${textColor} z-50 p-2`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden fixed inset-0 top-16 ${isTransparent ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm z-40`}>
              <div className="flex flex-col items-center space-y-6 pt-8 pb-6 px-4">
                <Link
                  href="/"
                  className={`text-base font-medium ${textColor} ${hoverColor} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className={`text-base font-medium ${textColor} ${hoverColor} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Campaigns
                </Link>
                <Link
                  href="/about"
                  className={`text-base font-medium ${textColor} ${hoverColor} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className={`text-base font-medium ${textColor} ${hoverColor} transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Button
                  variant={buttonVariant}
                  className={`${buttonClassName} mt-4`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <CreateCampaignModal
        open={isCreateCampaignOpen}
        onOpenChange={setIsCreateCampaignOpen}
        onSubmit={(data) => {
          console.log("Campaign data:", data)
        }}
      />
      <PendingCampaignsModal
        open={isPendingCampaignsOpen}
        onOpenChange={setIsPendingCampaignsOpen}
        campaigns={campaigns}
        userWalletAddress={userWalletAddress}
      />
    </>
  )
}

