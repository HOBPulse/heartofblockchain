"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export default function InitiativeSection() {
  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-white ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The Heart of Blockchain Initiative
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Heart of Blockchain is an innovative blockchain-based platform for transparent fundraising that connects critically ill patients with life-saving care and transparent blockchain-powered donations.
              </p>
              <p>
                The project 'HOB' is an initiative of our charitable foundation. Our team has been engaged in medical work since 2011. The foundation New Life was established in 2019 to provide transparent and secure fundraising for medical emergencies.
              </p>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-md font-medium transition-colors">
              Read More
            </Button>
          </div>

          {/* Right Side - Image with Decorative Elements */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/initiative.png"
                alt="Medical professionals helping patients"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Yellow Starburst - Top Right */}
            {/* <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 shadow-lg transform rotate-12" 
                   style={{
                     clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                   }}>
              </div>
            </div> */}
            
            {/* Blue Starburst - Bottom Right */}
            {/* <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-400 shadow-lg transform -rotate-12"
                   style={{
                     clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                   }}>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

