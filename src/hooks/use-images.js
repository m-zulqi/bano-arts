import { useState } from 'react'

export function useImages(initialImages = []) {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseImage = () => {
    setSelectedImage(null)
  }

  const handleDownloadImage = async (image) => {
    try {
      const response = await fetch(image.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${image.title}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return {
    selectedImage,
    handleImageClick,
    handleCloseImage,
    handleDownloadImage
  }
}
