'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 via-orange-900/90 to-amber-900/95 animate-gradient" />
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-scale">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ready to Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 animate-gradient">
                Export Journey?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with our team and discover premium quality spices for your business. 
              Get instant quotations and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group text-lg h-16 px-10 bg-white text-amber-900 hover:bg-white/90 border-0 shadow-2xl"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Send Inquiry Now
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-16 px-10 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60"
                >
                  View Product Catalog
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

