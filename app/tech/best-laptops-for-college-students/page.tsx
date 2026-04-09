import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Laptops for College Students in 2026 (Every Budget)',
  description:
    'From $400 Chromebooks to premium MacBooks, we ranked the best laptops for college students by battery life, portability, performance, and value.',
  openGraph: {
    title: 'Best Laptops for College Students in 2026 (Every Budget)',
    description:
      'Top laptop picks for college students across every budget — Chromebooks, Windows laptops, and MacBooks.',
    url: 'https://bestpickzone.com/tech/best-laptops-for-college-students',
    siteName: 'BestPickZone',
    type: 'article',
  },
  alternates: {
    canonical: 'https://bestpickzone.com/tech/best-laptops-for-college-students',
  },
}

const products = [
  {
    rank: 1,
    name: 'Apple MacBook Air M3 (13-inch)',
    badge: '🏆 Best Overall',
    badgeColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    price: '$1,099',
    summary:
      'The MacBook Air M3 is the best college laptop for students who can stretch the budget. Featherlight at 2.7 lbs, utterly silent (no fan), 18-hour battery life, and M3 performance that handles everything from video editing to Python — all day without a charger.',
    pros: [
      '18-hour battery life — lasts through a full day of classes',
      'M3 chip handles everything except hardcore gaming',
      'Fanless, completely silent design',
      '2.7 lbs — extremely portable',
      'macOS is ideal for iPhone/iPad users',
      'Retina display is stunning for media and design work',
    ],
    cons: [
      'Expensive — starts at $1,099 (8GB RAM)',
      'Only 2 USB-C ports — requires a hub for peripherals',
      'No touchscreen',
      'Base 8GB RAM feels limited for heavy multitasking in 2026',
    ],
    verdict:
      'The best laptop for college students with a $1,000+ budget. Unbeatable battery life and portability make it the ideal class companion for STEM, business, and creative students alike.',
    amazonUrl: 'https://www.amazon.com/s?k=MacBook+Air+M3+13+inch&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Air+M3+13+inch',
    specs: [
      { label: 'Processor', value: 'Apple M3' },
      { label: 'RAM', value: '8GB / 16GB' },
      { label: 'Storage', value: '256GB–2TB SSD' },
      { label: 'Display', value: '13.6" Retina (2560×1664)' },
      { label: 'Battery', value: '18 hours' },
      { label: 'Weight', value: '2.7 lbs' },
    ],
  },
  {
    rank: 2,
    name: 'Lenovo IdeaPad Flex 5i',
    badge: '💰 Best Under $600',
    badgeColor: 'bg-green-100 text-green-800 border border-green-300',
    price: '$499',
    summary:
      'The IdeaPad Flex 5i gives students a 2-in-1 touchscreen laptop with solid Intel Core i5 performance, a bright 14" display, and reliable battery life for under $500. One of the best value Windows laptops in 2026.',
    pros: [
      '2-in-1 touchscreen design (laptop + tablet mode)',
      'Intel Core i5 handles coursework and light multitasking',
      'Up to 12 hours battery life',
      'Bright, sharp 14" IPS display',
      'Full-size USB-A ports — no hub needed',
      'Fingerprint reader included',
    ],
    cons: [
      'Build quality feels plasticky compared to premium options',
      'Storage limited to 256GB on base model',
      'Not powerful enough for video editing or 3D rendering',
    ],
    verdict:
      'The best laptop under $600 for college students. The 2-in-1 design is great for note-taking, and you get real Windows performance without breaking the bank.',
    amazonUrl: 'https://www.amazon.com/s?k=Lenovo+IdeaPad+Flex+5i+14+inch&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Lenovo+IdeaPad+Flex+5i',
    specs: [
      { label: 'Processor', value: 'Intel Core i5-1335U' },
      { label: 'RAM', value: '8GB DDR5' },
      { label: 'Storage', value: '256GB SSD' },
      { label: 'Display', value: '14" FHD IPS Touchscreen' },
      { label: 'Battery', value: '12 hours' },
      { label: 'Weight', value: '3.6 lbs' },
    ],
  },
  {
    rank: 3,
    name: 'Dell XPS 13',
    badge: '🎨 Best for Design & Creative Work',
    badgeColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    price: '$1,099',
    summary:
      'The Dell XPS 13 pairs an Intel Core Ultra processor with a gorgeous OLED display option and a compact premium build — ideal for design, media, and business students who want Windows at its finest.',
    pros: [
      'Premium aluminum build that rivals MacBook quality',
      'Optional OLED display is stunning',
      'Intel Core Ultra chips handle demanding creative workflows',
      'Compact 12.4" size with 60Wh battery',
      'Excellent keyboard and trackpad for Windows',
    ],
    cons: [
      'Expensive for the specs vs. MacBook Air M3',
      'Only 2 Thunderbolt 4 ports',
      'Shorter battery life than MacBook (around 10–12 hours)',
      '12.4" screen may feel small for some',
    ],
    verdict:
      'The best Windows premium laptop for students. Pairs beautifully with the Adobe Creative Suite and handles design, video, and business workflows effortlessly.',
    amazonUrl: 'https://www.amazon.com/s?k=Dell+XPS+13+2026&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Dell+XPS+13+2026',
    specs: [
      { label: 'Processor', value: 'Intel Core Ultra 7' },
      { label: 'RAM', value: '16GB LPDDR5' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Display', value: '13.4" FHD+ or OLED' },
      { label: 'Battery', value: '10–12 hours' },
      { label: 'Weight', value: '2.7 lbs' },
    ],
  },
  {
    rank: 4,
    name: 'Acer Chromebook Spin 714',
    badge: '📚 Best Budget / Best Chromebook',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    price: '$449',
    summary:
      'The Chromebook Spin 714 is the best Chromebook for college students who live in Google Workspace. Solid Intel Core i5, a 2K touchscreen, and a durable 2-in-1 build at a fraction of Windows laptop prices.',
    pros: [
      'Affordable at $449',
      '2K touchscreen with 2-in-1 form factor',
      'ChromeOS is fast, secure, and virus-resistant',
      'Up to 10 hours battery life',
      'Includes USI stylus for handwritten notes',
      'Military-grade durability (MIL-STD-810H)',
    ],
    cons: [
      'Requires internet for most apps — limited offline functionality',
      'Limited software compatibility (no native Windows/macOS apps)',
      'ChromeOS not ideal for engineering or STEM software (MATLAB, AutoCAD)',
      'Storage is limited to 256GB',
    ],
    verdict:
      'The best budget laptop for students who use Google Docs, Google Slides, and browser-based tools. Not recommended for STEM or creative programs that require desktop software.',
    amazonUrl: 'https://www.amazon.com/s?k=Acer+Chromebook+Spin+714&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Acer+Chromebook+Spin+714',
    specs: [
      { label: 'Processor', value: 'Intel Core i5-1235U' },
      { label: 'RAM', value: '8GB' },
      { label: 'Storage', value: '256GB eMMC' },
      { label: 'Display', value: '14" 2K IPS Touchscreen' },
      { label: 'Battery', value: '10 hours' },
      { label: 'Weight', value: '3.34 lbs' },
    ],
  },
]

const faqs = [
  {
    q: 'What is the best laptop for college students in 2026?',
    a: 'The Apple MacBook Air M3 is the best overall laptop for college students who can invest $1,099. For students on a tighter budget, the Lenovo IdeaPad Flex 5i delivers solid performance under $500. Chromebook users should consider the Acer Chromebook Spin 714 at $449.',
  },
  {
    q: 'How much RAM do I need in a college laptop?',
    a: '8GB of RAM is the minimum for comfortable multitasking in 2026. Aim for 16GB if you plan to run virtual machines, video editing software, or keep 20+ browser tabs open. Note that Apple M3 chips use unified memory more efficiently, so 8GB on a Mac performs closer to 12GB on a Windows machine.',
  },
  {
    q: 'Should I get a Mac or Windows laptop for college?',
    a: 'Mac is better if you already use iPhone/iPad, want the best battery life, and are studying business, design, or humanities. Windows is better for engineering programs requiring specialized software (MATLAB, SolidWorks, AutoCAD), gaming, or if you need more storage at a lower price.',
  },
  {
    q: 'Is a Chromebook good enough for college?',
    a: 'It depends on your major. Chromebooks work great for general coursework, research, and Google Workspace. They\'re not suitable for STEM programs requiring MATLAB, Jupyter, or engineering CAD tools, or for creative programs using Premiere Pro or Photoshop.',
  },
  {
    q: 'What laptop specs do I need for college?',
    a: 'The minimum specs for a college laptop in 2026: 8GB RAM, 256GB SSD, and a 1080p display. For STEM or creative work, upgrade to 16GB RAM and 512GB SSD. Battery life should be at least 8 hours to last a full day of classes without charging.',
  },
]

export default function BestLaptopsForCollegeStudentsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tech" className="hover:text-blue-600">Tech &amp; Electronics</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Best Laptops for College Students</span>
      </nav>

      <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
        <span>Last updated: March 2026</span>
        <span>·</span>
        <span>Affiliate disclosure: We earn a commission on purchases made through our links at no extra cost to you.</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
        Best Laptops for College Students in 2026
      </h1>

      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Choosing the right laptop for college can feel overwhelming — but the right answer
        depends on your major, your budget, and your existing devices. After researching
        over 25 models, we narrowed it down to four laptops that cover every student budget
        and use case.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        <strong>Quick pick:</strong> The <strong>MacBook Air M3</strong> is the best
        all-around choice at $1,099. On a budget? The{' '}
        <strong>Lenovo IdeaPad Flex 5i</strong> at $499 is hard to beat. Google-only
        students can save with the <strong>Acer Chromebook Spin 714</strong>.
      </p>

      {/* Quick Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 font-semibold">Laptop</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Battery</th>
                <th className="px-4 py-3 font-semibold">Weight</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p, i) => (
                <tr key={i} className={i === 0 ? 'bg-yellow-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {i === 0 && <span className="text-yellow-600 mr-1">★</span>}
                    {p.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{p.price}</td>
                  <td className="px-4 py-3 text-gray-700">{p.specs.find(s => s.label === 'Battery')?.value}</td>
                  <td className="px-4 py-3 text-gray-700">{p.specs.find(s => s.label === 'Weight')?.value}</td>
                  <td className="px-4 py-3 text-gray-600">{p.badge.replace(/^[^\s]+\s/, '')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Top Picks</h2>
        <div className="space-y-10">
          {products.map((product) => (
            <article key={product.rank} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">#{product.rank} {product.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-blue-700">{product.price}</span>
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed">{product.summary}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-500 block">{spec.label}</span>
                      <span className="text-sm font-medium text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-2">✓ Pros</p>
                    <ul className="space-y-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-green-500 mt-0.5 shrink-0">•</span>{pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">✗ Cons</p>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-red-400 mt-0.5 shrink-0">•</span>{con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg px-4 py-3 mb-5">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Our Verdict</p>
                  <p className="text-sm text-blue-900">{product.verdict}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored"
                    className="flex-1 min-w-[140px] bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-center text-sm transition-colors duration-150">
                    View on Amazon
                  </a>
                  <a href={product.bestBuyUrl} target="_blank" rel="noopener noreferrer sponsored"
                    className="flex-1 min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center text-sm transition-colors duration-150">
                    View on Best Buy
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">What to Look For in a College Laptop</h2>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p><strong>Battery life:</strong> The most underrated spec for students. Aim for 8+ hours to get through a full day of classes. The MacBook Air M3 (18 hrs) is the leader; the IdeaPad Flex (12 hrs) and Chromebook (10 hrs) are solid runners-up.</p>
          <p><strong>Weight:</strong> Every pound matters in a backpack you carry across campus. Under 3.5 lbs is ideal. The MacBook Air M3 (2.7 lbs) and Dell XPS 13 (2.7 lbs) lead here.</p>
          <p><strong>RAM:</strong> 8GB is the minimum in 2026. If your budget allows, step up to 16GB for smoother multitasking, especially on Windows machines.</p>
          <p><strong>Storage:</strong> 256GB is tight for a 4-year college career. 512GB is better, especially if you store video projects or large datasets. Cloud storage can supplement, but local storage matters for offline work.</p>
          <p><strong>Major-specific software:</strong> Engineering and STEM students need Windows for software like MATLAB, SolidWorks, or AutoCAD. Creative students can use Mac or Windows. Business and humanities students have full flexibility.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className="border-l-4 border-blue-200 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Verdict */}
      <section className="mb-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Verdict</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong>Best overall:</strong> MacBook Air M3 — unbeatable battery, portability, and macOS ecosystem.</p>
          <p><strong>Best under $600:</strong> Lenovo IdeaPad Flex 5i — 2-in-1 touchscreen with reliable performance.</p>
          <p><strong>Best for design/creative:</strong> Dell XPS 13 — premium Windows laptop with optional OLED display.</p>
          <p><strong>Best budget / Chromebook:</strong> Acer Chromebook Spin 714 — ideal for Google Workspace users at $449.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/tech/best-mechanical-keyboards" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="text-sm font-bold text-gray-900">Best Mechanical Keyboards in 2026</p>
            <p className="text-xs text-gray-500 mt-1">Complete typing setup guide →</p>
          </Link>
          <Link href="/tech" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="text-sm font-bold text-gray-900">Browse All Tech &amp; Electronics Reviews</p>
            <p className="text-xs text-gray-500 mt-1">View all picks →</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
