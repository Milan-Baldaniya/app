'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Shield, Eye, Lock, FileText, Database, Cookie, Mail, AlertCircle, CheckCircle, Users, Globe } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2025'

  const sections = [
    {
      id: 'introduction',
      icon: FileText,
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Krushi World Export. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our website.
          </p>
        </div>
      )
    },
    {
      id: 'information-collected',
      icon: Database,
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">We may collect the following types of information:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Personal Information:</strong> Name, email address, phone number, company name, and shipping address when you contact us or place an order.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Business Information:</strong> Company details, tax identification numbers, and export/import requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Technical Information:</strong> IP address, browser type, device information, pages visited, and time spent on our website.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Cookies and Tracking:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-we-use',
      icon: Eye,
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We use the collected information for various purposes:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To process and fulfill your orders and export documentation requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To communicate with you about your inquiries, orders, and business transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To improve our website, products, and services based on your feedback and usage patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To send you marketing communications (with your consent) about new products, promotions, and industry updates</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To comply with legal obligations and export regulations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>To detect, prevent, and address technical issues and security threats</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      icon: Users,
      title: 'Data Sharing and Disclosure',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">We may share your information with:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, processing payments, shipping products, and managing business operations.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Business Partners:</strong> Logistics companies, customs brokers, and certification authorities necessary for export operations.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Legal Authorities:</strong> When required by law, court order, or government regulations related to export compliance.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            We do not sell your personal information to third parties for their marketing purposes.
          </p>
        </div>
      )
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Encryption of sensitive data in transit and at rest</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Secure server infrastructure with regular security audits</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Access controls limiting employee access to personal information on a need-to-know basis</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Regular security training for our staff</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: 'Cookies and Tracking Technologies',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather information about how you use our site. Cookies are small text files stored on your device.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mt-2 ml-4 list-disc">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and improve your experience</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed pt-2">
            You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
          </p>
        </div>
      )
    },
    {
      id: 'your-rights',
      icon: CheckCircle,
      title: 'Your Privacy Rights',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">Depending on your location, you may have the following rights:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Access:</strong> Request access to your personal information we hold</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Objection:</strong> Object to processing of your personal information for certain purposes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>Data Portability:</strong> Request a copy of your data in a structured format</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            To exercise these rights, please contact us using the information provided in the Contact section below.
          </p>
        </div>
      )
    },
    {
      id: 'international-transfers',
      icon: Globe,
      title: 'International Data Transfers',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            As an export business, your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We take appropriate safeguards to ensure that your personal information receives an adequate level of protection, including using standard contractual clauses approved by relevant authorities.
          </p>
        </div>
      )
    },
    {
      id: 'retention',
      icon: Database,
      title: 'Data Retention',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Business records, including transaction history and export documentation, may be retained for longer periods to comply with legal obligations and for business continuity purposes.
          </p>
        </div>
      )
    },
    {
      id: 'children-privacy',
      icon: Users,
      title: "Children's Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete such information promptly.
          </p>
        </div>
      )
    },
    {
      id: 'changes',
      icon: AlertCircle,
      title: 'Changes to This Privacy Policy',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 list-disc">
            <li>Posting the updated policy on this page with a revised "Last Updated" date</li>
            <li>Sending you an email notification (if we have your email address)</li>
            <li>Displaying a prominent notice on our website</li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </div>
      )
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Us',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mt-4">
            <p className="text-gray-700 font-semibold mb-2">Krushi World Export</p>
            <p className="text-gray-700">Email: <a href="mailto:info@krushiworldexport.com" className="text-amber-600 hover:underline">info@krushiworldexport.com</a></p>
            <p className="text-gray-700">Phone: +91 98765 43210</p>
            <p className="text-gray-700">Address: Gujarat, India</p>
          </div>
          <p className="text-gray-700 leading-relaxed pt-2">
            We will respond to your inquiry within 30 days of receipt.
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
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        This Privacy Policy explains how Krushi World Export collects, uses, and protects your personal information when you visit our website or use our services. We are committed to maintaining the privacy and security of your data.
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
                <h3 className="text-2xl font-bold mb-4">Have Questions About Privacy?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  If you have any concerns or questions about how we handle your personal information, please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 border-0 shadow-lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
                      View Terms of Use
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

