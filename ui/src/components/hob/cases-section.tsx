"use client"

import Link from "next/link"
import { Search, DollarSign, TrendingUp } from "lucide-react"
import CaseCard from "./case-card"
import { urgentCases } from "@/data/cases"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export default function CasesSection() {
  return (
    <div className={`${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* How It Works Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Step 1: Explore Patient Cases */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                Explore Patient Cases
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Browse verified patient campaigns from trusted medical partners
              </p>
            </div>

            {/* Step 2: Donate Securely */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                Donate Securely
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Make instant, transparent donations using your wallet
              </p>
            </div>

            {/* Step 3: Track the Impact */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-yellow-600" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                Track the Impact
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Get real-time updates on your donations and see the lives you help save
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Cases Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4 bg-blue-50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Urgent Cases You Can Help
            </h2>
            <Link
              href="/explore"
              className="text-red-600 hover:text-red-700 font-medium text-base md:text-lg transition-colors"
            >
              See All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bg-blue-50">
            {urgentCases.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

