'use client'

import Hero from './components/Hero'
import TricksSlider from './components/TricksSlider'
import TrustSection from './components/TrustSection'
import ProcessTimeline from './components/ProcessTimeline'
import CTASection from './components/CTASection'

export default function HomePageClient() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Hero />
            <TricksSlider />
            <TrustSection />
            <ProcessTimeline />
            <CTASection />
        </div>
    )
}
