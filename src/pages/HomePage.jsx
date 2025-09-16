"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import ImageGallery from "@/components/image-gallery"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background with sunflower pattern */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/sunflower-bg.jpg')",
        }}
      />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Welcome to Bano Arts
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Where traditional calligraphy meets contemporary artistry. Discover the beauty of handcrafted letters and
              artistic expression.
            </motion.p>
          </div>
        </section>

        <ImageGallery />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
