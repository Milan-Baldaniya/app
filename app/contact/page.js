'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Get in Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Have questions? We're here to help you with all your export needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="slide-left">
            <div className="h-full">
              <Card className="h-full hover-elevate border-2 border-transparent hover:border-amber-500/30 shadow-lg">
                <CardContent className="pt-8 pb-8 px-6 lg:px-8 h-full flex flex-col">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                      Contact Information
                    </span>
                  </h2>
                  
                  <div className="space-y-6 flex-grow">
                    {[
                      {
                        icon: MapPin,
                        title: 'Address',
                        content: '404, Swami Narayan Society\nGodadara Canal Road\nNearby: Sai Krupa Electrical Works\nSurat, 395012\nSurat, Gujarat, India',
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        icon: Phone,
                        title: 'Phone',
                        content: '+91 98765 43210\n+91 98765 43211',
                        color: 'from-amber-500 to-orange-500',
                      },
                      {
                        icon: Mail,
                        title: 'Email',
                        content: 'info@krushiworldexport.com\nsales@krushiworldexport.com',
                        color: 'from-green-500 to-emerald-500',
                      },
                      {
                        icon: Clock,
                        title: 'Business Hours',
                        content: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed',
                        color: 'from-purple-500 to-pink-500',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <Link
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Chat on WhatsApp
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <div className="h-full">
              <Card className="h-full hover-elevate border-2 border-transparent hover:border-amber-500/30 shadow-lg">
                <CardContent className="pt-8 pb-8 px-6 lg:px-8 h-full flex flex-col">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                      Send Us a Message
                    </span>
                  </h2>
                  
                  {success && (
                    <AnimatedSection animation="fade-scale">
                      <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                      </div>
                    </AnimatedSection>
                  )}

                  <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                    <div className="space-y-6 flex-grow flex flex-col">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                          <Input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                          <Input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company"
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="h-11"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                          <Input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 234 567 8900"
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                        <Input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="What is this regarding?"
                          className="h-11"
                        />
                      </div>

                      <div className="flex-grow">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <Textarea
                          rows="6"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us more about your requirements..."
                          className="resize-none h-full"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      size="lg"
                      className="w-full text-lg h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 disabled:bg-gray-400 mt-6"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-12 lg:mt-16">
            <Card className="overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.57312345678!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d156b%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
