import type { Metadata } from 'next'
import overrides from './seo-overrides.json'
import { getSeoTitle } from './seo-titles'

const origin = "https://bestpickzone.com"
const brand = "BestPickZone"
const defaultImage = "/og-default.png"
const editorial = overrides as Record<string, { title?: string; description?: string }>

/** Use complete first sentences where possible; never cut a word in a search snippet. */
export function seoDescription(value: string): string {
  const text = value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  if (text.length <= 170) return text
  const sentence = text.match(/^(.{70,159}[.!?])(?:\s|$)/)?.[1]
  if (sentence) return sentence
  return text.slice(0, 157).replace(/\s+\S*$/, '').replace(/[,;:\s-]+$/, '') + '…'
}

/** One owner for final document titles, canonicals and social previews. H1s remain untouched. */
export function withSeo(metadata: Metadata, route?: string): Metadata {
  const rawCanonical = metadata.alternates?.canonical
  const candidate = route || (typeof rawCanonical === 'string' ? rawCanonical : rawCanonical instanceof URL ? rawCanonical.toString() : '')
  if (!candidate || candidate.includes('[')) return metadata
  const path = new URL(candidate, origin).pathname.replace(/\/$/, '') || '/'
  const url = new URL(path, origin).toString()
  const override = editorial[path]
  const inputTitle = typeof metadata.title === 'string' ? metadata.title : metadata.title && 'absolute' in metadata.title ? metadata.title.absolute : metadata.title && 'default' in metadata.title ? metadata.title.default : ''
  // Remove only this site's suffix; repeated suffixes cannot survive the absolute title.
  if (!inputTitle && !override?.title) return { ...metadata, alternates: { ...metadata.alternates, canonical: url } }
  let title = getSeoTitle(url) || override?.title || inputTitle || ''
  const escapedBrand = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  title = title.replace(new RegExp('(?:\\s*[|—–-]\\s*' + escapedBrand + ')+$', 'i'), '').trim()
  const branded = title + ' | ' + brand
  const finalTitle = title && !title.toLowerCase().includes(brand.toLowerCase()) && branded.length <= 70 ? branded : title
  const description = seoDescription(override?.description || metadata.description || '')
  const images = metadata.openGraph?.images || [new URL(defaultImage, origin).toString()]
  return {
    ...metadata,
    title: { absolute: finalTitle },
    description,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: { ...metadata.openGraph, title: finalTitle, description, url, images },
    twitter: { ...metadata.twitter, card: 'summary_large_image', title: finalTitle, description, images: metadata.twitter?.images || images },
  } as Metadata
}
