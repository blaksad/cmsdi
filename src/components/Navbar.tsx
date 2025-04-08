'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type NavItem = {
  name: string
  path?: string
  subItems?: { name: string; path: string }[]
}

const navItems: NavItem[] = [
  { name: 'Accueil', path: '/' },
  {
    name: 'Solutions',
    subItems: [
      { name: 'Urbanisme', path: '/solutions#urbanisme' },
      { name: 'SIG', path: '/solutions#sig' },
      { name: 'Cimetière', path: '/solutions#cimetiere' },
      { name: 'Chasse', path: '/solutions#chasse' },
      { name: 'Bâtiment', path: '/solutions#batiment' },
    ],
  },
  {
    name: 'Services',
    subItems: [
      { name: 'Installation', path: '/services#installation' },
      { name: 'Hébergement', path: '/services#hebergement' },
      { name: 'Développement', path: '/services#developpement' },
      { name: 'Formation', path: '/services#formation' },
      { name: 'Intégration', path: '/services#integration' },
    ],
  },
  {
    name: 'Société',
    subItems: [
      { name: 'Notre entreprise', path: '/societe#entreprise' },
      { name: 'Nos partenaires', path: '/societe#partenaires' },
      { name: 'Nos références', path: '/societe#references' },
    ],
  },
  { name: 'Support', path: '/support' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  // Référence pour toute la navbar (pour détecter les clics à l'extérieur)
  const navRef = useRef<HTMLDivElement>(null)
  // Référence pour la liste de navigation et pour chaque item
  const navListRef = useRef<HTMLUListElement>(null)
  const navItemRefs = useRef<Record<string, HTMLElement | null>>({})

  // Ferme les sous-menus si clic en dehors de la navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubMenu(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Mise à jour de la barre indicatrice selon l'item actif
  useEffect(() => {
    const updateIndicator = () => {
      if (!navListRef.current) return

      const activeItem = navItems.find((item) => {
        if (item.path) return pathname === item.path
        if (item.name === 'Solutions' && pathname.startsWith('/solutions')) return true
        if (item.name === 'Services' && pathname.startsWith('/services')) return true
        if (item.name === 'Société' && pathname.startsWith('/societe')) return true
        return false
      })

      if (activeItem && navItemRefs.current[activeItem.name] && navListRef.current) {
        const containerRect = navListRef.current.getBoundingClientRect()
        const activeRect = navItemRefs.current[activeItem.name]!.getBoundingClientRect()
        setIndicatorStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
        })
      } else {
        setIndicatorStyle({ left: 0, width: 0 })
      }
    }
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [pathname])

  const toggleSubMenu = (itemName: string) => {
    setOpenSubMenu((prev) => (prev === itemName ? null : itemName))
  }

  const isActive = (item: NavItem): boolean => {
    if (item.path) {
      return pathname === item.path
    } else {
      if (item.name === 'Solutions' && pathname.startsWith('/solutions')) return true
      if (item.name === 'Services' && pathname.startsWith('/services')) return true
      if (item.name === 'Société' && pathname.startsWith('/societe')) return true
      return false
    }
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-md py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Logo et nom */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900">CMSDI</span>
        </Link>

        {/* Menu Desktop Centré */}
        <div className="hidden md:block flex-1">
          <div className="relative">
            <ul
              ref={navListRef}
              className="flex justify-center gap-8 text-sm font-medium text-gray-700 relative"
            >
              {navItems.map((item) => {
                const active = isActive(item)
                const hasSubMenu = !!item.subItems
                return (
                  <li key={item.name} className="relative">
                    {hasSubMenu ? (
                      <>
                        <button
                          ref={(el) => {
                            navItemRefs.current[item.name] = el
                          }}
                          onClick={() => toggleSubMenu(item.name)}
                          className={`transition-colors hover:text-black ${
                            active ? 'text-black' : ''
                          }`}
                        >
                          {item.name}
                        </button>
                        {/* Sous-menu avec fond opaque, affiché par clic */}
                        <ul
                          className={`absolute left-0 mt-2 bg-white shadow-md rounded py-2 w-48 transition-opacity duration-300 ${
                            openSubMenu === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                        >
                          {item.subItems!.map((sub) => (
                            <li key={sub.name} className="border-b last:border-none border-gray-200">
                              <Link
                                href={sub.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setOpenSubMenu(null)}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        ref={(el) => {
                          navItemRefs.current[item.name] = el
                        }}
                        href={item.path ?? '#'}
                        className={`transition-colors hover:text-black ${
                          active ? 'text-black underline' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                )
              })}
              {/* Barre indicatrice dynamique */}
              <span
                className="absolute bottom-0 h-1 bg-indigo-600 rounded transition-all duration-300"
                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              />
            </ul>
          </div>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-gray-900" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-900" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg py-4">
          <ul className="flex flex-col gap-4 text-base font-medium text-gray-700">
            {navItems.map((item) => {
              const active = isActive(item)
              const hasSubMenu = !!item.subItems
              return (
                <li key={item.name} className="relative">
                  {hasSubMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleSubMenu(item.name)}
                        className={`w-full text-left transition hover:text-black ${
                          active ? 'text-black underline' : ''
                        }`}
                      >
                        {item.name}
                      </button>
                      {openSubMenu === item.name && (
                        <ul className="mt-2 pl-4 border-l border-gray-300 space-y-2">
                          {item.subItems!.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.path}
                                className="block transition hover:text-black"
                                onClick={() => {
                                  setOpenSubMenu(null)
                                  setMobileMenuOpen(false)
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path ?? '#'}
                      className={`block transition hover:text-black ${
                        active ? 'text-black underline' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
