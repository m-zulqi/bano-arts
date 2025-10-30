"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import galleryData from "../data/gallery-data.json"
import ImageModal from "@/components/image-modal"
import { ImageFrame } from "@/components/ui/image-frame"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredArtworks, setFilteredArtworks] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ["All", "Islamic Arts", "Portraits", "Contemporary Arts"]

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredArtworks(galleryData)
    } else {
      setFilteredArtworks(galleryData.filter((artwork) => artwork.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-20 z-0"
        style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
      />

      <main className="relative z-10">
        {/* Header */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">Art Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a collection of calligraphy and contemporary art pieces
            </p>
          </motion.div>
        </section>

        {/* Category Navigation - RESPONSIVE */}
        <section className="sticky top-24 z-20 bg-background/80 backdrop-blur-lg border-y border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
            {/* Desktop: Horizontal with dividers */}
            <div className="hidden md:flex items-center justify-center">
              {categories.map((category, index) => (
                <div key={category} className="flex items-center">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-6 lg:px-8 py-3 text-base lg:text-lg font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "text-[#fea900]"
                        : "text-[#fea900]/70 hover:text-[#fea900]"
                    }`}
                  >
                    {category}
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fea900]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                  {index < categories.length - 1 && (
                    <div className="h-6 w-px bg-[#fea900]/20" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile & Tablet: Responsive grid layout */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3 pb-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#fea900] text-white shadow-lg shadow-[#fea900]/30"
                        : "bg-background text-[#fea900]/70 border-2 border-[#fea900]/20 hover:border-[#fea900]/50"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Active category indicator circles */}
              <div className="flex justify-center mt-3 gap-1.5">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeCategory === category ? "bg-[#fea900] w-6" : "bg-[#fea900]/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
            >
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer mb-8"
                  onClick={() => setSelectedImage(artwork)}
                >
                  {/* Frame Effect */}
                  <div className="relative overflow-hidden rounded-2xl bg-background p-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={artwork.src || "/placeholder.svg"}
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold text-xl mb-2">{artwork.title}</h3>
                          <p className="text-gray-200 text-sm">{artwork.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-primary/30 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-accent/40 rounded-full"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}