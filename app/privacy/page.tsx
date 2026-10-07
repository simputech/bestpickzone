import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy and Cookies',
  description: 'How BestPickZone uses analytics, affiliate links, cookies and browser storage, and how to control optional analytics.',
  alternates: { canonical: 'https://bestpickzone.com/privacy' },
}

export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 leading-8 text-gray-700">
    <h1 className="text-4xl font-bold text-gray-900">Privacy and cookies</h1>
    <p>Updated October 6, 2026. This page explains the data features used by BestPickZone, an editorial buying-guide and book-recommendation website.</p>
    <section><h2 className="text-2xl font-bold text-gray-900">Visiting the site</h2>
      <p>Our hosting provider, Vercel, processes technical request information to deliver and protect the site. This can include an IP address, requested URL, browser information and request time. See <a className="underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel’s privacy policy</a> for its practices. Reading our guides does not require a BestPickZone account or payment details.</p></section>
    <section><h2 className="text-2xl font-bold text-gray-900">Optional analytics</h2>
      <p>With your permission, we use Google Analytics to understand page visits, navigation and clicks on retailer links. Events may include the page address, link address and text, product category, and browser or device information. Google Analytics uses cookies or similar identifiers to measure visits. We do not need your name or email address for these measurements.</p>
      <p>You can accept or decline optional analytics using the Analytics choices control at the bottom of the page. Your preference is stored in your browser. Declining keeps our Google Analytics script from loading on subsequent page loads. You can also clear this site’s cookies and storage in your browser. See <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy</a> and <a className="underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google’s analytics opt-out tool</a>.</p></section>
    <section><h2 className="text-2xl font-bold text-gray-900">Affiliate links and other websites</h2>
      <p>Some links lead to Amazon, eBay or other retailers. Following one leaves BestPickZone. Those services may collect information directly, place or recognize cookies, and use affiliate identifiers to attribute a qualifying purchase. Their own privacy and cookie settings apply. We may receive affiliate reporting about clicks, orders and commissions; we do not process your retailer checkout or receive your payment-card details through these links.</p>
      <p>Third parties, including Amazon and other advertisers, may serve content and advertisements, collect information directly from visitors, and place or recognize cookies on browsers. Refer to <a className="underline" href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">Amazon’s Privacy Notice</a> and <a className="underline" href="https://www.ebay.com/help/policies/member-behavior-policies/user-privacy-notice-privacy-policy?id=4260" target="_blank" rel="noopener noreferrer">eBay’s Privacy Notice</a>. Affiliate links are described in our <Link className="underline" href="/disclosure">affiliate disclosure</Link>.</p></section>
    <section><h2 className="text-2xl font-bold text-gray-900">Deal questions, watchlists and email requests</h2><p>The Deal Agent processes a shopping question to match our guides. We do not store the question text in our editorial feedback database. If you choose to share feedback, we store the matched topic, question type, broad budget range and helpfulness response for up to 90 days. Do not include personal information in questions.</p><p>A watchlist is stored only in your browser and can be edited or removed on the watchlist page. Email requests are separate: we store your email, selected topic, optional price target and consent record using Supabase. Pending requests expire after 30 days. The form states whether email delivery and verified price monitoring are available; a saved request does not mean either is active.</p><p>Keep the private removal link shown when a request is saved. It lets you remove that request and its target without an account. When email is enabled, Resend processes delivery and confirmation is required before alerts. We do not sell this information. A short-lived hashed network identifier limits repeated submissions; expired rate-limit records are removed daily.</p></section>
    <section><h2 className="text-2xl font-bold text-gray-900">Children and book recommendations</h2>
      <p>Our guides are intended for adult shoppers, including parents, caregivers and educators choosing books or products for children. The site is not intended to collect personal information from children under 13.</p></section>
    <section><h2 className="text-2xl font-bold text-gray-900">Your browser choices</h2>
      <p>Browser controls let you block or delete cookies and local storage. Blocking storage may prevent us from remembering an analytics preference. Optional analytics remains off when no permission can be read. Retailer privacy choices must be managed with the retailer separately.</p></section>
  </main>
}
