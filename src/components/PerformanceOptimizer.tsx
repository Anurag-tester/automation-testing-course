'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/_next/static/css/app/layout.css',
        '/_next/static/chunks/main-app.js'
      ]
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = resource.endsWith('.css') ? 'style' : 'script'
        link.href = resource
        document.head.appendChild(link)
      })
    }

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.loading = 'eager'
            imageObserver.unobserve(img)
          }
        })
      })
      
      images.forEach(img => imageObserver.observe(img))
    }

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll('script[data-defer="true"]')
      scripts.forEach(script => {
        const newScript = document.createElement('script')
        newScript.src = script.getAttribute('src') || ''
        newScript.defer = true
        document.head.appendChild(newScript)
        script.remove()
      })
    }

    preloadCriticalResources()
    optimizeImages()
    deferNonCriticalJS()

    // Cleanup
    return () => {
      // Cleanup observers if needed
    }
  }, [])

  return null
}