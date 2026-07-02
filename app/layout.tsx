import Script from 'next/script'
import type { Metadata } from 'next'
import './globals.css'
import AmazonClickTracker from '@/components/analytics/AmazonClickTracker'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'BestPickZone — Buyer Guides, Product Comparisons & Book Recommendations',
    template: '%s | BestPickZone',
  },
  description:
    'BestPickZone publishes buyer-first product comparisons and expert book recommendations — coffee gear, beauty tech, WFH setups, home & kitchen, and curated reading guides.',
  metadataBase: new URL('https://bestpickzone.com'),
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: ['/icon.png'],
  },
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
    title: 'BestPickZone — Buyer Guides, Product Comparisons & Book Recommendations',
    description:
      'BestPickZone publishes buyer-first product comparisons and expert book recommendations across coffee, beauty, WFH, home & kitchen, and books.',
    images: ['https://bestpickzone.com/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BestPickZone',
  url: 'https://bestpickzone.com',
  logo: 'https://bestpickzone.com/icon.png',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BestPickZone',
  url: 'https://bestpickzone.com',
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
