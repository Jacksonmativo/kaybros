import ProjectsContent from '@/components/pages/ProjectsContent'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Our Projects',
  description: 'Explore KAYBROS construction and engineering projects across Kenya — residential, commercial, geotechnical and mining works.',
  path: '/projects',
})

export default function ProjectsPage() { return <ProjectsContent /> }
