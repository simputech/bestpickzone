import type { ComparisonPageData, ComparisonProductSection } from '@/lib/product-comparisons'
import { amazonSearchUrl } from '@/lib/product-comparisons'

function ProductBlock({ product }: { product: ComparisonProductSection }) {
  const amazonUrl = amazonSearchUrl(product.amazonQuery)

  return (
    <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-gray-900">{product.question}</h2>
      <p className="mb-4 leading-relaxed text-gray-700">{product.snippetAnswer}</p>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{product.verdict}</p>
      <h3 className="mb-4 text-xl font-bold text-gray-900">{product.name}</h3>
      {product.paragraphs.map((paragraph, index) => (
        <p key={`${product.shortName}-${index}`} className="mb-4 leading-relaxed text-gray-700">
          {index === 0 ? (
            <>
              <a href={amazonUrl} target="_blank" rel="sponsored noopener" className="font-semibold text-amber-800 underline underline-offset-2">
                {product.name}
              </a>{' '}
              {paragraph}
            </>
          ) : (
            paragraph
          )}
        </p>
      ))}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="mb-3 text-lg font-bold text-emerald-900">Pros</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-emerald-950">
            {product.pros.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <h3 className="mb-3 text-lg font-bold text-rose-900">Cons</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-rose-950">
            {product.cons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mb-4 leading-relaxed text-amber-900">
        <strong>Skip this if:</strong> {product.skipIf}
      </p>
      <a
        href={amazonUrl}
        target="_blank"
        rel="sponsored noopener"
        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-amber-300"
      >
        Click Here to Buy on Amazon
      </a>
    </section>
  )
}

export default function ProductComparisonPage({ data }: { data: ComparisonPageData }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
        <em>{data.disclosure}</em>
      </p>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
        Product Comparison
      </p>
      <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
        {data.title}
      </h1>
      {data.intro.map((paragraph, index) => (
        <p key={`intro-${index}`} className="mb-4 text-lg leading-relaxed text-gray-700">
          {paragraph}
        </p>
      ))}
      <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">{data.specsQuestion}</h2>
        <p className="mb-4 leading-relaxed text-gray-700">{data.specsAnswer}</p>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold text-gray-900">Spec</th>
              <th className="px-3 py-3 font-semibold text-gray-900">{data.productA.shortName}</th>
              <th className="px-3 py-3 font-semibold text-gray-900">{data.productB.shortName}</th>
            </tr>
          </thead>
          <tbody>
            {data.specs.map((row) => (
              <tr key={row.label} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold text-gray-900">{row.label}</td>
                <td className="px-3 py-3 text-gray-700">{row.productA}</td>
                <td className="px-3 py-3 text-gray-700">{row.productB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <img
        src={data.heroImage.src}
        alt={data.heroImage.alt}
        width={data.heroImage.width}
        height={data.heroImage.height}
        className="mb-8 w-full rounded-xl shadow-sm"
      />
      <ProductBlock product={data.productA} />
      <ProductBlock product={data.productB} />
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">{data.faqQuestion}</h2>
        <p className="mb-4 leading-relaxed text-gray-700">{data.faqAnswer}</p>
        {data.faq.map((item) => (
          <div key={item.question} className="mb-5 last:mb-0">
            <h3 className="mb-2 text-lg font-bold text-gray-900">{item.question}</h3>
            <p className="leading-relaxed text-gray-700">{item.answer}</p>
          </div>
        ))}
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Where should you go next?</h2>
        <p className="leading-relaxed text-gray-700">
          <strong>Related:</strong>{' '}
          {data.relatedLinks.map((link, index) => (
            <span key={link.href}>
              <a href={link.href} className="font-semibold text-amber-800 underline underline-offset-2">
                {link.label}
              </a>
              {index < data.relatedLinks.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </section>
      <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">{data.closing.title}</h2>
        {data.closing.paragraphs.map((paragraph, index) => (
          <p key={`closing-${index}`} className="mb-4 leading-relaxed text-gray-700 last:mb-0">
            {paragraph}
          </p>
        ))}
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          Last verified: {data.lastVerified}
        </p>
      </section>
    </main>
  )
}
