import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
