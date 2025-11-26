"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, Upload, Camera } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface CreateCampaignModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (data: CampaignFormData) => void
}

export interface CampaignFormData {
  title: string
  goal: string
  startDate: string
  endDate: string
  description: string
  impactMetrics: string
  image?: File | null
}

export default function CreateCampaignModal({ open, onOpenChange, onSubmit }: CreateCampaignModalProps) {
  const [formData, setFormData] = useState<CampaignFormData>({
    title: "",
    goal: "",
    startDate: "",
    endDate: "",
    description: "",
    impactMetrics: "",
    image: null,
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleInputChange = (field: keyof CampaignFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData)
    }
    // Reset form
    setFormData({
      title: "",
      goal: "",
      startDate: "",
      endDate: "",
      description: "",
      impactMetrics: "",
      image: null,
    })
    setImagePreview(null)
    onOpenChange(false)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        title: "",
        goal: "",
        startDate: "",
        endDate: "",
        description: "",
        impactMetrics: "",
        image: null,
      })
      setImagePreview(null)
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent 
        className={`max-w-2xl max-h-[90vh] overflow-y-auto p-0 ${inter.variable} font-[var(--font-inter)]`} 
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        showCloseButton={false}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 text-left">
              Create a campaign to raise funds and make a difference.
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 md:space-y-6">
            {/* Campaign Title */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Campaign Title
              </label>
              <Input
                type="text"
                placeholder="Enter campaign title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
              />
            </div>

            {/* Fundraising Goal */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Fundraising Goal ($)
              </label>
              <Input
                type="number"
                placeholder="Enter amount in USD"
                value={formData.goal}
                onChange={(e) => handleInputChange("goal", e.target.value)}
                className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
              />
            </div>

            {/* Date Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                  Start Date
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                  End Date
                </label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                  className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Description
              </label>
              <textarea
                placeholder="Describe your campaign and its impact"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:border-gray-400 focus:ring-gray-400 focus:outline-none resize-none"
              />
            </div>

            {/* Impact Metrics */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Impact Metrics
              </label>
              <Input
                type="text"
                placeholder="e.g., Number of lives saved, patients helped, etc."
                value={formData.impactMetrics}
                onChange={(e) => handleInputChange("impactMetrics", e.target.value)}
                className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-md"
              />
            </div>

            {/* Upload Image/Video */}
            <div>
              <label className="text-sm md:text-base font-medium text-gray-900 mb-2 block">
                Upload Image/Video
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <Camera className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Click to upload image or video</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Guidelines and Tips */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
                Guidelines and Tips
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>Set a realistic fundraising goal to build trust with donors.</li>
                <li>Use high-quality images to connect emotionally.</li>
                <li>Clearly define your impact metrics to attract donations.</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md"
              >
                Preview Campaign
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md"
                disabled={!formData.title || !formData.goal || !formData.description}
              >
                Submit for Review
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

