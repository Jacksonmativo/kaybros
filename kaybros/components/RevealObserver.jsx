"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe immediately + after short delay to catch late-rendered elements
    const observe = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el)
      })
    }

    observe()
    const t1 = setTimeout(observe, 100)
    const t2 = setTimeout(observe, 500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      observer.disconnect()
    }
  }, [pathname]) // re-run on every page navigation

  return null
}
