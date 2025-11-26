"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Heart, Menu, X } from "lucide-react"
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false)
  const [isPendingCampaignsOpen, setIsPendingCampaignsOpen] = useState(false)
  const [userWalletAddress, setUserWalletAddress] = useState<string | undefined>(undefined)

  return (
    <header className={`relative w-full ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
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
              <span className="text-lg md:text-xl font-bold text-white">HOB</span>
            </Link>

            {/* Desktop Navigation - All grouped on the right */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className="text-sm lg:text-base font-medium text-white hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="text-sm lg:text-base font-medium text-white hover:text-gray-200 transition-colors"
              >
                Explore Campaigns
              </Link>
              <Link
                href="/about"
                className="text-sm lg:text-base font-medium text-white hover:text-gray-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-sm lg:text-base font-medium text-white hover:text-gray-200 transition-colors"
              >
                FAQ
              </Link>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent ml-2"
              >
                Connect Wallet
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white z-50 p-2"
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
            <div className="md:hidden fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-sm z-40">
              <div className="flex flex-col items-center space-y-6 pt-8 pb-6 px-4">
                <Link
                  href="/"
                  className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Campaigns
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/header.png"
            alt="Medical professionals helping patients"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Help Save Lives With Just One Click
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8 max-w-xl">
              We connect critically ill patients with life-saving care and transparent blockchain-powered donations.
            </p>

            {/* Impact Statistics */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex items-center gap-2 md:gap-3">
                <Globe className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white font-medium">
                  23 Countries Reached
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-500 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white font-medium">
                  127 Lives Saved
                </span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-md font-medium transition-colors"
                >
                  Explore Campaigns
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsCreateCampaignOpen(true)}
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-md font-medium transition-colors"
              >
                Create Campaign
              </Button>
              {userWalletAddress && (
                <Button
                  variant="outline"
                  onClick={() => setIsPendingCampaignsOpen(true)}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-md font-medium transition-colors"
                >
                  My Campaigns
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CreateCampaignModal
        open={isCreateCampaignOpen}
        onOpenChange={setIsCreateCampaignOpen}
        onSubmit={(data) => {
          console.log("Campaign data:", data)
          // Here you would submit to your API
        }}
      />
      <PendingCampaignsModal
        open={isPendingCampaignsOpen}
        onOpenChange={setIsPendingCampaignsOpen}
        campaigns={campaigns}
        userWalletAddress={userWalletAddress}
      />
    </header>
  )
}

