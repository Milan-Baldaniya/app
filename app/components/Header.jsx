'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail } from 'lucide-react'

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
        <div className="relative flex h-16 items-center justify-between gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:flex"
          >
            <div className="relative h-[48px] w-[48px] sm:h-[64px] sm:w-[64px] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Krushi World Export Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, 64px"
                unoptimized
              />
            </div>
            <div className="hidden sm:flex">
              <span className="text-lg font-bold leading-tight tracking-wide" style={{ fontFamily: 'var(--font-playfair), "Georgia", "Times New Roman", serif' }}>
                Krushi World Export
              </span>
            </div>
          </Link>

          {/* Mobile Company Name - Centered */}
          <Link 
            href="/" 
            className="absolute left-1/2 transform -translate-x-1/2 flex justify-center sm:hidden"
          >
            <span className="text-lg font-bold leading-tight tracking-wide" style={{ fontFamily: 'var(--font-playfair), "Georgia", "Times New Roman", serif' }}>
              Krushi World Export
            </span>
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
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="transition-all duration-300 hover:rotate-12 p-0"
              >
                <div className="bg-[#25D366] rounded-lg p-2 flex items-center justify-center">
                  <svg className="h-8 w-8 transition-transform duration-300" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
              </Button>
            </a>
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

