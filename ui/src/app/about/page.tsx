"use client"

import Image from "next/image"
import Footer from "@/components/hob/footer"
import { Inter } from "next/font/google"
import Header from "@/components/hob/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})


export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-white ${inter.variable} font-[var(--font-inter)]`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Header with Navbar */}
      <header className="relative w-full">
        <Header />
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="w-full">
        <div className="relative isolate">
          <div className="relative z-10 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 space-y-16 md:space-y-20">
            {/* Who We Are Section */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">About</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
                    <p>
                    Heart of the Blockchain is an initiative built on compassion and technology created by a medical transport company that has spent years saving lives through global coordination and care.
                    </p>
                    <p>
                    For more than six years, our foundation has operated internationally, backed by a company that has been active in medical assistance since 2011.
                    </p>
                    <p>
                    Even when local doctors lose hope, we step in finding new treatment paths and saving dozens of lives through rapid coordination and global support.
                    </p>
                    <p>
                    We&apos;ve been connecting patients in need with the world&apos;s best hospitals, organizing emergency air evacuations, and providing financial support to those who cannot afford life-saving treatments.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/who.png"
                      alt="Community medical transport team"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission Section */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/mission.png"
                      alt="Medical specialists working"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Purpose</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  To ensure specialized access to medical care for every patient in need regardless of geography or financial status, while using blockchain technology to make every donation transparent and trustworthy.
                  </p>
                  <div className="space-y-4">
                    <p>Our work is guided by four key principles:</p>
                    {[
                      { label: "Accessibility", copy: "Bringing advanced medical care to those who need it most." },
                      { label: "Transparency", copy: "Every donation is recorded on-chain, visible in real time." },
                      { label: "Global Collaboration", copy: "Connecting the crypto community to life-saving causes." },
                      { label: "Scalability", copy: "Expanding our impact through technology and sustainable funding." },
                    ].map((item, index) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <span className="text-red-600 font-bold text-lg md:text-xl">{index + 1}.</span>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.label}</h3>
                          <p className="text-gray-700 text-sm md:text-base">{item.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Our Programs Section */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Support</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Our Programs & Services
                  </h2>
                  <ul className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
                    <li>
                      <h3 className="font-semibold text-gray-900 mb-1">Specialized Treatment Abroad</h3>
                      <p>
                      We help patients find the best international medical facilities and coordinate every stage of treatment from consultation to rehabilitation.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold text-gray-900 mb-1">International Transportation</h3>
                      <p>
                      We organize medical evacuations using specialized ambulances, aircraft, and support teams, ensuring patients reach hospitals safely and on time.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-semibold text-gray-900 mb-1">Financial Support</h3>
                      <p>
                      For those who can&apos;t afford medical intervention, we help raise funds and connect them with compassionate donors worldwide.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/services.png"
                      alt="Emergency transport vehicle"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

