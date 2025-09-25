import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Added padding-top to account for fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  )
}
