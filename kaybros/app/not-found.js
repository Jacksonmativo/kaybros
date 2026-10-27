import Link from 'next/link'
export const metadata = { title: 'Page Not Found', robots: { index: false } }
export default function NotFound() {
  return (
    <section className="shell" style={{ padding: '120px 0', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link className="button" href="/">Back to home</Link>
    </section>
  )
}
