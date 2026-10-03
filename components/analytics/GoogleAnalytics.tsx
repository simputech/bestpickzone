'use client'

import { useEffect, useState } from 'react'
import { initializeAnalytics } from '@/lib/visitor-analytics'

export default function GoogleAnalytics({ production }: { production: boolean }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    try { setOpen(!window.localStorage.getItem('bpz_analytics_consent')) } catch { setOpen(true) }
    initializeAnalytics(production)
  }, [production])

  function choose(allow: boolean) {
    try { window.localStorage.setItem('bpz_analytics_consent', allow ? 'granted' : 'denied') } catch { /* Analytics stays off without saved permission. */ }
    setOpen(false)
    if (allow) initializeAnalytics(production)
    else if (window.__bpzAnalyticsInitialized) window.location.reload()
  }
  // Enhanced Measurement owns initial and History API page views.
  // Do not add a competing usePathname/useSearchParams page_view effect.
  return <div className={open ? "fixed bottom-4 left-4 right-4 z-[1000] max-w-sm sm:right-auto rounded-2xl border border-gray-300 bg-white p-4 text-sm text-gray-800 shadow-lg" : "bg-gray-950 px-4 py-3 text-center text-sm text-gray-200"}>
    {open ? <>
      <p className="font-semibold">Optional analytics</p>
      <p className="mt-2">Allow Google Analytics to measure visits and retailer-link clicks? You can read our guides either way. <a href="/privacy" className="underline">Privacy and cookies</a></p>
      <div className="mt-3 flex gap-3">
        <button onClick={() => choose(false)} className="rounded-lg border border-gray-400 px-4 py-2">Decline</button>
        <button onClick={() => choose(true)} className="rounded-lg border border-gray-400 px-4 py-2">Allow</button>
      </div>
    </> : <button onClick={() => setOpen(true)} className="underline">Analytics choices</button>}
  </div>
}
