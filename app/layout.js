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
    // Brand
    'krushi world', 'krushi product', 'krushi world export', 'krushi export',

    // General Export
    'import export website', 'agro export', 'agricultural products exporter', 'Indian exporter',
    'global export', 'organic product export', 'bulk export India',

    // Ayurvedic & Herbal
    'ayurvedic products', 'herbal products', 'ashwagandha powder', 'moringa powder',
    'neem powder', 'triphala powder', 'shatavari powder', 'herbal extracts', 'natural health products',

    // Spices
    'Indian spices', 'spices export', 'turmeric powder', 'red chilli powder', 'cumin seeds',
    'coriander powder', 'black pepper', 'cardamom', 'cloves', 'whole spices', 'ground spices',

    // Grains & Pulses
    'grains export', 'pulses export', 'basmati rice', 'non-basmati rice', 'wheat', 'maize', 'millet',
    'chickpeas', 'lentils', 'toor dal', 'moong dal', 'urad dal',

    // Fresh Produce
    'fresh fruits export', 'fresh vegetables export', 'alphonso mango', 'kesar mango', 'pomegranate',
    'banana', 'grapes', 'onion export', 'potato export', 'green chilli', 'tomato',

    // Oil Seeds & Oils
    'oil seeds export', 'sesame seeds', 'groundnut', 'peanuts', 'mustard seeds', 'sunflower seeds',
    'edible oils', 'groundnut oil', 'sesame oil', 'mustard oil',

    // Other Categories
    'honey products', 'natural honey', 'dairy products', 'ghee', 'milk powder',
    'dehydrated vegetables', 'dehydrated onion', 'dehydrated garlic',
    'organic farming products', 'certified organic products'
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