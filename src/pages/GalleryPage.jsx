"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const artworks = [
  {
    id: 1,
    src: "/gallery/abstract-calligraphy-art.jpg",
    title: "Abstract Harmony",
    description: "Contemporary interpretation of classical Arabic calligraphy with modern color palette",
    dimensions: "portrait",
  },
  {
    id: 2,
    src: "/gallery/traditional-islamic-calligraphy.jpg",
    title: "Sacred Verses",
    description: "Traditional Islamic calligraphy featuring Quranic verses in gold and black",
    dimensions: "landscape",
  },
  {
    id: 3,
    src: "/gallery/contemporary-art-painting.jpg",
    title: "Modern Expression",
    description: "Mixed media artwork combining calligraphy with contemporary painting techniques",
    dimensions: "square",
  },
  {
    id: 4,
    src: "/gallery/minimalist-calligraphy-design.jpg",
    title: "Minimalist Beauty",
    description: "Clean, minimalist approach to Arabic calligraphy with emphasis on negative space",
    dimensions: "portrait",
  },
  {
    id: 5,
    src: "/gallery/ornate-islamic-art-pattern.jpg",
    title: "Ornate Patterns",
    description: "Intricate Islamic geometric patterns combined with flowing calligraphic elements",
    dimensions: "square",
  },
  {
    id: 6,
    src: "/gallery/modern-arabic-typography.jpg",
    title: "Typography Fusion",
    description: "Modern Arabic typography design with contemporary color schemes",
    dimensions: "landscape",
  },
  {
    id: 7,
    src: "/gallery/watercolor-calligraphy-art.jpg",
    title: "Watercolor Dreams",
    description: "Delicate watercolor techniques applied to traditional calligraphic forms",
    dimensions: "portrait",
  },
  {
    id: 8,
    src: "/gallery/landscape-painting-with-calligraphy.jpg",
    title: "Nature's Script",
    description: "Landscape painting enhanced with poetic calligraphy overlay",
    dimensions: "landscape",
  },
  {
    id: 9,
    src: "/gallery/gold-leaf-calligraphy.jpg",
    title: "Golden Elegance",
    description: "Luxurious gold leaf application on traditional black calligraphy",
    dimensions: "square",
  },
  {
    id: 10,
    src: "/gallery/contemporary-mixed-media.jpg",
    title: "Mixed Media Innovation",
    description: "Innovative combination of digital and traditional calligraphy techniques",
    dimensions: "portrait",
  },
  {
    id: 11,
    src: "/gallery/spiritual-art-piece.jpg",
    title: "Spiritual Journey",
    description: "Meditative artwork exploring themes of spirituality through calligraphy",
    dimensions: "landscape",
  },
  {
    id: 12,
    src: "/gallery/modern-islamic-art.jpg",
    title: "Contemporary Islamic Art",
    description: "Modern interpretation of Islamic art principles with bold color choices",
    dimensions: "square",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/sunflower-bg.jpg')",
        }}
      />

      <Navbar />

      <main className="relative z-10">
        {/* Header */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Art Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore a collection of calligraphy and contemporary art pieces
            </p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {artworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="break-inside-avoid group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Frame Effect */}
                    <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/20">
                      <div className="relative overflow-hidden rounded-xl bg-background p-3">
                        <img
                          src={artwork.src || "/placeholder.svg"}
                          alt={artwork.title}
                          className={`w-full object-cover rounded-lg ${
                            artwork.dimensions === "portrait"
                              ? "aspect-[3/4]"
                              : artwork.dimensions === "landscape"
                                ? "aspect-[4/3]"
                                : "aspect-square"
                          }`}
                        />

                        {/* Overlay with title */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold text-lg mb-1">{artwork.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description on hover */}
                    <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 rounded-2xl">
                      <div className="text-center">
                        <h3 className="text-white font-bold text-xl mb-3">{artwork.title}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">{artwork.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
