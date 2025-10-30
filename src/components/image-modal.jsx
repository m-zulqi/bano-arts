"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Download, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ImageModal({ image, onClose }) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (image) {
      // Save current scroll position
      const scrollY = window.scrollY

      // Lock body scroll
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"

      // Cleanup function to restore scroll
      return () => {
        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [image])

  if (!image) return null

  const handleDownload = async () => {
    try {
      const response = await fetch(image.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${image.title}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading image:", error)
    }
  }

  const handleCustomOrder = () => {
    const whatsappNumber = "+923230199208"
    const message = `Hi, I'm interested in ordering a custom piece similar to "${image.title}". Can we discuss?`
    const imageUrl = `${window.location.origin}${image.src}`

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message + "\n\nReference Image: " + imageUrl)}`,
      "_blank",
    )
  }

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop, not the content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 md:p-8"
        onClick={handleBackdropClick}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2" style={{ zIndex: 10000 }}>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#fea900] rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div
          className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-8 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full md:w-2/3 aspect-[4/3]"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">{image.title}</h2>
            <p className="text-gray-300 mb-6">{image.description}</p>

            <div className="space-y-4 mb-8">
              <div>
                <span className="text-gray-400">Category:</span>
                <span className="ml-2 text-white">{image.category}</span>
              </div>
              <div>
                <span className="text-gray-400">Dimensions:</span>
                <span className="ml-2 text-white capitalize">{image.dimensions}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button onClick={handleDownload} className="w-full bg-white text-black hover:bg-white/90">
                <Download className="mr-2 h-5 w-5" />
                Download Image
              </Button>

              <Button onClick={handleCustomOrder} className="w-full bg-green-500 hover:bg-green-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order Custom Piece
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
