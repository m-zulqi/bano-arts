export const optimizeImage = (url, { width, quality = 75 } = {}) => {
  if (!url) return ''
  
  // If it's already a data URL or absolute URL, return as is
  if (url.startsWith('data:') || url.startsWith('http')) {
    return url
  }

  // For local images, add optimization parameters
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  params.append('q', quality.toString())
  
  return `${url}?${params.toString()}`
}

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export const aspectRatioToTailwind = (ratio) => {
  const ratioMap = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-4/3',
    '16:9': 'aspect-video',
    'portrait': 'aspect-[3/4]',
    'landscape': 'aspect-[4/3]'
  }
  return ratioMap[ratio] || 'aspect-auto'
}
