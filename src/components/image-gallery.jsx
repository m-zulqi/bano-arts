// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import ImageModal from "@/components/image-modal"

// const featuredArtworks = [
// 	{
// 		id: 1,
// 		src: "/gallery/abstract-calligraphy-art.jpg",
// 		title: "Abstract Harmony",
// 		description: "Contemporary interpretation of classical Arabic calligraphy",
// 	},
// 	{
// 		id: 2,
// 		src: "/gallery/traditional-islamic-calligraphy.jpg",
// 		title: "Sacred Verses",
// 		description: "Traditional Islamic calligraphy in gold and black",
// 	},
// 	{
// 		id: 3,
// 		src: "/gallery/contemporary-art-painting.jpg",
// 		title: "Modern Expression",
// 		description: "Mixed media artwork with contemporary techniques",
// 	},
// 	{
// 		id: 4,
// 		src: "/gallery/minimalist-calligraphy-design.jpg",
// 		title: "Minimalist Beauty",
// 		description: "Clean approach to Arabic calligraphy",
// 	},
// 	{
// 		id: 5,
// 		src: "/gallery/ornate-islamic-art-pattern.jpg",
// 		title: "Ornate Patterns",
// 		description: "Intricate Islamic geometric patterns",
// 	},
// 	{
// 		id: 6,
// 		src: "/gallery/modern-arabic-typography.jpg",
// 		title: "Typography Fusion",
// 		description: "Modern Arabic typography design",
// 	},
// ]

// export default function ImageGallery() {
// 	const [selectedImage, setSelectedImage] = useState(null)

// 	return (
// 		<section className="py-20 px-6">
// 			<div className="max-w-7xl mx-auto">
// 				{/* Section Header */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 30 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 					className="text-center mb-16"
// 				>
// 					<h2 className="text-4xl md:text-5xl font-['Montserrat Alternates'] font-bold text-foreground mb-6 text-balance">
// 						Featured Artworks
// 					</h2>
// 					<p className="text-4xl font-['Montez'] text-muted-foreground max-w-4xl font-medium mx-auto text-pretty">
// 						Discover a curated selection of calligraphy and contemporary art
// 						pieces that showcase the beauty of traditional and modern artistic
// 						expression.
// 					</p>
// 				</motion.div>

// 				{/* Gallery Grid */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{featuredArtworks.map((artwork, index) => (
// 						<motion.div
// 							key={artwork.id}
// 							initial={{ opacity: 0, y: 50 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.6, delay: index * 0.1 }}
// 							className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
// 							onClick={() => setSelectedImage(artwork)}
// 						>
// 							{/* Frame Effect */}
// 							<div className="relative overflow-hidden rounded-2xl bg-background p-4">
// 								<div className="relative overflow-hidden rounded-xl">
// 									<img
// 										src={artwork.src || "/placeholder.svg"}
// 										alt={artwork.title}
// 										className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
// 									/>

// 									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
// 										<div className="absolute bottom-0 left-0 right-0 p-6">
// 											<h3 className="text-white font-bold text-xl mb-2">
// 												{artwork.title}
// 											</h3>
// 											<p className="text-gray-200 text-sm">
// 												{artwork.description}
// 											</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 							{/* Decorative Elements */}
// 							<div className="absolute top-2 right-2 w-4 h-4 bg-primary/30 rounded-full"></div>
// 							<div className="absolute bottom-2 left-2 w-3 h-3 bg-accent/40 rounded-full"></div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>

// 			<ImageModal
// 				image={selectedImage}
// 				onClose={() => setSelectedImage(null)}
// 			/>
// 		</section>
// 	)
// }













"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { createPortal } from "react-dom"
import ImageModal from "@/components/image-modal"

const featuredArtworks = [
  {
    id: 1,
    src: "/gallery/abstract-calligraphy-art.jpg",
    title: "Abstract Harmony",
    description: "Contemporary interpretation of classical Arabic calligraphy",
  },
  {
    id: 2,
    src: "/gallery/traditional-islamic-calligraphy.jpg",
    title: "Sacred Verses",
    description: "Traditional Islamic calligraphy in gold and black",
  },
  {
    id: 3,
    src: "/gallery/contemporary-art-painting.jpg",
    title: "Modern Expression",
    description: "Mixed media artwork with contemporary techniques",
  },
  {
    id: 4,
    src: "/gallery/minimalist-calligraphy-design.jpg",
    title: "Minimalist Beauty",
    description: "Clean approach to Arabic calligraphy",
  },
  {
    id: 5,
    src: "/gallery/ornate-islamic-art-pattern.jpg",
    title: "Ornate Patterns",
    description: "Intricate Islamic geometric patterns",
  },
  {
    id: 6,
    src: "/gallery/modern-arabic-typography.jpg",
    title: "Typography Fusion",
    description: "Modern Arabic typography design",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Montserrat Alternates'] font-bold text-foreground mb-6 text-balance">
            Featured Artworks
          </h2>
          <p className="text-4xl font-['Montez'] text-muted-foreground max-w-4xl font-medium mx-auto text-pretty">
            Discover a curated selection of calligraphy and contemporary art
            pieces that showcase the beauty of traditional and modern artistic
            expression.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              {/* Frame Effect */}
              <div className="relative overflow-hidden rounded-2xl bg-background p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={artwork.src || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {artwork.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-primary/30 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-accent/40 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Render modal in a portal so it’s above everything */}
      {selectedImage &&
        createPortal(
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />,
          document.body
        )}
    </section>
  )
}




