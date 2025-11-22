'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { FileText, Scale, ShoppingCart, AlertTriangle, CheckCircle, XCircle, Shield, Users, Globe, Gavel, Mail, Info, Ban } from 'lucide-react'

export default function TermsOfUsePage() {
  const lastUpdated = 'January 1, 2025'

  const sections = [
    {
      id: 'introduction',
      icon: FileText,
      title: 'Introduction and Acceptance',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Krushi World Export. These Terms of Use ("Terms") govern your access to and use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree with any part of these Terms, you must not access or use our website or services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Please read these Terms carefully before using our services.</strong>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'definitions',
      icon: Info,
      title: 'Definitions',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">For the purposes of these Terms:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>"We," "Us," "Our"</strong> refers to Krushi World Export and its affiliates.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>"You," "Your," "User"</strong> refers to the individual or entity accessing our website or services.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>"Services"</strong> refers to all products, services, and content provided by Krushi World Export.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>"Website"</strong> refers to our website at www.krushiworldexport.com and all associated pages.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'use-of-website',
      icon: Globe,
      title: 'Use of Website',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">You may use our website for lawful purposes only. You agree not to:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Use the website in any way that violates any applicable local, national, or international law or regulation</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Transmit any malicious code, viruses, or harmful materials</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Attempt to gain unauthorized access to our systems or networks</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Copy, modify, or distribute our content without written permission</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Use automated systems to access or scrape our website</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Impersonate any person or entity or misrepresent your affiliation</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            We reserve the right to suspend or terminate your access to our website at any time for violation of these Terms.
          </p>
        </div>
      )
    },
    {
      id: 'products-and-services',
      icon: ShoppingCart,
      title: 'Products and Services',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Krushi World Export provides agricultural products and export services. When you place an order or request services:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Order Acceptance:</strong> Your order is an offer to purchase. We reserve the right to accept or reject any order at our discretion.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Pricing:</strong> All prices are subject to change without notice. Prices displayed are indicative and may vary based on quantity, quality, and market conditions.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Product Specifications:</strong> Product descriptions and specifications are provided for informational purposes. Actual products may vary slightly from images and descriptions.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Export Compliance:</strong> All export transactions are subject to applicable export laws and regulations. You are responsible for compliance with import regulations in your country.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Quality Standards:</strong> We maintain high quality standards. However, agricultural products are subject to natural variations.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'orders-and-payment',
      icon: Scale,
      title: 'Orders and Payment',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Orders are processed according to the following terms:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Payment Terms:</strong> Payment terms will be specified in your order confirmation. We accept various payment methods including bank transfers, letters of credit, and other agreed-upon methods.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Currency:</strong> All prices are quoted in the currency specified. Exchange rate fluctuations may apply for international transactions.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Shipping Costs:</strong> Shipping and handling costs are additional and will be quoted separately based on destination, weight, and shipping method.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Order Modifications:</strong> Changes to orders after acceptance may be subject to additional fees or delays. Contact us immediately if you need to modify an order.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Taxes:</strong> You are responsible for all applicable taxes, duties, and customs fees in your jurisdiction.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'shipping-and-delivery',
      icon: Globe,
      title: 'Shipping and Delivery',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Shipping terms and delivery information:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Delivery Timeline:</strong> Estimated delivery times are provided for reference only and are not guaranteed. Delivery may be affected by customs clearance, weather, and other factors beyond our control.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Shipping Methods:</strong> We work with reputable shipping partners to ensure safe and timely delivery. Shipping methods will be discussed and agreed upon before order confirmation.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Risk of Loss:</strong> Title and risk of loss pass to you upon delivery to the carrier or designated shipping location, unless otherwise specified in writing.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Inspection:</strong> Please inspect products upon delivery and notify us immediately of any damage or discrepancies.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'warranties',
      icon: Shield,
      title: 'Warranties and Disclaimers',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            <strong>Product Warranties:</strong> We warrant that our products meet the specifications and quality standards agreed upon in your order. However:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span>Agricultural products are subject to natural variations in color, size, and appearance</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span>We disclaim all implied warranties, including merchantability and fitness for a particular purpose, to the extent permitted by law</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span>Our liability is limited to the purchase price of the product or replacement of defective products</span>
            </li>
          </ul>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Website Disclaimer:</strong> Our website and content are provided "as is" without warranties of any kind. We do not guarantee that the website will be error-free, secure, or continuously available.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'limitation-liability',
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted by law:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Krushi World Export shall not be liable for any indirect, incidental, special, consequential, or punitive damages</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Our total liability shall not exceed the amount you paid for the specific product or service giving rise to the claim</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>We are not responsible for delays or failures caused by factors beyond our reasonable control, including natural disasters, government actions, or supplier issues</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.
          </p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      icon: FileText,
      title: 'Intellectual Property',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            All content on our website, including text, graphics, logos, images, and software, is the property of Krushi World Export or its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Ban className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>You may not reproduce, distribute, modify, or create derivative works from our content without written permission</span>
            </li>
            <li className="flex items-start gap-3">
              <Ban className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>You may not use our trademarks or brand names without prior written consent</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>You may view and download content for personal, non-commercial use only</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'user-content',
      icon: Users,
      title: 'User-Generated Content',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you submit any content, including reviews, comments, or feedback:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>You grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display your content</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>You represent that you own or have the right to submit the content</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>You agree not to submit content that is illegal, defamatory, or violates any third-party rights</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span>We reserve the right to remove any user-generated content at our discretion</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'termination',
      icon: Ban,
      title: 'Termination',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may terminate or suspend your access to our website and services at any time, with or without cause or notice, for any reason, including violation of these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upon termination:
          </p>
          <ul className="space-y-3 text-gray-700 ml-4 list-disc">
            <li>Your right to use the website and services will immediately cease</li>
            <li>All outstanding orders and obligations remain in effect unless otherwise specified</li>
            <li>Provisions of these Terms that by their nature should survive termination will remain in effect</li>
          </ul>
        </div>
      )
    },
    {
      id: 'dispute-resolution',
      icon: Gavel,
      title: 'Dispute Resolution',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In the event of any dispute arising from these Terms or our services:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Jurisdiction:</strong> Any disputes shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Negotiation:</strong> Parties agree to attempt to resolve disputes through good faith negotiation before initiating legal proceedings.</span>
            </li>
            <li className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>Arbitration:</strong> If negotiation fails, disputes may be resolved through binding arbitration in accordance with Indian Arbitration and Conciliation Act.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'modifications',
      icon: AlertTriangle,
      title: 'Modifications to Terms',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We will notify you of material changes by:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 list-disc">
            <li>Updating the "Last Updated" date at the top of this page</li>
            <li>Posting a prominent notice on our website</li>
            <li>Sending you an email notification (if we have your email address)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            Your continued use of our website after changes are posted constitutes acceptance of the modified Terms.
          </p>
        </div>
      )
    },
    {
      id: 'miscellaneous',
      icon: FileText,
      title: 'Miscellaneous Provisions',
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Krushi World Export regarding the use of our website and services.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms at any time.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Information',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you have any questions, concerns, or need clarification about these Terms of Use, please contact us:
          </p>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mt-4">
            <p className="text-gray-700 font-semibold mb-2">Krushi World Export</p>
            <p className="text-gray-700">Email: <a href="mailto:info@krushiworldexport.com" className="text-amber-600 hover:underline">info@krushiworldexport.com</a></p>
            <p className="text-gray-700">Phone: +91 98765 43210</p>
            <p className="text-gray-700">Address: 404, Swami Narayan Society, Godadara Canal Road<br />Nearby: Sai Krupa Electrical Works<br />Surat, 395012, Gujarat, India</p>
          </div>
          <p className="text-gray-700 leading-relaxed pt-2">
            We will respond to your inquiry as soon as possible.
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg mx-auto">
                  <Scale className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Terms of Use
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
                Please read these terms carefully before using our website or services.
              </p>
              <p className="text-white/70 text-sm">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-amber-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Card className="mb-8 border-2 border-amber-200/50 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Info className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Important Legal Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms of Use govern your relationship with Krushi World Export and your use of our website and services. By using our services, you agree to comply with these Terms. Please review them carefully.
                      </p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-2">
                  {sections.map((section, index) => (
                    <AccordionItem 
                      key={section.id} 
                      value={section.id}
                      className="border-2 border-gray-200 rounded-lg px-4 hover:border-amber-300 transition-colors bg-white hover-elevate"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                            <section.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6">
                        <div className="pl-14">
                          {section.content}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection animation="fade-scale" delay={200}>
            <Card className="bg-gradient-to-br from-amber-600 to-orange-600 text-white border-0 shadow-xl">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  If you have any questions or concerns about these Terms of Use, our team is here to help. Contact us for clarification.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 border-0 shadow-lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/privacy">
                    <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
                      View Privacy Policy
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

