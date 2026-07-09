'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getSectionArticleLinks, getSectionFromPathname, siteSections } from '@/lib/site-sections'

export default function CategorySiblingLinks() {
  const pathname = usePathname()

  if (!pathname || pathname === '/') {
    return null
  }

  const sectionKey = getSectionFromPathname(pathname)
  if (!sectionKey) {
    return null
  }

  const section = siteSections.find((item) => item.key === sectionKey)
  if (!section || pathname === section.href) {
    return null
  }

  const siblingLinks = getSectionArticleLinks(sectionKey)
    .filter((link) => link.href !== pathname)
    .slice(0, 6)

  if (siblingLinks.length === 0) {
    return null
  }

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              More In This Category
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Keep Exploring {section.title}
            </h2>
          </div>
          <Link
            href={section.href}
            className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            View {section.title} Hub
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siblingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
                {section.title}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">{link.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
