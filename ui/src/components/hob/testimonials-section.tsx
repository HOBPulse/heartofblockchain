"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import TestimonialModal from "./testimonial-modal"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export default function TestimonialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-[#F5F5F5] ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
          <Link
            href="/explore"
            className="text-red-600 hover:text-red-700 font-medium text-base md:text-lg transition-colors"
          >
            See all
          </Link>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#F5F5F5] border-0 shadow-none">
              <CardContent className="p-6 md:p-8">
                {/* Large Quotation Mark */}
                <div className="mb-4">
                  <Image
                    src="/Vector.png"
                    alt="Quotation mark"
                    width={20}
                    height={20}
                    className="w-6 h-6 md:w-6 md:h-6 opacity-30"
                  />
                </div>
                
                {/* Quote Text */}
                <p className="text-base md:text-lg text-gray-900 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <span className="font-normal text-gray-900 text-base md:text-lg">
                    {testimonial.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Share Your Stories Button */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="border-gray-900 text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-md font-medium transition-colors"
          >
            Share your Stories
          </Button>
        </div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}

