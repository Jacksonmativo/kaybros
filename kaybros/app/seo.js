const SITE_NAME = 'KAYBROS Spacialmetric Limited'
const BRAND = 'KAYBROS'
const SHARE_IMAGE = 'https://kaybros.co.ke/images/alt1-share.jpg'

export function createPageMetadata({ title, description, path }) {
  const url = `https://kaybros.co.ke${path}`
  const fullTitle = `${title} | ${BRAND}`
  const pageTitle = path === '/' ? fullTitle : title

  return {
    title: path === '/' ? { absolute: fullTitle } : pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
      images: [{ url: SHARE_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
  }
}
