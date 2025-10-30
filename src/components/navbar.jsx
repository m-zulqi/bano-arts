"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

// Constants
const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/qb.bano/" },
  { icon: Instagram, href: "https://www.instagram.com/bano.artt" },
  { icon: Youtube, href: "https://www.youtubbe.com/bano.artt" },
]

// Components
const SocialIcon = ({ Icon, href }) => (
  <Button
    variant="ghost"
    size="icon"
    className="text-[#fea900] rounded-full hover:text-white hover:bg-[#fea900]"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-5 h-5" />
    </a>
  </Button>
)

export default function Navbar({ isModalOpen = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`w-full px-6 py-4 fixed top-0 left-0 right-0 ${isModalOpen ? "z-0" : "z-40"} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto bg-[#4e3d0e] backdrop-blur-sm rounded-full px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo and Title - Left */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full flex items-center justify-center p-1">
              <img src="/logo.svg" alt="Bano Arts Logo" className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-[#fea900]">Bano Arts</h1>
          </Link>
          {/* Navigation Menu - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#fea900] hover:text-[#e0b481] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Social Icons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
              <SocialIcon key={href} Icon={Icon} href={href} />
            ))}
          </div>
          {/* Hamburger Button - Mobile */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-[#4e3d0e] rounded-2xl shadow-lg p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#fea900] hover:text-[#e0b481] transition-colors font-medium text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center space-x-4 pt-4 border-t border-[#fea900]/20">
                {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
                  <SocialIcon key={href} Icon={Icon} href={href} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
