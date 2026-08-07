import Link from 'next/link'
import type { ShowdownArticle, ShowdownProduct } from '@/lib/home-kitchen-showdowns'

function ProductCard({ product }: { product: ShowdownProduct }) {
  return (
    <section
      className={`overflow-hidden rounded-[24px] border-2 bg-white shadow-sm ${
        product.winner ? 'border-emerald-400' : 'border-gray-200'
      }`}
    >
      {product.winner ? (
        <div className="bg-emerald-600 px-6 py-2 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-white">
          Editor&apos;s Pick
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-5 border-b border-gray-200 bg-gray-50 p-6">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br text-4xl ${product.emojiClass}`}
        >
          {product.emoji}
        </div>
        <div className="min-w-[220px] flex-1">
          <h2 className="mb-1 text-2xl font-extrabold text-gray-900">{product.name}</h2>
          <p className="text-3xl font-black text-gray-900">{product.price}</p>
          <p className="mt-1 text-sm text-gray-600">
            {product.ratingText} · {product.reviewCountText}
          </p>
          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${product.verdictTagClass}`}
          >
            {product.verdictTag}
          </span>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <div className="flex flex-wrap gap-2">
          {product.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700"
            >
              {stat}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          {product.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-gray-500">
            How it scores
          </h3>
          <div className="space-y-3">
            {product.scores.map((score) => (
              <div key={score.label} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-sm font-semibold text-gray-600">
                  {score.label}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full ${score.colorClass ?? 'bg-emerald-500'}`}
                    style={{ width: `${score.value * 10}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm font-bold text-gray-800">
                  {score.value.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-700">
              What we like
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
              {product.pros.map((pro) => (
                <li key={pro} className="flex gap-2">
                  <span className="font-bold text-emerald-600">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-rose-700">
              Worth knowing
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
              {product.cons.map((con) => (
                <li key={con} className="flex gap-2">
                  <span className="font-bold text-rose-600">✕</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="rounded-r-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 text-sm italic leading-relaxed text-gray-700">
          {product.quote}
          <cite className="mt-3 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
            {product.quoteMeta}
          </cite>
        </blockquote>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <Link
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored noopener"
            className="inline-flex items-center justify-center rounded-xl border border-[#f0c14b] bg-gradient-to-b from-[#ffd814] to-[#f7ca00] px-6 py-3 text-base font-extrabold text-[#111] shadow-sm transition hover:from-[#f7ca00] hover:to-[#ddb100]"
            data-affiliate-placement="product-card"
            data-affiliate-product={product.name}
            data-affiliate-link-type="button"
          >
            Click Here to Check Price on Amazon
          </Link>
          <p className="mt-3 text-xs text-gray-600">{product.primeNote}</p>
        </div>
      </div>
    </section>
  )
}

export default function CommerceShowdownArticlePage({ article }: { article: ShowdownArticle }) {
  const [left, right] = article.products

  return (
    <main className="pb-28">
      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-900 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <nav className="mb-8 text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/home-kitchen" className="hover:text-white">
              Home &amp; Kitchen
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-white">{article.title}</span>
          </nav>

          <span className="inline-block rounded-full bg-amber-300 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-slate-900">
            {article.heroLabel}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            {article.heroTitle}
            <span className="block text-amber-300">{article.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            {article.heroSub}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/65">
            {article.metaLine.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950">
          <strong>Heads up:</strong> {article.disclosure}
        </div>

        <section className="mb-10 rounded-[28px] border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-gray-900">Quick verdict</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {article.products.map((product) => (
              <div
                key={product.name}
                className={`relative rounded-2xl border-2 bg-white p-5 ${
                  product.winner ? 'border-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]' : 'border-gray-200'
                }`}
              >
                {product.winner ? (
                  <span className="absolute -top-3 left-5 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
                    Editor&apos;s Pick
                  </span>
                ) : null}
                <h3 className="text-xl font-extrabold text-gray-900">{product.shortName}</h3>
                <p className="mt-1 text-3xl font-black text-gray-900">{product.price}</p>
                <p className="mt-2 text-sm text-gray-600">{product.reviewCountText}</p>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${product.verdictTagClass}`}
                >
                  {product.verdictTag}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
            {article.introLabel}
          </p>
          <h2 className="mb-4 text-3xl font-black text-gray-900">{article.introHeading}</h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            {article.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mb-10 grid gap-8">
          <ProductCard product={left} />

          <section className="rounded-[24px] bg-gradient-to-br from-emerald-100 via-emerald-50 to-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h2 className="text-xl font-black text-emerald-900">{article.calloutTitle}</h2>
                <p className="mt-2 text-base leading-relaxed text-emerald-900/80">
                  {article.calloutBody}
                </p>
              </div>
            </div>
          </section>

          <ProductCard product={right} />
        </div>

        <section className="mb-10 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-slate-950 px-6 py-4 text-white">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-300">
              Head to head
            </p>
            <h2 className="mt-2 text-2xl font-black">Side-by-side comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="px-4 py-4 font-extrabold text-gray-700">Feature</th>
                  <th className="bg-emerald-600 px-4 py-4 font-extrabold text-white">
                    {left.shortName}
                  </th>
                  <th className="px-4 py-4 font-extrabold text-gray-900">{right.shortName}</th>
                </tr>
              </thead>
              <tbody>
                {article.comparisonRows.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 font-semibold text-gray-700">{row.label}</td>
                    <td
                      className={`px-4 py-4 ${
                        row.winner === 'left' ? 'bg-emerald-50 font-bold text-emerald-800' : 'text-gray-700'
                      }`}
                    >
                      {row.left}
                    </td>
                    <td
                      className={`px-4 py-4 ${
                        row.winner === 'right' ? 'bg-orange-50 font-bold text-orange-800' : 'text-gray-700'
                      }`}
                    >
                      {row.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 rounded-[28px] bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-300">
            The verdict
          </p>
          <h2 className="mt-2 text-3xl font-black">Which avocado slicer should you buy?</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80">
            {article.verdictParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={left.amazonUrl}
              target="_blank"
              rel="sponsored noopener"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
              data-affiliate-placement="decision-verdict"
              data-affiliate-product={left.name}
              data-affiliate-link-type="button"
            >
              Get the OXO on Amazon
            </Link>
            <Link
              href={right.amazonUrl}
              target="_blank"
              rel="sponsored noopener"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
              data-affiliate-placement="decision-verdict"
              data-affiliate-product={right.name}
              data-affiliate-link-type="button"
            >
              Get the Fullstar Instead
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-black text-gray-900">Frequently asked questions</h2>
          <div className="space-y-4">
            {article.faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-extrabold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-700">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
            Keep shopping
          </p>
          <h2 className="mb-5 text-2xl font-black text-gray-900">Related BestPickZone pages</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {article.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm"
              >
                <div className="text-3xl">{link.emoji}</div>
                <h3 className="mt-3 text-lg font-extrabold text-gray-900">{link.title}</h3>
                <p className="mt-2 text-sm font-semibold text-emerald-700">{link.priceText}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 px-4 py-3 text-white shadow-2xl backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold">
            Top pick: <span className="text-amber-300">{left.shortName}</span> at {left.price}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={left.amazonUrl}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-extrabold text-slate-950 transition hover:bg-amber-200"
              data-affiliate-placement="mobile-sticky"
              data-affiliate-product={left.name}
              data-affiliate-link-type="button"
            >
              Buy on Amazon
            </Link>
            <Link
              href={right.amazonUrl}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-white/10"
              data-affiliate-placement="mobile-sticky"
              data-affiliate-product={right.name}
              data-affiliate-link-type="button"
            >
              Budget pick
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
