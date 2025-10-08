"use client";

import { motion } from "framer-motion";
import ImageGallery from "@/components/image-gallery";
import CTASection from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageFrame } from "@/components/ui/image-frame";

const ImageCollage = () => {
  const images = [
    "/gallery/abstract-calligraphy-art.jpg",
    "/gallery/traditional-islamic-calligraphy.jpg",
    "/gallery/contemporary-art-painting.jpg",
    "/gallery/minimalist-calligraphy-design.jpg",
    "/gallery/ornate-islamic-art-pattern.jpg",
    "/gallery/modern-arabic-typography.jpg",
  ];

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: [0, -3840] }} // Double the total width for seamless loop
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-0 left-0 flex h-full gap-4"
    >
      {images.map((src, i) => (
        <div key={`img1-${i}`} className="w-[500px] h-full flex-shrink-0">
          <ImageFrame>
            <img
              src={src}
              alt={`Collage ${i}`}
              className="w-full h-full object-cover opacity-60"
            />
          </ImageFrame>
        </div>
      ))}
      {/* Duplicate set for seamless loop */}
      {images.map((src, i) => (
        <div key={`img2-${i}`} className="w-[500px] h-full flex-shrink-0">
          <ImageFrame>
            <img
              src={src}
              alt={`Collage ${i}`}
              className="w-full h-full object-cover opacity-60"
            />
          </ImageFrame>
        </div>
      ))}
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-gray-50">
      {/* Background with sunflower pattern */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-30 z-0"
        style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
      />

      <main className="relative z-10 flex flex-col items-center w-full px-6">
        {/* Hero / Frame Section */}
        <section className="mt-20 mb-16 flex flex-col items-center relative">
          {/* Frame + Image (pure decoration) */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-screen h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden"
          >
            {/* Image Collage */}
            <ImageCollage />
            <div className="absolute inset-0"></div>
          </motion.div>

          {/* Separate Text Container, overlapping above the frame */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute flex flex-col items-center"
            style={{
              top: "6rem", // negative top to move it up (overlapping). Adjust as needed
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <div className="px-4 text-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] mb-12">
                Where Art Meets Tradition
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-white/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]">
                Experience the timeless beauty of Islamic calligraphy reimagined
                through a contemporary lens.
              </p>
            </div>
          </motion.div>

          {/* Button below frame */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#fea900] hover:bg-[#e0b481] text-white px-12 py-6 text-2xl"
            >
              <Link to="/gallery">Explore Our Gallery</Link>
            </Button>
          </motion.div>
        </section>

        <ImageGallery />
        <CTASection />
      </main>
    </div>
  );
}
