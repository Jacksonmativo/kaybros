import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "KAYBROS Spacialmetric Limited",
  "url": "https://kaybros.co.ke/",
  "logo": "https://kaybros.co.ke/favicon-192.png",
  "image": "https://kaybros.co.ke/images/alt1-share.jpg",
  "description": "KAYBROS Spacialmetric Limited offers construction services across Kenya, and geotechnical and mining support across Africa.",
  "telephone": "+254706676062",
  "foundingDate": "2017",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Voi",
    "addressRegion": "Taita-Taveta",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -3.39605,
    "longitude": 38.55609
  },
  "email": "info@kaybros.co.ke",
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "Country", "name": "Uganda" },
    { "@type": "Country", "name": "Tanzania" },
    { "@type": "Country", "name": "Ethiopia" },
    { "@type": "Country", "name": "Rwanda" },
    { "@type": "Continent", "name": "Africa" }
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction & Engineering Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction", "areaServed": { "@type": "Country", "name": "Kenya" } }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovation", "areaServed": { "@type": "Country", "name": "Kenya" } }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing", "areaServed": { "@type": "Country", "name": "Kenya" } }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Geotechnical Engineering", "areaServed": { "@type": "Continent", "name": "Africa" } }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mining Support", "areaServed": { "@type": "Continent", "name": "Africa" } }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Engineering", "areaServed": { "@type": "Country", "name": "Kenya" } }}
    ]
  },
  "sameAs": [
    "https://www.instagram.com/kaybros.kenya/",
    "https://www.facebook.com/p/Kaybros-Spacialmetric-Limited-KARSSEL-100064275454893/"
  ]
}

export const metadata = {
  metadataBase: new URL('https://kaybros.co.ke'),
  title: {
    default: 'KAYBROS | Construction, Civil Engineering & Mining in Kenya',
    template: '%s | KAYBROS',
  },
  description: 'KAYBROS Spacialmetric Limited offers construction and renovation services across Kenya, and geotechnical site investigation and mining support across Africa.',
  authors: [{ name: 'KAYBROS Spacialmetric Limited' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  alternates: { canonical: 'https://kaybros.co.ke/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'KAYBROS Spacialmetric Limited',
    url: 'https://kaybros.co.ke/',
    title: 'KAYBROS | Construction, Civil Engineering & Mining in Kenya',
    description: 'Construction across Kenya. Geotechnical and mining support across Africa. KAYBROS Spacialmetric Limited.',
    images: [{ url: '/images/alt1-share.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAYBROS | Construction, Civil Engineering & Mining in Kenya',
    description: 'Construction across Kenya. Geotechnical and mining support across Africa. KAYBROS Spacialmetric Limited.',
    images: ['/images/alt1-share.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f7f6f1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <Modal />
      </body>
    </html>
  )
}
