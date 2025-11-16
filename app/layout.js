import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krushi World Export - Premium Indian Agro Products Exporter',
  description: 'Leading exporter of premium quality spices, grains, oil seeds, pulses, vegetables, and dry fruits from India to worldwide markets.',
  keywords: 'agro export, spices export, turmeric, grains, pulses, Indian spices',
  openGraph: {
    title: 'Krushi World Export - Premium Indian Agro Products',
    description: 'Leading exporter of premium quality spices, grains, oil seeds, pulses, vegetables, and dry fruits from India.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}