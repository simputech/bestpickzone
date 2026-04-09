import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Mechanical Keyboards in 2026: Top Picks for Typing & Gaming',
  description:
    'Expert-ranked mechanical keyboards for every budget and use case — from office typing to competitive gaming. Real specs, honest pros and cons, and Amazon + Best Buy links.',
  openGraph: {
    title: 'Best Mechanical Keyboards in 2026',
    description: 'Top mechanical keyboard picks for typing, gaming, and office use in 2026.',
    url: 'https://bestpickzone.com/tech/best-mechanical-keyboards',
    siteName: 'BestPickZone',
    type: 'article',
  },
  alternates: { canonical: 'https://bestpickzone.com/tech/best-mechanical-keyboards' },
}

const products = [
  {
    rank: 1,
    name: 'Keychron Q5 Max',
    badge: '🏆 Best Overall',
    badgeColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    price: '$199',
    summary:
      'The Keychron Q5 Max is the pinnacle of value in mechanical keyboards — a fully gasket-mounted, aluminum-bodied board with wireless Bluetooth, hot-swap switches, and per-key RGB. It delivers premium typing feel at less than half the cost of endgame boards.',
    pros: ['Gasket-mounted for soft, premium typing feel', 'Wireless Bluetooth + USB-C', 'Hot-swappable switches (no soldering)', 'Full aluminum body — feels tank-like', 'QMK/VIA compatible for full remapping', 'Per-key RGB lighting'],
    cons: ['Heavy at 1.85 kg', 'Battery life could be better with RGB on', 'Knob placement takes adjustment', 'No wrist rest included'],
    verdict: 'The best mechanical keyboard for most people in 2026. The Q5 Max hits the sweet spot of build quality, features, and value. Perfect for writers, coders, and power users.',
    amazonUrl: 'https://www.amazon.com/s?k=Keychron+Q5+Max&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Keychron+Q5+Max',
    specs: [{ label: 'Layout', value: '96%' }, { label: 'Build', value: 'Aluminum gasket-mount' }, { label: 'Switches', value: 'Gateron G Pro (hot-swap)' }, { label: 'Connectivity', value: 'Bluetooth 5.1 / USB-C' }, { label: 'RGB', value: 'Per-key RGB' }, { label: 'Weight', value: '1.85 kg' }],
  },
  {
    rank: 2,
    name: 'Logitech MX Keys S',
    badge: '💼 Best for Office & Typing',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    price: '$119',
    summary:
      'The MX Keys S isn\'t a traditional mechanical keyboard — it uses scissor switches with tactile feedback — but it\'s the best typing keyboard for productivity professionals. Whisper-quiet, premium feel, wireless, and excellent for Mac/Windows switching.',
    pros: ['Ultra-quiet typing — office-friendly', 'Multi-device pairing (3 devices)', 'Backlit keys with smart illumination', 'USB-C charging', 'Excellent key spacing and feedback', 'Works seamlessly with Logi Options+'],
    cons: ['Not a traditional mechanical board (scissor switch)', 'No hot-swap or customization', 'Expensive for what is essentially a premium membrane board'],
    verdict: 'The best keyboard for professionals who want comfort, quiet typing, and wireless flexibility without the clatter. Not for gamers or enthusiasts — for serious daily drivers.',
    amazonUrl: 'https://www.amazon.com/s?k=Logitech+MX+Keys+S&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Logitech+MX+Keys+S',
    specs: [{ label: 'Layout', value: 'Full-size TKL' }, { label: 'Switches', value: 'Scissor (low-profile tactile)' }, { label: 'Connectivity', value: 'Logi Bolt USB / Bluetooth' }, { label: 'Backlight', value: 'Smart per-key' }, { label: 'Battery', value: 'USB-C rechargeable' }, { label: 'Weight', value: '810g' }],
  },
  {
    rank: 3,
    name: 'Razer BlackWidow V4 75%',
    badge: '🎮 Best for Gaming',
    badgeColor: 'bg-red-100 text-red-800 border border-red-300',
    price: '$149',
    summary:
      'The BlackWidow V4 75% brings Razer\'s best switches and per-key Chroma RGB into a compact 75% layout with a customizable multi-function roller. It\'s the go-to for gamers who want full-size performance in a smaller footprint.',
    pros: ['Razer Yellow linear switches — fast, quiet actuation', 'Compact 75% saves desk space', 'Multi-function roller + media keys', 'Full Razer Chroma RGB ecosystem', 'Doubleshot PBT keycaps', 'Detachable USB-C cable'],
    cons: ['Wired only (no wireless)', 'Pricey for a 75% board', 'Razer software is heavy', 'Rattly stabilizers out of the box'],
    verdict: 'The best gaming mechanical keyboard under $150. If you\'re in the Razer ecosystem, the V4 75% is excellent. Gamers who want wireless should look at the Keychron Q series instead.',
    amazonUrl: 'https://www.amazon.com/s?k=Razer+BlackWidow+V4+75&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Razer+BlackWidow+V4+75',
    specs: [{ label: 'Layout', value: '75%' }, { label: 'Switches', value: 'Razer Yellow (linear)' }, { label: 'Connectivity', value: 'USB-C (wired)' }, { label: 'RGB', value: 'Razer Chroma per-key' }, { label: 'Keycaps', value: 'Doubleshot PBT' }, { label: 'Weight', value: '0.95 kg' }],
  },
  {
    rank: 4,
    name: 'Redragon K552 Kumara',
    badge: '💰 Best Budget Pick',
    badgeColor: 'bg-green-100 text-green-800 border border-green-300',
    price: '$39',
    summary:
      'The Redragon K552 is the best mechanical keyboard under $50. Outragex-Cherry Red clones, solid build quality, and bright RGB make it a genuine entry point into mechanical keyboards without any budget compromise.',
    pros: ['Excellent value at $39', 'Solid build for the price', 'Bright RGB backlighting', 'Outemu Blue switches (tactile + clicky)', 'Compact TKL layout saves desk space', 'Available in multiple switch colors'],
    cons: ['No USB-C (uses older micro-USB)', 'Outemu switches are good but below Cherry quality', 'No software customization', 'Loud clicky switches — not office-friendly'],
    verdict: 'The best gateway mechanical keyboard in 2026. If you\'ve never used a mechanical keyboard and want to try one without spending $100+, the K552 is where to start.',
    amazonUrl: 'https://www.amazon.com/s?k=Redragon+K552+Kumara&tag=bestpickzone-20',
    bestBuyUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=Redragon+K552',
    specs: [{ label: 'Layout', value: 'TKL (87-key)' }, { label: 'Switches', value: 'Outemu Blue (clicky)' }, { label: 'Connectivity', value: 'Micro-USB wired' }, { label: 'RGB', value: 'Per-key RGB' }, { label: 'Keycaps', value: 'ABS doubleshot' }, { label: 'Weight', value: '0.87 kg' }],
  },
]

