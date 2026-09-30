'use client'

import { useEffect } from 'react'
import { initializeAnalytics } from '@/lib/visitor-analytics'

export default function GoogleAnalytics({ production }: { production: boolean }) {
  useEffect(() => { initializeAnalytics(production) }, [production])
  // Enhanced Measurement owns initial and History API page views.
  // Do not add a competing usePathname/useSearchParams page_view effect.
  return null
}
