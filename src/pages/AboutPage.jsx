"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
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
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">About Bano Arts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the artist behind the beautiful calligraphy and artistic creations
            </p>
          </motion.div>
        </section>

        {/* Artist Profile Section */}
        <section className="py-5 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Artist Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-6">
                  <div className="bg-background rounded-2xl p-4">
                    <img
                      src="/gallery/professional-artist-portrait.png"
                      alt="Bano Arts - Artist Portrait"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Artist Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">Qudsia Bano</h2>
                  <p className="text-xl text-primary font-semibold mb-6">Master Calligrapher & Artist</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Passion</h3>
                      <p className="text-muted-foreground">
                        Creating beautiful Islamic calligraphy and contemporary art that bridges traditional techniques
                        with modern aesthetics
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Specialization</h3>
                      <p className="text-muted-foreground">
                        Arabic & Islamic Calligraphy, Contemporary Art, Mixed Media, Custom Commissions
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
                      <p className="text-muted-foreground">
                        Over 15 years of dedicated practice in traditional and modern calligraphy techniques
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Self Explanation Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">My Artistic Journey</h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  My journey with calligraphy began as a child, fascinated by the flowing curves and spiritual depth of
                  Arabic script. What started as curiosity evolved into a lifelong passion for preserving and
                  reimagining this ancient art form.
                </p>

                <p>
                  Through years of study under master calligraphers and continuous exploration of contemporary
                  techniques, I've developed a unique style that honors traditional methods while embracing modern
                  artistic expression. Each piece I create is a meditation, a bridge between the sacred and the
                  contemporary.
                </p>

                <p>
                  My work spans from traditional Quranic verses and poetry to abstract interpretations that speak to
                  universal themes of beauty, spirituality, and human connection. I believe that calligraphy is not just
                  writing—it's a visual symphony that can touch hearts and transcend cultural boundaries.
                </p>

                <p>
                  Today, I continue to push the boundaries of this art form, experimenting with mixed media,
                  contemporary color palettes, and innovative compositions while maintaining the essence and respect
                  that traditional calligraphy deserves.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}