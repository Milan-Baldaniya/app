'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Factory, Thermometer, Microscope, Package, Truck, Shield } from 'lucide-react'

export default function InfrastructurePage() {
  const facilities = [
    {
      icon: Factory,
      title: 'Processing Units',
      desc: 'Advanced cleaning, grading, and sorting equipment with capacity to process 100+ tons daily',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Thermometer,
      title: 'Cold Storage',
      desc: 'Temperature-controlled storage facilities maintaining optimal conditions for all products',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Microscope,
      title: 'Quality Lab',
      desc: 'In-house laboratory with modern testing equipment for comprehensive quality analysis',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Package,
      title: 'Packaging Unit',
      desc: 'Automated packaging lines with multiple options for different market requirements',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Truck,
      title: 'Loading Facility',
      desc: 'Efficient loading docks with material handling equipment for quick dispatch',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Fumigation Chamber',
      desc: 'NSPM-compliant fumigation facilities ensuring pest-free export shipments',
      color: 'from-amber-600 to-orange-600',
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Our Infrastructure
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                State-of-the-art facilities ensuring quality at every step
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  World-Class Processing Facilities
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our modern infrastructure spans over 50,000 sq ft, equipped with cutting-edge machinery and 
                technology to handle large-scale processing while maintaining the highest quality standards. 
                Every facility is designed to meet international food safety and quality requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                <Card className="hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Our Process Flow
                </span>
              </h2>
              <p className="text-gray-600 text-lg">From procurement to export - ensuring quality at every step</p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Procurement', icon: '🌾' },
                { step: '2', title: 'Cleaning & Sorting', icon: '🔧' },
                { step: '3', title: 'Quality Testing', icon: '🔬' },
                { step: '4', title: 'Packaging', icon: '📦' },
                { step: '5', title: 'Export Dispatch', icon: '🚢' },
              ].map((process, idx) => (
                <AnimatedSection key={idx} animation="fade-scale" delay={idx * 150}>
                  <div className="relative">
                    <Card className="text-center hover-elevate border-2 border-transparent hover:border-amber-500/30">
                      <CardContent className="pt-8 pb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3 shadow-lg">
                          {process.step}
                        </div>
                        <div className="text-4xl mb-2">{process.icon}</div>
                        <h3 className="font-semibold text-gray-800">{process.title}</h3>
                      </CardContent>
                    </Card>
                    {idx < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 z-10">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Quality Standards & Compliance
                </span>
              </h2>
              <p className="text-gray-600 text-lg">Adhering to international quality and safety standards</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'ISO 22000 Certified',
              'FSSAI Compliant',
              'HACCP Certified',
              'GMP Standards',
              'Organic Certification',
              'APEDA Registered',
              'Phytosanitary Standards',
              'Export Quality Control',
            ].map((standard, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 50}>
                <Card className="text-center hover-elevate border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="font-semibold text-gray-800">{standard}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-scale">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Want to Visit Our Facilities?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We welcome buyers to visit our processing facilities and witness our quality standards firsthand.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg h-14 px-8 bg-white text-amber-900 hover:bg-white/90 border-0 shadow-2xl">
                Schedule a Visit
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
