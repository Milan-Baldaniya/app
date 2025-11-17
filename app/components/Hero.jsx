'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const rotatingWords = ['Premium', 'Organic', 'Authentic', 'Export Quality']

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const parallaxX = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) / 50 : 0
  const parallaxY = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) / 50 : 0

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/HeroBanner.jpg"
            alt="Hero Banner"
            fill
            className="object-cover scale-110 transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${parallaxX}px, ${parallaxY}px)`,
            }}
            priority
            quality={90}
            unoptimized
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Background Beams Animation */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <BackgroundBeamsWithCollision className="!bg-transparent h-full min-h-screen">
          <div className="absolute inset-0" />
        </BackgroundBeamsWithCollision>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-amber-100">Trusted by 500+ Global Buyers</span>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="inline-block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
              <br />
              <span className="block mt-2">Spices & Agro Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              Experience the finest quality spices from India. ISO certified, 
              ethically sourced, and delivered worldwide with complete transparency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link href="/products">
              <Button
                size="lg"
                className="group text-lg h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                Request Inquiry
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {[
              { value: '20+', label: 'Countries' },
              { value: '15+', label: 'Years Experience' },
              { value: '99%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

