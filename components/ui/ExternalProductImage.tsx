'use client'

import { useMemo, useState } from 'react'

type ExternalProductImageProps = {
  alt: string
  className?: string
  fallbackAccentClassName?: string
  src: string
  title: string
}

function buildFallbackSvg(title: string) {
  const escapedTitle = title
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${escapedTitle}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ecfccb" />
          <stop offset="55%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#dbeafe" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="28" fill="url(#bg)" />
      <rect x="24" y="24" width="192" height="192" rx="24" fill="#ffffff" stroke="#cbd5e1" />
      <rect x="54" y="58" width="132" height="80" rx="16" fill="#dcfce7" />
      <rect x="68" y="154" width="104" height="12" rx="6" fill="#cbd5e1" />
      <rect x="82" y="176" width="76" height="12" rx="6" fill="#e2e8f0" />
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export default function ExternalProductImage({
  alt,
  className,
  fallbackAccentClassName = 'from-lime-100 via-white to-sky-100',
  src,
  title,
}: ExternalProductImageProps) {
  const [failed, setFailed] = useState(false)
  const fallbackSrc = useMemo(() => buildFallbackSvg(title), [title])

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${fallbackAccentClassName} ${className ?? ''}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={fallbackSrc} alt={alt} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
