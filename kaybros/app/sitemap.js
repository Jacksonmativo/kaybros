export default function sitemap() {
  return [
    { url: 'https://kaybros.co.ke/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://kaybros.co.ke/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kaybros.co.ke/projects', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://kaybros.co.ke/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://kaybros.co.ke/geotechnical-mining', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
