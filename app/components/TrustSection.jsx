'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Factory, Ship, CheckCircle2, ShieldCheck } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function TrustSection() {
  const [counts, setCounts] = useState({ countries: 0, products: 0, years: 0, satisfaction: 0 })

  useEffect(() => {
    const targets = { countries: 20, products: 500, years: 15, satisfaction: 99 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        countries: Math.floor(targets.countries * progress),
        products: Math.floor(targets.products * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      })

      if (currentStep >= steps) {
        setCounts(targets)
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: ShieldCheck,
      title: 'ISO CERTIFIED',
      description: 'meeting international quality standards for excellence',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Factory,
      title: 'IEC CERTIFIED',
      description: 'for secure and compliant global trade',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Ship,
      title: 'FSSAI CERTIFIED',
      description: 'ensuring safe, high-quality food products',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: CheckCircle2,
      title: 'APEDA GUJARAT REGISTERED',
      description: 'for trusted agricultural exports',
      color: 'from-yellow-500 to-amber-500',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background dark:from-amber-950/20 dark:via-orange-950/10 dark:to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                Why Choose Us
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted partner for premium quality spices with complete transparency
            </p>
          </div>
        </AnimatedSection>

        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fade-scale"
                delay={index * 100}
              >
                <Card className="text-center hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counts.countries, suffix: '+', label: 'Countries Served' },
              { value: counts.products, suffix: '+', label: 'Products' },
              { value: counts.years, suffix: '+', label: 'Years Experience' },
              { value: counts.satisfaction, suffix: '%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 text-transparent bg-clip-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

