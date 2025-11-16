'use client'

import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import TrustSection from './components/TrustSection'
import ProcessTimeline from './components/ProcessTimeline'
import CTASection from './components/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <FeaturedProducts />
      <TrustSection />
      <ProcessTimeline />
      <CTASection />
    </div>
  )
}