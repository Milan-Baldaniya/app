'use client'

import Hero from './components/Hero'
import CurvedSlider from './components/CurvedSlider'
import TrustSection from './components/TrustSection'
import ProcessTimeline from './components/ProcessTimeline'
import CTASection from './components/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <CurvedSlider />
      <TrustSection />
      <ProcessTimeline />
      <CTASection />
    </div>
  )
}