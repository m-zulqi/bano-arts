import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ImageGallery from "@/components/image-gallery"
import CTASection from "@/components/cta-section"



// Constants
const GALLERY_IMAGES = [
  { src: "/gallery/HERO-MAIN-PIC.png", dimensions: "portrait" },
]

const ImageCollage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      <img
        src="/gallery/hero-main.png"
        alt="Hero Main"
        className="w-[100%] sm:w-[140%] md:w-[160%] h-auto object-contain opacity-90 transition-transform duration-500 ease-out"
      />
    </div>
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
          {/* Hero Section */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative w-full overflow-visible h-[400px] sm:h-[600px] md:h-[90vh]"
          >
            <ImageCollage />

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-full flex items-center justify-center"
              style={{ top: "32%", transform: "translateY(-50%)" }}
            >
              <h1 className="font-sans text-center">
                <div className="relative">
                  <span className="absolute -inset-0.5"></span>
                  <span className="relative text-3xl sm:text-5xl md:text-[6rem] font-extrabold text-[#fea900] leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)] tracking-wider block">
                    Bano Arts
                  </span>
                  <div className="absolute inset-0 mix-blend-overlay"></div>
                </div>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#4e3d0e] mt-1">
                  "Art That Consoles You"
                </span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Tagline */}
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

          {/* Button */}
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
              <Link to="/collection">Explore Collections</Link>
            </Button>
          </motion.div>

          <ImageGallery />
          <CTASection />
        </section>
      </main>
    </div>
  )
}
