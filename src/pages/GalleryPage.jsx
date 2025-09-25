"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import galleryData from "../data/gallery-data.json"
import ImageModal from "@/components/image-modal"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredArtworks, setFilteredArtworks] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ["All", "Calligraphy", "Islamic Art", "Contemporary", "Mixed Media", "Traditional"]

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
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/sunflower-bg.jpg')",
        }}
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

        {/* Category Navigation */}
        <section className="sticky top-24z-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-center">
              {categories.map((category, index) => (
                <div key={category} className="flex items-center">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-8 py-3 text-lg font-medium transition-all duration-300 ${
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(artwork)}
                >
                  <div className="relative bg-[#4e3d0e] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="p-3 bg-gradient-to-br from-[#fea900]/10 to-[#4e3d0e]/10">
                      <div className={`relative overflow-hidden rounded-xl ${
                        artwork.dimensions === "portrait" ? "aspect-[3/4]" :
                        artwork.dimensions === "landscape" ? "aspect-[4/3]" :
                        "aspect-square"
                      }`}>
                        <img
                          src={artwork.src || "/placeholder.svg"}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-xl mb-2">{artwork.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{artwork.description}</p>
                      </div>
                    </div>
                  </div>
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
    </div>
  )
}