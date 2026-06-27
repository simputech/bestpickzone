import Script from 'next/script'
import type { Metadata } from 'next'
import './globals.css'
import AmazonClickTracker from '@/components/analytics/AmazonClickTracker'
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
    images: [
      {
        url: 'https://bestpickzone.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'BestPickZone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BestPickZone — Best Book Recommendations & Reviews 2026',
    description:
      'BestPickZone delivers expert book recommendations across author roundups, genre fiction, self-help, kids & YA, and reader-intent guides.',
    images: ['https://bestpickzone.com/og-default.png'],
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
        <AmazonClickTracker />
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZQZWSDYK8H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZQZWSDYK8H');
        `}
      </Script>
    </body>
    </html>
  )
}
