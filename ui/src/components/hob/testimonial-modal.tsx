"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Inter } from "next/font/google"
import { Upload, X } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

interface TestimonialModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function TestimonialModal({ open, onOpenChange }: TestimonialModalProps) {
  const [name, setName] = useState("")
  const [story, setStory] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, story, file: selectedFile })
    // Reset form and close modal
    setName("")
    setStory("")
    setSelectedFile(null)
    onOpenChange(false)
  }

  const handleCancel = () => {
    setName("")
    setStory("")
    setSelectedFile(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`max-w-[90vw] sm:max-w-lg md:max-w-2xl p-6 md:p-8 ${inter.variable} font-[var(--font-inter)]`} 
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        showCloseButton={false}
      >
        {/* Custom Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 rounded-full bg-gray-200 hover:bg-gray-300 p-2 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
        <DialogHeader className="relative pr-8">
          <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 text-left pr-8">
            Share Your Experience
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-gray-600 mt-2 text-left">
            We value your journey with us! Share how we've helped you achieve your goals. Your story could inspire others to join the cause.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm md:text-base font-medium text-gray-900">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400"
              required
            />
          </div>

          {/* Story Textarea */}
          <div className="space-y-2">
            <label htmlFor="story" className="text-sm md:text-base font-medium text-gray-900">
              Share Your Story
            </label>
            <textarea
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={6}
              className="w-full min-h-[120px] md:min-h-[150px] px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 resize-none"
              required
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium text-gray-900">
              Attach a Photo or Video (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                {selectedFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                    <span className="text-sm md:text-base text-gray-600">{selectedFile.name}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedFile(null)
                      }}
                      className="text-xs text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-2" />
                    <span className="text-sm md:text-base text-gray-600">Upload File</span>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Your testimonial may be featured on our platform to inspire others. By submitting, you agree to our Terms of Service.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-100 order-2 sm:order-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white order-1 sm:order-2"
            >
              Submit Testimonial
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

