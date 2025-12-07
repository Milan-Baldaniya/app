'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Krushi World Export Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight">Krushi World Export</span>
                <span className="text-xs text-muted-foreground leading-tight">Premium Quality</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading exporter of premium quality spices and agricultural products to global markets.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover-elevate">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover-elevate">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover-elevate">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover-elevate">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Products', 'Infrastructure', 'Certifications'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                      {item}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {['Turmeric', 'Red Chili', 'Cardamom', 'Coriander', 'Cumin'].map((item) => (
                <li key={item}>
                  <Link href={`/products/${item.toLowerCase()}`}>
                    <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                      {item}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>404, Swami Narayan Society</div>
                  <div>Godadara Canal Road</div>
                  <div>Nearby: Sai Krupa Electrical Works</div>
                  <div>Surat, 395012, Gujarat, India</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 78749 98158</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>krushiw@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-8 text-sm"
                />
                <Button size="sm" className="h-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
            <p>© 2025 Krushi World Export. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy">
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-xs flex items-center gap-1">
            <span>Created by</span>
            <a
              href="https://www.linkedin.com/in/meetkumar-vaghasiya-58a890261/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-600 hover:text-amber-700 transition-colors"
            >
              Meet
            </a>
            <span>,</span>
            <a
              href="https://www.linkedin.com/in/milan-baladaniya-bba615261/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-600 hover:text-amber-700 transition-colors"
            >
              Milan
            </a>
            <span>&</span>
            <a
              href="https://www.linkedin.com/in/omish-pipaliya/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-600 hover:text-amber-700 transition-colors"
            >
              Omish
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
