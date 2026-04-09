'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/books', label: 'All Books' },
  { href: '/books/authors', label: 'By Author' },
  { href: '/books/genre-fiction', label: 'Genre Fiction' },
  { href: '/books/self-help', label: 'Self-Help' },
  { href: '/books/kids-and-ya', label: 'Kids & YA' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-yellow-400 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="BestPickZone home">
          <span
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif', color: '#1a1a2e' }}
          >
            Best<span style={{ color: '#f59e0b' }}>Pick</span>Zone
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 px-3 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
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
          className="lg:hidden border-t-2 border-yellow-400 bg-white px-4 py-3"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 px-4 rounded-xl text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors min-h-[44px] flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
