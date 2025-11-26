"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export default function CTASection() {
  return (
    <section className={`relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/van.png"
          alt="Ambulances"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
          Your click today could save a life tomorrow.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Join thousands of donors creating real, trackable impact through transparent blockchain-powered giving
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-md font-medium transition-colors">
          Explore Campaign
        </Button>
      </div>
    </section>
  )
}

