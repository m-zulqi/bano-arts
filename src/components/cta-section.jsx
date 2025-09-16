"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 bg-repeat bg-center"
              style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Ready to Commission Your Own Piece?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
            >
              Whether you're looking for a custom calligraphy piece, contemporary art, or a unique blend of both, I'd
              love to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              >
                <Link to="/contact">Start Your Commission</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Custom pieces starting from $200 • Free consultation • 2-4 week delivery
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
        </motion.div>
      </div>
    </section>
  )
}
