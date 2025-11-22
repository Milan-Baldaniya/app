'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Factory, Ship, CheckCircle2, Award, FileCheck, Globe, Sparkles, ArrowRight } from 'lucide-react'

export default function CertificationsPage() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: 'ISO CERTIFIED',
      description: 'meeting international quality standards for excellence',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      details: [
        'ISO 9001:2015 Quality Management System certified',
        'ISO 22000:2018 Food Safety Management System',
        'Internationally recognized standards for quality assurance',
        'Continuous improvement and customer satisfaction focus',
        'Regular audits and compliance monitoring',
      ],
      benefits: [
        'Ensures consistent product quality',
        'Demonstrates commitment to excellence',
        'International recognition and trust',
        'Streamlined processes and operations',
      ]
    },
    {
      icon: Factory,
      title: 'IEC CERTIFIED',
      description: 'for secure and compliant global trade',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      details: [
        'Importer Exporter Code (IEC) registration',
        'Authorized for international trade operations',
        'Compliant with DGFT (Directorate General of Foreign Trade) regulations',
        'Enables seamless export and import transactions',
        'Legal authorization for cross-border commerce',
      ],
      benefits: [
        'Legally authorized for international trade',
        'Compliance with government regulations',
        'Smooth customs clearance processes',
        'Trusted by international partners',
      ]
    },
    {
      icon: Ship,
      title: 'FSSAI CERTIFIED',
      description: 'ensuring safe, high-quality food products',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      details: [
        'Food Safety and Standards Authority of India (FSSAI) licensed',
        'Compliance with food safety and standards regulations',
        'Regular quality checks and inspections',
        'Safe handling and processing of food products',
        'Hygiene and sanitation standards maintained',
      ],
      benefits: [
        'Guarantees food safety and quality',
        'Compliance with Indian food regulations',
        'Safe and hygienic processing',
        'Consumer trust and confidence',
      ]
    },
    {
      icon: CheckCircle2,
      title: 'APEDA GUJARAT REGISTERED',
      description: 'for trusted agricultural exports',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-50 to-amber-50',
      details: [
        'Registered with Agricultural and Processed Food Products Export Development Authority',
        'Authorized exporter of agricultural products from Gujarat',
        'Compliance with export quality standards',
        'Traceability and quality control systems',
        'Support for export documentation and procedures',
      ],
      benefits: [
        'Official recognition as agricultural exporter',
        'Access to export promotion schemes',
        'Quality assurance for agricultural products',
        'Streamlined export documentation',
      ]
    }
  ]

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
              <div className="inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg mx-auto">
                  <Award className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Our Certifications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Certified for quality, safety, and excellence. We maintain the highest standards in international trade and food safety.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Overview Cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-amber-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Certifications & Registrations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to quality, safety, and compliance in every aspect of our operations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="fade-scale" delay={index * 100}>
                <Card className="text-center hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30 bg-white shadow-lg">
                  <CardContent className="pt-8 pb-6">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900">{cert.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Certification Information */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Certification Details
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Learn more about our certifications and what they mean for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className={`border-2 border-gray-200 hover:border-amber-300 transition-all shadow-lg overflow-hidden bg-gradient-to-br ${cert.bgColor}`}>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Icon Section */}
                      <div className={`md:col-span-3 bg-gradient-to-br ${cert.color} p-8 flex items-center justify-center`}>
                        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                          <cert.icon className="h-12 w-12 text-white" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-9 p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                            <p className="text-lg text-gray-700 mb-4">{cert.description}</p>
                          </div>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 opacity-20`}>
                            <FileCheck className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Certification Details */}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-amber-600" />
                              Certification Details
                            </h4>
                            <ul className="space-y-3">
                              {cert.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <Award className="h-5 w-5 text-amber-600" />
                              Benefits
                            </h4>
                            <ul className="space-y-3">
                              {cert.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                  <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-amber-200 shadow-xl bg-white">
                <CardContent className="pt-12 pb-12 px-8 md:px-12">
                  <div className="text-center mb-8">
                    <div className="inline-block mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Why Our Certifications Matter
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our certifications are more than just badges—they represent our unwavering commitment to quality, safety, and compliance.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: ShieldCheck,
                        title: 'Quality Assurance',
                        desc: 'International standards ensure consistent product quality and reliability.',
                        color: 'from-blue-500 to-indigo-600',
                      },
                      {
                        icon: FileCheck,
                        title: 'Compliance',
                        desc: 'Full compliance with local and international regulations for seamless trade.',
                        color: 'from-green-500 to-emerald-600',
                      },
                      {
                        icon: Globe,
                        title: 'Trust & Confidence',
                        desc: 'Certifications build trust with partners and customers worldwide.',
                        color: 'from-amber-600 to-orange-600',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <item.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-scale">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to excellence. Let's discuss how we can meet your agricultural export needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg h-14 px-8 bg-white text-amber-600 hover:bg-amber-50 border-0 shadow-lg">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent text-white border-2 border-white hover:bg-white/10">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

