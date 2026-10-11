'use client'

import { useEffect, useRef, useState } from 'react'
import { initializeAnalytics, readAnalyticsConsent, saveAnalyticsConsent } from '@/lib/visitor-analytics'

const buttonClass = 'min-h-[44px] rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-500 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600'

export default function GoogleAnalytics({ production }: { production: boolean }) {
  const [bannerOpen, setBannerOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [notice, setNotice] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const reopen = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setBannerOpen(readAnalyticsConsent() === null)
    initializeAnalytics(production)
  }, [production])

  function openPreferences() {
    setAnalytics(readAnalyticsConsent() === 'granted')
    dialog.current?.showModal()
  }

  function choose(allow: boolean) {
    const wasInitialized = window.__bpzAnalyticsInitialized
    const saved = saveAnalyticsConsent(allow)
    dialog.current?.close()
    setBannerOpen(!saved)
    setNotice(saved ? 'Cookie preferences saved.' : 'Your choice could not be saved in this browser. Optional analytics is off for this visit.')
    reopen.current?.focus({ preventScroll: true })
    if (saved && allow) initializeAnalytics(production)
    // Reload after revocation to unload Google's existing script and listeners.
    // If saving failed, keep the in-memory denial instead of restoring an old grant.
    else if (saved && wasInitialized) window.location.reload()
  }

  // Enhanced Measurement owns initial and History API page views.
  // Do not add a competing usePathname/useSearchParams page_view effect.
  return <>
    <div className="bg-gray-950 px-4 py-3 text-center text-sm text-gray-200">
      <button ref={reopen} onClick={openPreferences} aria-haspopup="dialog" aria-controls="cookie-preferences-dialog" className="min-h-[44px] rounded px-3 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">Cookie preferences</button>
      <p role="status" className={notice ? 'mx-auto mt-1 max-w-xl text-sm' : 'sr-only'}>{notice}</p>
    </div>

    {bannerOpen && <section aria-labelledby="cookie-banner-title" className="fixed bottom-4 left-4 right-4 z-[1000] mx-auto max-h-[calc(100dvh-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 text-gray-900 shadow-2xl sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex-1">
          {notice && <p role="alert" className="mb-3 text-sm font-medium text-amber-900">{notice}</p>}
          <h2 id="cookie-banner-title" className="text-lg font-semibold">Cookie preferences</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">Optional Google Analytics measures visits and retailer-link clicks. You can browse without accepting. <a href="/privacy" className="rounded font-medium text-gray-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">Privacy and cookies</a></p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-3 lg:w-72">
          <button onClick={() => choose(true)} className={buttonClass}>Accept</button>
          <button onClick={() => choose(false)} className={buttonClass}>Reject</button>
          <button onClick={openPreferences} aria-haspopup="dialog" aria-controls="cookie-preferences-dialog" className={`${buttonClass} col-span-2`}>Preferences</button>
        </div>
      </div>
    </section>}

    <dialog ref={dialog} id="cookie-preferences-dialog" aria-labelledby="cookie-dialog-title" aria-describedby="cookie-dialog-description" className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-gray-200 bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-gray-950/50">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-dialog-title" className="text-xl font-semibold">Cookie preferences</h2>
          <button autoFocus onClick={() => dialog.current?.close()} aria-label="Close cookie preferences" className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl text-gray-600 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600"><span aria-hidden="true">×</span></button>
        </div>
        <p id="cookie-dialog-description" className="mt-3 text-sm leading-6 text-gray-600">Choose whether to allow optional Google Analytics. You can browse and use retailer links with analytics off.</p>
        <label className="mt-6 flex min-h-[72px] cursor-pointer items-center justify-between gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <span><span className="block font-semibold">Analytics</span><span id="analytics-description" className="mt-1 block text-sm leading-6 text-gray-600">Measures visits and retailer-link clicks. Off unless you accept.</span></span>
          <span className="relative flex h-11 w-11 shrink-0 items-center">
            <input type="checkbox" role="switch" aria-label="Analytics" aria-describedby="analytics-description" checked={analytics} onChange={event => setAnalytics(event.target.checked)} className="peer sr-only" />
            <span aria-hidden="true" className="h-6 w-11 rounded-full bg-gray-400 transition-colors after:absolute after:left-1 after:top-3.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-gray-900 peer-checked:after:translate-x-5 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-amber-600" />
          </span>
        </label>
        <p className="mt-4 text-sm leading-6 text-gray-600">You can change your choice anytime using Cookie preferences at the bottom of every page. <a href="/privacy" className="rounded font-medium text-gray-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600">Privacy and cookies</a></p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={() => choose(true)} className={buttonClass}>Accept</button>
          <button onClick={() => choose(false)} className={buttonClass}>Reject</button>
          <button onClick={() => choose(analytics)} className={`${buttonClass} col-span-2 !border-gray-900 !bg-gray-900 !text-white hover:!bg-gray-800`}>Save preferences</button>
        </div>
      </div>
    </dialog>
  </>
}
