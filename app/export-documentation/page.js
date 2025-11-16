'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Package, Globe, Sprout, CheckCircle, Ship, BarChart, DollarSign, FileCheck, Lock, FileEdit, Mail } from 'lucide-react'

export default function ExportDocumentationPage() {
  const documents = [
    { icon: FileText, title: 'Commercial Invoice', desc: 'Detailed invoice with product description, quantity, unit price, and total value', color: 'from-amber-500 to-orange-500' },
    { icon: Package, title: 'Packing List', desc: 'Complete list of packages with net/gross weight, dimensions, and contents', color: 'from-blue-500 to-blue-600' },
    { icon: Globe, title: 'Certificate of Origin', desc: 'Official certification stating the country of origin of goods', color: 'from-green-500 to-emerald-500' },
    { icon: Sprout, title: 'Phytosanitary Certificate', desc: 'Plant health certification for agricultural products (when required)', color: 'from-purple-500 to-pink-500' },
    { icon: CheckCircle, title: 'Quality Certificate', desc: 'Detailed quality analysis report from accredited laboratories', color: 'from-orange-500 to-red-500' },
    { icon: Ship, title: 'Bill of Lading', desc: 'Shipping document issued by carrier acknowledging receipt of cargo', color: 'from-amber-600 to-orange-600' },
    { icon: BarChart, title: 'Fumigation Certificate', desc: 'Certificate of fumigation treatment (for markets requiring pest control)', color: 'from-blue-600 to-indigo-600' },
    { icon: DollarSign, title: 'Insurance Certificate', desc: 'Marine insurance documentation (for CIF shipments)', color: 'from-green-600 to-teal-600' },
    { icon: FileCheck, title: 'Export License', desc: 'Government authorization for export (when applicable)', color: 'from-purple-600 to-pink-600' },
    { icon: Lock, title: 'Health Certificate', desc: 'Food safety and health compliance certification', color: 'from-red-500 to-orange-500' },
    { icon: FileEdit, title: 'GSP Certificate', desc: 'Generalized System of Preferences certificate (for eligible countries)', color: 'from-indigo-500 to-purple-500' },
    { icon: Mail, title: 'Bank Documents', desc: 'Letter of Credit, SWIFT copy, and other bank-related documents', color: 'from-teal-500 to-cyan-500' },
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
                  Export Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Complete documentation support for hassle-free international trade
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
                  Comprehensive Export Documentation Services
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We handle all export documentation requirements, ensuring compliance with international trade regulations 
                and customs requirements. Our experienced team manages the entire paperwork process, making exports smooth 
                and hassle-free for our clients.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Export Documents We Provide
                </span>
              </h2>
              <p className="text-gray-600 text-lg">All essential documents for international shipments</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 50}>
                <Card className="hover-elevate transition-all h-full border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <doc.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                    <p className="text-gray-600">{doc.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Shipping Terms We Support
                </span>
              </h2>
              <p className="text-gray-600 text-lg">Flexible Incoterms to meet your requirements</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { term: 'FOB', full: 'Free On Board', desc: 'Seller delivers goods on board the vessel at the port of shipment' },
              { term: 'CIF', full: 'Cost, Insurance & Freight', desc: 'Seller pays for freight and insurance to destination port' },
              { term: 'CFR', full: 'Cost & Freight', desc: 'Seller pays freight charges to destination port' },
              { term: 'EXW', full: 'Ex Works', desc: 'Buyer collects goods from seller\'s warehouse' },
            ].map((term, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                <Card className="hover-elevate border-2 border-amber-500/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 text-transparent bg-clip-text mb-2">{term.term}</div>
                    <h3 className="font-bold text-gray-800 mb-2">{term.full}</h3>
                    <p className="text-sm text-gray-600">{term.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ports */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Our Export Ports
                </span>
              </h2>
              <p className="text-gray-600 text-lg">Strategic access to major Indian seaports</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Mundra Port', state: 'Gujarat' },
              { name: 'Nhava Sheva (JNPT)', state: 'Maharashtra' },
              { name: 'Pipavav Port', state: 'Gujarat' },
              { name: 'Kandla Port', state: 'Gujarat' },
            ].map((port, idx) => (
              <AnimatedSection key={idx} animation="fade-scale" delay={idx * 100}>
                <Card className="text-center hover-elevate border-2 border-transparent hover:border-amber-500/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl mb-3">🚢</div>
                    <h3 className="font-bold text-lg mb-1">{port.name}</h3>
                    <p className="text-gray-600 text-sm">{port.state}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Our Export Process
                </span>
              </h2>
              <p className="text-gray-600 text-lg">Seamless process from order to delivery</p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Order Confirmation', desc: 'Receive and confirm purchase order with specifications' },
                { step: 2, title: 'Production & Quality Check', desc: 'Process products and conduct quality testing' },
                { step: 3, title: 'Documentation Preparation', desc: 'Prepare all required export documents' },
                { step: 4, title: 'Pre-Shipment Inspection', desc: 'Third-party inspection (if requested)' },
                { step: 5, title: 'Customs Clearance', desc: 'Complete customs formalities and clearance' },
                { step: 6, title: 'Shipment Dispatch', desc: 'Load and dispatch cargo to destination port' },
                { step: 7, title: 'Document Courier', desc: 'Send all original documents to buyer/bank' },
                { step: 8, title: 'Delivery Tracking', desc: 'Provide tracking updates until destination arrival' },
              ].map((process, idx) => (
                <AnimatedSection key={process.step} animation="slide-left" delay={idx * 100}>
                  <Card className="hover-elevate border-2 border-transparent hover:border-amber-500/30">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                          {process.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{process.title}</h3>
                          <p className="text-gray-600">{process.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-scale">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Need Export Documentation Support?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experienced team handles all documentation requirements. Get in touch for expert assistance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg h-14 px-8 bg-white text-amber-900 hover:bg-white/90 border-0 shadow-2xl">
                Contact Our Export Team
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
