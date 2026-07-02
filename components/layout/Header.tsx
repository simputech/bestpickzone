'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type NavItem = {
  label: string
  href?: string
  children?: { href: string; label: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Books',
    children: [
      { href: '/books', label: 'All Books' },
      { href: '/books/authors', label: 'By Author' },
      { href: '/books/genre-fiction', label: 'Genre Fiction' },
      { href: '/books/self-help', label: 'Self-Help' },
      { href: '/books/kids-and-ya', label: 'Kids & YA' },
      { href: '/books/reader-picks', label: 'Reader Picks' },
    ],
  },
  { href: '/coffee', label: 'Coffee' },
  { href: '/beauty', label: 'Beauty' },
  { href: '/wfh', label: 'WFH' },
  { href: '/home-kitchen', label: 'Home & Kitchen' },
  {
    label: 'More',
    children: [
      { href: '/tech', label: 'Tech' },
      { href: '/finance-software', label: 'Finance Software' },
      { href: '/health-fitness', label: 'Health & Fitness' },
    ],
  },
]

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
        setMenuOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function closeAll() {
    setOpenDropdown(null)
    setMenuOpen(false)
    setMobileSection(null)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b-2 border-yellow-400 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="BestPickZone home" onClick={closeAll}>
          <span
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif', color: '#1a1a2e' }}
          >
            Best<span style={{ color: '#f59e0b' }}>Pick</span>Zone
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                    openDropdown === item.label
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <Chevron open={openDropdown === item.label} />
                </button>
                <div
                  className={`absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 ${
                    openDropdown === item.label ? 'block' : 'hidden'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                      onClick={closeAll}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-sm font-semibold text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 px-3 py-2 rounded-lg transition-colors"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-gray-700"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="lg:hidden border-t-2 border-yellow-400 bg-white px-4 py-3 max-h-[70vh] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors min-h-[44px] flex items-center justify-between"
                      onClick={() =>
                        setMobileSection(mobileSection === item.label ? null : item.label)
                      }
                      aria-expanded={mobileSection === item.label}
                    >
                      {item.label}
                      <Chevron open={mobileSection === item.label} />
                    </button>
                    {mobileSection === item.label && (
                      <ul className="ml-3 border-l-2 border-yellow-200 pl-2 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2.5 px-4 rounded-xl text-sm font-medium text-gray-600 hover:bg-yellow-50 hover:text-yellow-700 transition-colors min-h-[44px] flex items-center"
                              onClick={closeAll}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block py-3 px-4 rounded-xl text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors min-h-[44px] flex items-center"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
