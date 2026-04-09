import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'BestPickZone — Best Book Recommendations & Reviews 2026',
    template: '%s | BestPickZone',
  },
  description:
    'BestPickZone delivers expert book recommendations across author roundups, genre fiction, self-help, kids & YA, and reader-intent guides — with Amazon buy links on every pick.',
  metadataBase: new URL('https://bestpickzone.com'),
  openGraph: {
    type: 'website',
    siteName: 'BestPickZone',
    url: 'https://bestpickzone.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
