import ContactContent from '@/components/pages/ContactContent'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with KAYBROS Spacialmetric Limited for your construction, engineering or mining project in Kenya.',
  path: '/contact',
})

export default function ContactPage() { return <ContactContent /> }
