'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Eye, Award, Handshake, Leaf, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  About Krushi World Export
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Your Trusted Partner in Premium Agro Exports Since 2010
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                    Our Story
                  </span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Founded in 2010, Krushi World Export has grown to become one of India's leading exporters 
                  of premium quality agro products. With over 15 years of experience in the international trade 
                  of spices, grains, pulses, oil seeds, and dry fruits, we have established a reputation for 
                  excellence and reliability.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our commitment to quality begins at the farm level, working closely with farmers across India 
                  to ensure sustainable practices and superior product quality. Every product undergoes rigorous 
                  quality checks at our state-of-the-art processing facilities before reaching global markets.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, we proudly serve clients in over 50 countries across Asia, Europe, North America, and 
                  the Middle East, delivering not just products but trust and partnership.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: '50+', label: 'Countries Served', color: 'from-blue-500 to-blue-600' },
                  { value: '15+', label: 'Years Experience', color: 'from-amber-500 to-orange-500' },
                  { value: '500+', label: 'Happy Clients', color: 'from-green-500 to-emerald-500' },
                  { value: '100+', label: 'Products', color: 'from-purple-500 to-pink-500' },
                ].map((stat, idx) => (
                  <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                    <Card className="text-center hover-elevate border-2 border-transparent hover:border-amber-500/30 h-full">
                      <CardContent className="pt-4 pb-4 sm:pt-6 sm:pb-5 md:pt-8 md:pb-6 px-2 sm:px-4">
                        <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text leading-tight`}>
                          {stat.value}
                        </div>
                        <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base leading-tight">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-scale">
              <Card className="h-full hover-elevate border-2 border-transparent hover:border-amber-500/30">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                      Our Mission
                    </span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To deliver premium quality Indian agro products to global markets while maintaining the highest 
                    standards of quality, sustainability, and customer satisfaction. We strive to bridge the gap 
                    between Indian farmers and international buyers, creating value for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-scale" delay={200}>
              <Card className="h-full hover-elevate border-2 border-transparent hover:border-amber-500/30">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                      Our Vision
                    </span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To be the world's most trusted name in Indian agro exports, recognized for our commitment to 
                    quality, innovation, and sustainable practices. We envision a future where we empower farming 
                    communities while serving the diverse needs of global markets.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Our Core Values
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                desc: 'Uncompromising commitment to delivering the highest quality products',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: Handshake,
                title: 'Integrity',
                desc: 'Honest, transparent, and ethical in all our business dealings',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                desc: 'Supporting sustainable farming practices and environmental responsibility',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'Continuously improving our processes and embracing new technologies',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((value, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                <Card className="hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Certifications</h2>
              <p className="text-xl text-white/90">Certified for quality, safety, and excellence</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'ISO 22000', desc: 'Food Safety Management System' },
              { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
              { name: 'Organic India', desc: 'Certified Organic Products' },
              { name: 'APEDA', desc: 'Agricultural and Processed Food Products Export' },
            ].map((cert, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition text-center hover-elevate">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-5xl mb-3">🏆</div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-white/80 text-sm">{cert.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-scale">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                Ready to Partner With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can meet your agro product requirements with our premium quality offerings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0">
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
