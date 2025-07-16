'use client'

import React, { useState } from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo, MagnifyingGlass, TwitterLogo } from 'phosphor-react'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const menuItems = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
]

const icon = [
  { label: 'Github', icon: GithubLogo, href: '' },
  { label: 'Linkedin', icon: LinkedinLogo, href: '' },
  { label: 'Instagram', icon: InstagramLogo, href: '' },
  { label: 'X', icon: TwitterLogo, href: '' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('navbar')

  const brutalistStyle =
    'border-2 border-black bg-background text-foreground shadow-[4px_4px_0px_black] rounded-none'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full fixed top-0 left-0 z-[90] bg-background border-b border-black"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 relative">
        {/* Left Side: Language Selector */}
        <LanguageSelector />

        {/* Center: Brand Title */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          designeer
        </motion.h1>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-3 relative">
          <Button
            type="button"
            aria-label="Search"
            variant="outline"
            className="rounded-none border-2 border-black text-foreground font-bold shadow-[2px_2px_0px_black] hover:bg-primary hover:text-background transition"
          >
            <MagnifyingGlass size={18} weight="bold" />
          </Button>

          {/* Menu Button */}
          <div className="relative">
            <Button
              type="button"
              variant="outline"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-none px-4 py-2 border-2 group border-black text-sm font-bold text-foreground shadow-[2px_2px_0px_black] hover:bg-primary hover:text-white transition"
            >
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline uppercase tracking-wide">{t('menu')}</span>
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className="w-5 h-[2px] bg-foreground group-hover:bg-background" />
                  <div className="w-3 h-[2px] bg-foreground group-hover:bg-background" />
                </div>
              </div>
            </Button>

            {/* Brutalist Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`absolute top-full right-0 mt-2 w-64 origin-top-right sm:w-72 ${brutalistStyle} p-2 z-[60]`}
                >
                  {/* Daftar Navigasi Utama */}
                  <ul className="flex flex-col text-sm font-bold sm:text-base">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block p-3 transition-colors duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground"
                        >
                          {t(`menuItems.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Pemisah Visual */}
                  <div className="my-2 border-t-2 border-foreground" />

                  {/* Bagian Ikon Sosial */}
                  <div className="px-2 pb-2">
                    <h3 className="mb-2 px-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {t('followUs')}
                    </h3>
                    <ul className="flex items-center justify-around">
                      {icon.map((item) => {
                        const IconComponent = item.icon

                        return (
                          <li key={item.label}>
                            <motion.div
                              whileHover={{ y: -3, scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <Link
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-2 text-foreground border-2 border-black shadow-[2px_2px_0_black] rounded-none transition-all duration-200 hover:bg-secondary hover:text-background"
                                aria-label={item.label}
                              >
                                <IconComponent size={24} weight="regular" />
                              </Link>
                            </motion.div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
