import { Helmet } from 'react-helmet-async'

export function SEO({ 
  title, 
  description, 
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
}) {
  const siteTitle = 'Bano Arts'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
