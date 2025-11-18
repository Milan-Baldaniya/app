'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, Microscope, Package, Ship, CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProcessTimeline() {
  const steps = [
    {
      icon: FileText,
      title: 'Inquiry',
      description: 'Submit your requirements and receive detailed quotation',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Microscope,
      title: 'Quality Check',
      description: 'Rigorous testing and quality control of selected products',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Package,
      title: 'Packaging',
      description: 'Professional packaging as per international standards',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: Ship,
      title: 'Export',
      description: 'Complete documentation and shipping to your destination',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: CheckCircle,
      title: 'Delivery',
      description: 'On-time delivery with tracking and support',
      color: 'from-amber-500 to-yellow-600',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                Our Export Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamless journey from inquiry to delivery
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-scale"
                delay={index * 150}
              >
                <div className="relative flex flex-col items-center h-full">
                  <Card className="hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30 bg-card/80 backdrop-blur-sm">
                    <CardContent className="pt-10 pb-6 text-center">
                      <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-xl`}>
                        <step.icon className="h-9 w-9 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute right-[-48px] top-1/2 -translate-y-1/2 z-10">
                      <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                      <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
                    </div>
                  )}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 mb-2 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-amber-500" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

