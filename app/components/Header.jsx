'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail, Globe } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Infrastructure', href: '/infrastructure' },
    { label: 'Export Docs', href: '/export-documentation' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 bg-white ${
        isScrolled
          ? 'backdrop-blur-lg border-b border-gray-200/50 shadow-sm'
          : 'border-b border-gray-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2"
          >
            <div className="relative h-20 w-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Krushi World Export Logo"
                fill
                className="object-contain"
                priority
                sizes="80px"
                unoptimized
              />
            </div>
            <div className="hidden sm:flex">
              <span className="text-lg font-bold leading-tight tracking-wide" style={{ fontFamily: 'var(--font-playfair), "Georgia", "Times New Roman", serif' }}>
                Krushi World Export
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <div className="relative group">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`
                        relative px-4 py-2 rounded-lg
                        transition-all duration-300 ease-in-out
                        hover:bg-amber-50 hover:text-amber-600
                        ${isActive 
                          ? 'text-amber-600 bg-amber-50 font-semibold' 
                          : 'text-gray-700 hover:text-amber-600'
                        }
                      `}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {/* Animated underline */}
                      <span 
                        className={`
                          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500
                          transition-all duration-300 ease-in-out
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}
                      />
                    </Button>
                  </div>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex transition-all duration-300 hover:bg-amber-50 hover:text-amber-600 hover:rotate-12"
            >
              <Globe className="h-4 w-4 transition-transform duration-300" />
            </Button>
            <Link href="/contact">
              <Button 
                variant="default" 
                size="sm" 
                className="hidden sm:flex bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold px-6"
              >
                Get Quote
              </Button>
            </Link>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="transition-all duration-300 hover:bg-amber-50 hover:text-amber-600"
                >
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button 
                          variant="ghost" 
                          className={`
                            w-full justify-start transition-all duration-300
                            hover:bg-amber-50 hover:text-amber-600 hover:translate-x-2
                            ${isActive ? 'bg-amber-50 text-amber-600 font-semibold' : ''}
                          `}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    )
                  })}
                  <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-gray-200">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant="default" 
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
                      >
                        Get Quote
                      </Button>
                    </Link>
                    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 transition-colors duration-300 hover:text-amber-600">
                        <Phone className="h-4 w-4" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2 transition-colors duration-300 hover:text-amber-600">
                        <Mail className="h-4 w-4" />
                        <span>info@krushiworldexport.com</span>
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

