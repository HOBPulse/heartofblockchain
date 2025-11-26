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

export default function ExploreHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false)
  const [isPendingCampaignsOpen, setIsPendingCampaignsOpen] = useState(false)
  const [userWalletAddress, setUserWalletAddress] = useState<string | undefined>(undefined)

  return (
    <header className={`relative w-full ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo - New Life with hearts */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                {/* Pink heart (behind) */}
                <div className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="#EC4899"
                    />
                  </svg>
                </div>
                {/* Light blue heart with white plus (in front, slightly offset) */}
                <div className="absolute left-2 top-2 w-8 h-8 md:w-10 md:h-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="#60A5FA"
                    />
                    <path
                      d="M12 8v8M8 12h8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">New Life</span>
            </Link>

            {/* Desktop Navigation - All grouped on the right */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="text-sm lg:text-base font-medium text-gray-900 hover:text-gray-700 transition-colors font-semibold"
              >
                Explore Campaigns
              </Link>
              <Link
                href="/about"
                className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-sm lg:text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsCreateCampaignOpen(true)}
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"
              >
                Create Campaign
              </Button>
              {userWalletAddress && (
                <Button
                  variant="outline"
                  onClick={() => setIsPendingCampaignsOpen(true)}
                  className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"
                >
                  My Campaigns
                </Button>
              )}
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-white ml-2"
              >
                Connect Wallet
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900 z-50 p-2"
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
            <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40">
              <div className="flex flex-col items-center space-y-6 pt-8 pb-6 px-4">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Campaigns
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-white mt-4"
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
      <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image - Using van.png as placeholder, you can replace with helicopter image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/plane.jpg"
            alt="Medical helicopter and rescue team"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 justify-center items-center">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Small Banner */}
            <div className="inline-block bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              Built on Trust. Powered by Blockchain.
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Explore Life-Saving Campaigns
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Real causes. Verified needs. Powered by blockchain transparency.
            </p>
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

