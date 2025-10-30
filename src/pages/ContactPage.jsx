"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Palette, Users } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to commission a custom piece or have questions about my work? I'd love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">hello@banoarts.com</p>
                        <p className="text-sm text-muted-foreground">For commissions and inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-6PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Studio Location</h3>
                        <p className="text-muted-foreground">123 Art District</p>
                        <p className="text-muted-foreground">Creative City, CC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                        <p className="text-muted-foreground">Within 24-48 hours</p>
                        <p className="text-sm text-muted-foreground">I personally respond to all inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Commission Process */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">Commission Process</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">1. Consultation</h3>
                        <p className="text-muted-foreground text-sm">
                          We discuss your vision, preferences, and requirements for the artwork
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/20 p-3 rounded-full">
                        <Palette className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">2. Design & Approval</h3>
                        <p className="text-muted-foreground text-sm">
                          I create initial sketches and concepts for your review and feedback
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/20 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">3. Creation</h3>
                        <p className="text-muted-foreground text-sm">
                          The final artwork is carefully crafted with attention to every detail
                        </p>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-2xl border border-border">
                      <h3 className="font-semibold text-foreground mb-3">Pricing Information</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Small pieces (8x10"): Starting at $200</p>
                        <p>• Medium pieces (16x20"): Starting at $500</p>
                        <p>• Large pieces (24x36"): Starting at $1,000</p>
                        <p>• Custom sizes and complex designs: Quote upon request</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                      <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
                      <p className="text-sm text-muted-foreground">
                        Most commissioned pieces are completed within 2-4 weeks, depending on complexity and current
                        workload.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}