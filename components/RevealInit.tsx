'use client'
import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    document.body.classList.add('js-animate')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 70)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px 40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
