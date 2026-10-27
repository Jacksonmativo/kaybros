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
  "description": "Construction, structural engineering, geotechnical, roofing, and mining support in Kenya.",
  "telephone": "+254706676062",
  "email": "info@kaybros.co.ke",
  "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
  "areaServed": [{ "@type": "Country", "name": "Kenya" }, { "@type": "City", "name": "Nairobi" }],
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" }],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction & Engineering Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Engineering" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Geotechnical Engineering" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mining Support" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Building Construction" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing" }}
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
  description: 'KAYBROS Spacialmetric Limited delivers construction, structural engineering, geotechnical, and mining support in Kenya, with services available across Africa.',
  authors: [{ name: 'KAYBROS Spacialmetric Limited' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  alternates: { canonical: 'https://kaybros.co.ke/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'KAYBROS Spacialmetric Limited',
    url: 'https://kaybros.co.ke/',
    title: 'KAYBROS | Construction, Civil Engineering & Mining in Kenya',
    description: 'Construction, structural engineering, geotechnical, and mining support from KAYBROS Spacialmetric Limited in Kenya.',
    images: [{ url: '/images/alt1-share.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAYBROS | Construction, Civil Engineering & Mining in Kenya',
    description: 'Construction, structural engineering, geotechnical, roofing, and mining support from KAYBROS Spacialmetric Limited in Kenya.',
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
