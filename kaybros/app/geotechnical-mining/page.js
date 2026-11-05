import GeoContent from '@/components/pages/GeoContent'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Geotechnical & Mining Engineering Services in Africa',
  description: 'Expert geotechnical site investigation, drilling, soil testing, gabion walls and mining support across Africa. Based in Kenya. KAYBROS Spacialmetric Limited.',
  path: '/geotechnical-mining',
})

export default function GeoPage() {
  return <GeoContent />
}
