"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Inter } from "next/font/google"
import Logo from "../../../public/logo.png"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export default function Footer() {
  return (
    <footer className={`bg-[#1B1C1E] text-white ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={Logo}
                alt="HOB Logo"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold text-white">HOB</span>
            </Link>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/track-donations" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Track Donations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Stay Updated</h3>
            <div className="p-2 justify-center items-center flex flex-row gap-4 border-1 rounded-md border-gray-700">
              <Input
                type="email"
                placeholder="Enter your email address"
                className=" text-white placeholder:text-gray-500 w-full border-none focus:border-none focus:ring-0"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col justify-start items-start gap-4">
           
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
             {/* Copyright */}
             <p className="text-gray-400 text-sm md:text-base">
              © Heartofblockchain2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

