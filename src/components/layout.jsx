import Navbar from "./navbar"
import Footer from "./footer"
import WhatsAppButton from "./whatsapp-button"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
