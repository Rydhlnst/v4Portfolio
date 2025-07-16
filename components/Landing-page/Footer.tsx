'use client'

import Link from 'next/link'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo } from 'phosphor-react'

const links = [
  { title: 'Features', href: '#' },
  { title: 'Solution', href: '#' },
  { title: 'Customers', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Help', href: '#' },
  { title: 'About', href: '#' },
]

export default function FooterSection() {
  return (
    <footer className="border-t-2 border-black bg-background py-16 md:py-24 text-foreground">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Brand Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight shadow-[4px_4px_0px_black] inline-block px-4 py-2 border-2 border-black bg-white">
          Designeer
        </h2>

        {/* Menu Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wide">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="border-2 border-black px-4 py-2 bg-white text-black hover:bg-primary hover:text-white shadow-[3px_3px_0px_black] transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { label: 'Twitter', href: '#', icon: TwitterLogo },
            { label: 'LinkedIn', href: '#', icon: LinkedinLogo },
            { label: 'Facebook', href: '#', icon: FacebookLogo },
            { label: 'Instagram', href: '#', icon: InstagramLogo },
            { label: 'TikTok', href: '#', icon: TiktokLogo },
          ].map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="border-2 border-black bg-white p-2 rounded shadow-[3px_3px_0px_black] hover:bg-secondary hover:text-background transition"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Designeer, All rights reserved.
        </p>
      </div>
    </footer>
  )
}
