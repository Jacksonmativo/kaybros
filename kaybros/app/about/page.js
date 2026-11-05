import AboutContent from '@/components/pages/AboutContent'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'About Us',
  description: 'Learn about KAYBROS Spacialmetric Limited — our team, mission, and construction and engineering work across Kenya.',
  path: '/about',
})

export default function AboutPage() { return <AboutContent /> }