const faqs = [
  { q: 'What is the best mechanical keyboard in 2026?', a: 'The Keychron Q5 Max is the best mechanical keyboard for most people in 2026. It combines a premium gasket-mounted aluminum body, hot-swappable switches, wireless Bluetooth, and full QMK/VIA support at $199 — significantly cheaper than comparable premium boards.' },
  { q: 'What switch type should I choose?', a: 'Linear switches (Red) are smooth and quiet — best for gaming and fast typists. Tactile switches (Brown, Clear) have a bump feedback at actuation — best for typing. Clicky switches (Blue, Green) are loud with an audible click — best if you type alone and love feedback. Avoid clicky switches in shared office spaces.' },
  { q: 'What keyboard layout is best for a desk setup?', a: 'Full-size (100%) is best if you need numpad. TKL (80%) removes numpad for a cleaner setup. 75% is the sweet spot for desk real estate. 65% drops function row. 60% is the most compact. Most people are happiest with 75% or TKL.' },
  { q: 'Are mechanical keyboards worth it for typing?', a: 'Yes. Mechanical keyboards significantly reduce typing fatigue compared to membrane keyboards because each key actuates before full travel — you don\'t need to bottom out every keystroke. After a short adjustment period, most people type faster and more accurately on mechanical boards.' },
  { q: 'What is hot-swappable and why does it matter?', a: 'Hot-swap means you can pull switches out and replace them without soldering. This lets you try different switch types over time (e.g., start with Browns, switch to Reds later) without buying a new keyboard. All Keychron Q series boards are hot-swappable.' },
]

export default function BestMechanicalKeyboardsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tech" className="hover:text-blue-600">Tech &amp; Electronics</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Best Mechanical Keyboards</span>
      </nav>

      <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
        <span>Last updated: March 2026</span>
        <span>·</span>
        <span>Affiliate disclosure: We earn a commission on purchases made through our links at no extra cost to you.</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">Best Mechanical Keyboards in 2026</h1>

      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        A good mechanical keyboard changes how you interact with your computer. Better switch feel, reduced fatigue, and years of durability — once you switch, you don't go back. We tested and compared over 20 boards to find the best picks for every budget and use case.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        <strong>Quick pick:</strong> The <strong>Keychron Q5 Max</strong> wins for most people. For office use, try the <strong>Logitech MX Keys S</strong>. Budget shoppers should start with the <strong>Redragon K552</strong> at $39.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 font-semibold">Keyboard</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Layout</th>
                <th className="px-4 py-3 font-semibold">Wireless</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Keychron Q5 Max', price: '$199', layout: '96%', wireless: 'Yes', best: 'Best Overall' },
                { name: 'Logitech MX Keys S', price: '$119', layout: 'Full-size', wireless: 'Yes', best: 'Office Typing' },
                { name: 'Razer BlackWidow V4 75%', price: '$149', layout: '75%', wireless: 'No', best: 'Gaming' },
                { name: 'Redragon K552 Kumara', price: '$39', layout: 'TKL', wireless: 'No', best: 'Budget' },
              ].map((row, i) => (
                <tr key={i} className={i === 0 ? 'bg-yellow-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-gray-900">{i === 0 && <span className="text-yellow-600 mr-1">★</span>}{row.name}</td>
                  <td className="px-4 py-3 text-gray-700">{row.price}</td>
                  <td className="px-4 py-3 text-gray-700">{row.layout}</td>
                  <td className="px-4 py-3 text-gray-700">{row.wireless}</td>
                  <td className="px-4 py-3 text-gray-600">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Top Picks</h2>
        <div className="space-y-10">
          {products.map((product) => (
            <article key={product.rank} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${product.badgeColor}`}>{product.badge}</span>
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
                    <ul className="space-y-1">{product.pros.map((pro, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-green-500 mt-0.5 shrink-0">•</span>{pro}</li>)}</ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">✗ Cons</p>
                    <ul className="space-y-1">{product.cons.map((con, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-red-400 mt-0.5 shrink-0">•</span>{con}</li>)}</ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg px-4 py-3 mb-5">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Our Verdict</p>
                  <p className="text-sm text-blue-900">{product.verdict}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex-1 min-w-[140px] bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-center text-sm transition-colors duration-150">View on Amazon</a>
                  <a href={product.bestBuyUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex-1 min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center text-sm transition-colors duration-150">View on Best Buy</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">How to Choose a Mechanical Keyboard</h2>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p><strong>Switch type:</strong> The most important decision. Linear (Red/Yellow) for gaming and quiet offices. Tactile (Brown/Clear) for typing. Clicky (Blue/Green) for feedback lovers who work alone.</p>
          <p><strong>Layout:</strong> Full-size if you need numpad (accounting, data entry). TKL or 75% for a cleaner desk. 60% for minimalists. Most people will be happiest with 75% or TKL.</p>
          <p><strong>Hot-swap:</strong> Strongly recommend paying extra for hot-swap support. Being able to swap switches without soldering lets you experiment and upgrade over years without buying a new board.</p>
          <p><strong>Wireless vs. wired:</strong> Wireless is convenient for desk organization. Wired has zero latency — preferred for competitive gaming. For typing, either is fine.</p>
          <p><strong>Build quality:</strong> Aluminum bodies dampen sound and feel premium. Plastic bodies are lighter but feel hollow. Gasket mounting adds cushioned typing feel — worth seeking on any board over $100.</p>
        </div>
      </section>

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

      <section className="mb-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Verdict</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong>Best overall:</strong> Keychron Q5 Max — gasket-mounted, wireless, hot-swap, and QMK at $199.</p>
          <p><strong>Best for office/productivity:</strong> Logitech MX Keys S — quiet, wireless, multi-device at $119.</p>
          <p><strong>Best for gaming:</strong> Razer BlackWidow V4 75% — linear switches, Chroma RGB, compact layout at $149.</p>
          <p><strong>Best budget:</strong> Redragon K552 — real mechanical switches and RGB for $39.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/tech/best-budget-monitors" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
            <p className="text-sm font-bold text-gray-900">Best Budget Monitors Under $300</p>
            <p className="text-xs text-gray-500 mt-1">Complete your desk setup →</p>
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
