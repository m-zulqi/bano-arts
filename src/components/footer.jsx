import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube } from "lucide-react"

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "https://www.facebook.com/qb.bano/" },
  { Icon: Instagram, href: "https://www.instagram.com/bano.artt" },
  { Icon: Youtube, href: "https://youtube.com/@banoart7486?si=Pib3W25ypQWfgZYH" },
]

const SocialIcon = ({ Icon, href }) => (
  <Button
    variant="ghost"
    size="icon"
    className="text-white hover:text-[#e0b481] hover:bg-secondary-foreground/10 transition-colors duration-300"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  </Button>
)

export default function Footer({ isModalOpen = false }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`bg-[#191905] text-white py-8 sm:py-12 px-4 sm:px-6 relative ${isModalOpen ? "z-0" : "z-30"} transition-all duration-300`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Signature Image */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="/footer-signature/signature-footer.png"
            alt="Bano Arts Signature"
            className="w-10 h-auto sm:w-8 md:w-20 object-contain"
          />
        </div>

        {/* Bano Arts Title with Logo */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center p-1.5">
            <img src="/logo.svg" alt="Bano Arts Logo" className="w-full h-full" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">Bano Arts</h3>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Discover the beauty of traditional and modern calligraphy through the artistic vision of Bano. Each piece
          tells a story, blending cultural heritage with contemporary artistic expression.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
          {SOCIAL_LINKS.map(({ Icon, href }) => (
            <SocialIcon key={href} Icon={Icon} href={href} />
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-white px-4">
            © {currentYear} Bano Arts. All rights reserved. | Crafted with passion for the art of calligraphy.
          </p>
        </div>
      </div>
    </footer>
  )
}
