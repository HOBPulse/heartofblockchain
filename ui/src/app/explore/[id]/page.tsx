"use client";

import { ReactNode, useState, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ExploreHeader from "@/components/hob/explore-header";
import Footer from "@/components/hob/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Share2,
  MapPin,
  Calendar,
  Check,
  ExternalLink,
  AlertTriangle,
  ShieldCheck,
  Baby,
  HeartPulse,
} from "lucide-react";
import { getCampaignById } from "@/data/campaigns";
import { Inter } from "next/font/google";
import DonationModal from "@/components/hob/donation-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

interface PageProps {
  params: Promise<{ id: string }>;
}

const getTagStyles = (variant: string) => {
  switch (variant) {
    case "urgent":
      return "bg-red-100 text-red-600 border-red-200";
    case "verified":
      return "bg-emerald-100 text-emerald-600 border-emerald-200";
    case "child":
      return "bg-purple-100 text-purple-600 border-purple-200";
    case "recovery":
      return "bg-sky-100 text-sky-600 border-sky-200";
    case "low-funded":
      return "bg-gray-100 text-gray-600 border-gray-200";
    case "adult":
      return "bg-amber-100 text-amber-600 border-amber-200";
    case "ongoing":
      return "bg-amber-100 text-amber-600 border-amber-200";
    case "mother":
      return "bg-pink-100 text-pink-600 border-pink-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const tagIconMap: Record<string, ReactNode> = {
  urgent: <AlertTriangle className="h-3.5 w-3.5" />,
  verified: <ShieldCheck className="h-3.5 w-3.5" />,
  child: <Baby className="h-3.5 w-3.5" />,
  recovery: <HeartPulse className="h-3.5 w-3.5" />,
};

export default function CampaignDetailsPage({ params }: PageProps) {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { id } = use(params);
  const campaign = getCampaignById(id);

  if (!campaign) {
    notFound();
  }

  const [documents, setDocuments] = useState(
    campaign.medicalDocuments.map((doc) => ({
      ...doc,
      checked: Boolean(doc.checked),
    }))
  );
  const percentFunded = Math.round((campaign.raised / campaign.goal) * 100);

  const toggleDocument = (index: number) => {
    setDocuments((prev) =>
      prev.map((doc, idx) =>
        idx === index ? { ...doc, checked: !doc.checked } : doc
      )
    );
  };

  return (
    <div
      className={`bg-[#f5f7fb] ${inter.variable} min-h-screen font-[var(--font-inter)]`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <ExploreHeader />

      <div className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/40 sm:p-8 md:p-10">
          <div className="space-y-8 py-4 flex flex-col md:space-y-0 md:flex-row md:items-center md:justify-between md:py-0">
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-gray-900 md:text-[34px]">
              {campaign.name.includes("Get") || campaign.name.includes("Help")
                ? campaign.name
                : campaign.name.includes("for")
                ? `Help ${
                    campaign.name.split(" for ")[1]
                  } Get Life-Saving Treatment`
                : `Help ${campaign.name} Get Life-Saving ${
                    campaign.age > 0 ? "Treatment" : "Support"
                  }`}
            </h1>
            <Link
              href="/explore"
              className="rounded-full bg-gray-300/20 p-3 text-gray-600 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <X className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              {campaign.campaignId}
            </p>
            <button className="p-3 text-gray-600 flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <pre className="underline">Share</pre>
            </button>
          </div>
          <div className="space-y-8">
            {/* Hero Media */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-100">
              <div className="relative aspect-[16/9] w-full">
                {campaign.video ? (
                  <video
                    src={campaign.video}
                    controls
                    className="h-full w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={campaign.image}
                    alt={campaign.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                )}
              </div>

              {/* Tags Overlay */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {campaign.tags.map((tag, index) => (
                  <Badge
                    key={`${tag.label}-${index}`}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-medium ${getTagStyles(
                      tag.variant
                    )}`}
                  >
                    {tagIconMap[tag.variant] ?? null}
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Header Section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{campaign.daysRemaining} Days Remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Left Column - Main Content */}
            <div className="space-y-10">
              <p className="text-lg leading-relaxed text-gray-600">
                {campaign.shortDescription}
              </p>

              {/* Campaign Story */}
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Campaign Story
                  </h2>
                </div>
                <div className="mt-5 space-y-5 text-base leading-7 text-gray-600">
                  {campaign.campaignStory.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Use of Funds */}
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Use of Funds
                  </h2>
                </div>
                <div className="mt-5 rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full text-left text-base text-gray-700">
                    <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
                      <tr>
                        <th className="px-5 py-4">Category</th>
                        <th className="px-5 py-4 text-right">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {campaign.useOfFunds.map((item, index) => (
                        <tr key={index} className="bg-white/50">
                          <td className="px-5 py-4">{item.category}</td>
                          <td className="px-5 py-4 text-right font-semibold text-gray-900">
                            ${item.amount.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Donation Progress */}
              <div className="rounded-2xl border border-gray-100 bg-gray-300/30 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Progress
                </p>
                <p className="mt-3 text-3xl font-semibold text-gray-900">
                  ${campaign.raised.toLocaleString()}{" "}
                  <span className="text-base font-normal text-gray-500">
                    of ${campaign.goal.toLocaleString()} raised
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  ( {percentFunded}% ) from {campaign.donorCount} donors
                </p>
                <div className="mt-5 h-3 w-full rounded-full bg-white/70">
                  <div
                    className="h-4 rounded-full transition-all duration-300"
                    style={{
                      width: `${percentFunded}%`,
                      background:
                        "linear-gradient(to right, rgb(239, 68, 68), rgb(147, 51, 234), rgb(236, 72, 153), rgb(59, 130, 246), rgb(34, 197, 94))",
                    }}
                  />
                </div>
                <Button
                  className="mt-6 w-full rounded-xl bg-[#f54b59] py-6 text-base font-semibold text-white shadow-lg shadow-[#f54b59]/30 transition hover:bg-[#df3241]"
                  onClick={() => setIsDonationModalOpen(true)}
                >
                  Donate Now with Wallet
                </Button>
                <Link
                  href="#"
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  View on Solana Explorer
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              {/* Medical Documentation */}
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Medical Documentation
                </h3>
                <div className="mt-4 space-y-3">
                  {documents.map((doc, index) => (
                    <label
                      key={doc.name}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-xl border border-transparent px-2 py-1 transition hover:border-gray-100"
                    >
                      <input
                        type="checkbox"
                        checked={doc.checked}
                        onChange={() => toggleDocument(index)}
                        className="peer sr-only"
                        aria-label={doc.name}
                      />
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                          doc.checked
                            ? "border-[#2cbc63] bg-[#2cbc63]"
                            : "border-gray-300 bg-transparent peer-focus-visible:border-gray-500"
                        }`}
                      >
                        {doc.checked && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {doc.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Recent Donations */}
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Donation
                </h3>
                <div className="mt-4 space-y-4">
                  {campaign.recentDonations.map((donation, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-gray-50 bg-gray-50/60 py-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600">
                        {donation.isAnonymous
                          ? "?"
                          : donation.donor.slice(2, 4)}
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-3 text-sm">
                        <div className="min-w-0">
                          <p className="truncate font-medium text-gray-900">
                            {donation.isAnonymous
                              ? "Anonymous"
                              : donation.donor}
                          </p>
                          <p className="text-xs text-gray-500">Supporter</p>
                        </div>
                        <span className="text-base font-semibold text-gray-900">
                          {donation.amount} SOL
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Donation Modal */}
      <DonationModal
        open={isDonationModalOpen}
        onOpenChange={setIsDonationModalOpen}
        campaign={campaign}
      />
    </div>
  );
}
