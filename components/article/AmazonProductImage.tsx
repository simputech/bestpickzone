'use client'

import { useState } from 'react'

export default function AmazonProductImage({ src, alt, width = 180, height = 180, className = 'h-40 w-40 object-contain' }: { src: string; alt: string; width?: number; height?: number; className?: string }) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  if (failedSource === src) return <span data-amazon-image-status="unavailable" className="flex min-h-24 items-center justify-center rounded-lg bg-white p-4 text-center text-sm text-gray-600">Image unavailable. View the item on Amazon.</span>
  // Display Amazon's original URL directly. Do not proxy or persist image bytes.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" className={className} onError={() => setFailedSource(src)} />
}
