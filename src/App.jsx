import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
