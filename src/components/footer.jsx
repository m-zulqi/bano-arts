import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "https://www.facebook.com/qb.bano/" },
  { Icon: Instagram, href: "https://www.instagram.com/bano.artt" }
]

const SocialIcon = ({ Icon, href }) => (
  <Button
    variant="ghost"
    size="icon"
    className="text-white hover:text-[#e0b481] hover:bg-secondary-foreground/10"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-6 h-6" />
    </a>
  </Button>
)

export default function Footer() {
  return (
    <footer className="bg-[#191905] text-white py-12 px-6 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Bano Arts Title with Logo */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center p-1.5">
            <img src="/logo.svg" alt="Bano Arts Logo" className="w-full h-full" />
          </div>
          <h3 className="text-3xl font-bold">Bano Arts</h3>
        </div>

        {/* Description */}
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the beauty of traditional and modern calligraphy through the artistic vision of Bano. Each piece
          tells a story, blending cultural heritage with contemporary artistic expression.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          {SOCIAL_LINKS.map(({ Icon, href }) => (
            <SocialIcon key={href} Icon={Icon} href={href} />
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm text-white">
            © 2024 Bano Arts. All rights reserved. | Crafted with passion for the art of calligraphy.
          </p>
        </div>
      </div>
    </footer>
  )
}
