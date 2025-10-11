import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ImageGallery from "@/components/image-gallery"
import CTASection from "@/components/cta-section"

// Constants
const FRAME_CONFIG = {
  WIDTH: 360,
  HEIGHT: 230,
  ANIMATION_DURATION: 40,
}

const GALLERY_IMAGES = [
  { src: "/gallery/abstract-calligraphy-art.jpg", dimensions: "portrait" },
  { src: "/gallery/traditional-islamic-calligraphy.jpg", dimensions: "landscape" },
  { src: "/gallery/contemporary-art-painting.jpg", dimensions: "landscape" },
  { src: "/gallery/minimalist-calligraphy-design.jpg", dimensions: "portrait" },
  { src: "/gallery/ornate-islamic-art-pattern.jpg", dimensions: "landscape" },
  { src: "/gallery/modern-arabic-typography.jpg", dimensions: "landscape" },
]

// Components
const ImageCollage = () => {
  const totalWidth = GALLERY_IMAGES.length * FRAME_CONFIG.WIDTH

  const createFrame = (src, index) => (
    <div
      key={index}
      className="flex-shrink-0"
      style={{ width: FRAME_CONFIG.WIDTH, height: FRAME_CONFIG.HEIGHT }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={`Collage ${index}`}
        className="w-full h-full object-cover opacity-70 transition-opacity duration-300 hover:opacity-80"
      />
    </div>
  )

  return (
    <>
      {/* Top row - moving left to right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [-totalWidth, 0] }}
        transition={{ duration: FRAME_CONFIG.ANIMATION_DURATION, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 flex"
        style={{ top: "12%", height: FRAME_CONFIG.HEIGHT }}
      >
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => createFrame(img.src, `top-${i}`))}
      </motion.div>

      {/* Bottom row - moving right to left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -totalWidth] }}
        transition={{ duration: FRAME_CONFIG.ANIMATION_DURATION, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 flex"
        style={{ bottom: "12%", height: FRAME_CONFIG.HEIGHT }}
      >
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => createFrame(img.src, `bottom-${i}`))}
      </motion.div>
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-gray-50 overflow-x-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-20 z-0"
        style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
      />

      <main className="relative z-10 flex flex-col items-center w-full">
        <section className="mt-5 mb-10 flex flex-col items-center relative w-full">
          {/* Frames container */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative w-full overflow-hidden"
            style={{ height: "600px" }}
          >
            <ImageCollage />

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-full flex items-center justify-center"
              style={{ top: "15rem" }}
            >
              <h1 className="font-['Ballet'] text-5xl sm:text-7xl md:text-[12rem] 
              font-extrabold text-[#fea900] leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)] tracking-wider relative">
                <span className="absolute -inset-0.5"></span>
                <span className="relative">Bano Arts</span>
                <div className="absolute inset-0 mix-blend-overlay"></div>
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="font-['Allura'] font-semibold text-2xl sm:text-4xl md:text-5xl text-[#4e3d0e]">
Where Portraits Come Alive, Calligraphy Speaks Faith, and Every Piece Honors Islamic Beauty
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-xl bg-gradient-to-r from-[#fea900] to-[#e0b481] text-(--color-primary-foreground) hover:opacity-90"
            >
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
          </motion.div>

          <ImageGallery />
          <CTASection />
        </section>
      </main>
    </div>
  )
}
