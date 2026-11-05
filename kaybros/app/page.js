import HomeContent from '@/components/pages/HomeContent'
import { createPageMetadata } from './seo'

export const metadata = createPageMetadata({
  title: 'Construction, Civil Engineering & Mining in Kenya',
  description: 'KAYBROS Spacialmetric Limited delivers construction, renovation, roofing, geotechnical and mining support across Kenya. Established in 2017.',
  path: '/',
})

export default function HomePage() { return <HomeContent /> }
