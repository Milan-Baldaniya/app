import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  metadataBase: new URL('https://www.krushiworld.com'),
  title: {
    default: 'Krushi World - Premium Organic, Ayurvedic & Herbal Product Exporter',
    template: '%s | Krushi World'
  },
  description: 'Leading exporter of premium quality organic products, ayurvedic products, herbal products, fruits, vegetables, grains, pulses, seeds, oil seeds, oil, honey, and milk products from India to worldwide markets.',
  keywords: [
    'krushi world', 'krushi product', 'organic product import export', 'ayurvedik product', 'herbal product',
    'fruits', 'vegetables', 'grains', 'pulses', 'seeds', 'oil seeds', 'oil', 'honeyy product', 'milk product',
    'agro export', 'spices export', 'turmeric', 'Indian spices', 'fresh vegetables export', 'fresh fruits export',
    'dairy products export', 'Indian exporter', 'agricultural products India'
  ],
  authors: [{ name: 'Krushi World' }],
  creator: 'Krushi World',
  publisher: 'Krushi World',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Krushi World - Premium Organic, Ayurvedic & Herbal Product Exporter',
    description: 'Leading exporter of premium quality organic products, ayurvedic products, herbal products, fruits, vegetables, grains, pulses, seeds, oil seeds, oil, honey, and milk products from India.',
    url: 'https://www.krushiworld.com',
    siteName: 'Krushi World',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krushi World - Premium Organic, Ayurvedic & Herbal Product Exporter',
    description: 'Leading exporter of premium quality organic products, ayurvedic products, herbal products, fruits, vegetables, grains, pulses, seeds, oil seeds, oil, honey, and milk products from India.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Krushi World',
    url: 'https://www.krushiworld.com',
    logo: 'https://www.krushiworld.com/logo.png',
    sameAs: [
      'https://www.facebook.com/krushiworld',
      'https://www.instagram.com/krushiworld',
      'https://www.linkedin.com/company/krushiworld'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-1234567890', // Replace with actual number
      contactType: 'sales',
      areaServed: 'Global',
      availableLanguage: 'English'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${playfair.variable}`} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Header />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}