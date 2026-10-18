import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { CONTACT, DARK_SECTIONS, NAV_IDS, NAV_LINKS, SOCIALS } from '../data/site.js'
import useActiveSection from '../hooks/useActiveSection.js'
import { scrollToId } from '../lib/scroll.js'
import { IconArrowUpRight, IconClose, IconMenu, Logo } from './icons.jsx'
import { SOCIAL_ICONS } from './iconMaps.js'

export default function Navbar() {
  const active = useActiveSection(NAV_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 32))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overDarkSection = DARK_SECTIONS.includes(active)
  const glassDark = scrolled && overDarkSection && !open
  const isTransparent = !scrolled && !open

  const headerTone = open
    ? 'bg-paper/90 text-ink border-ink/10'
    : glassDark
      ? 'bg-charcoal-950/85 text-white border-white/10'
      : isTransparent
        ? 'bg-transparent text-white border-transparent'
        : 'bg-paper/85 text-ink border-ink/10'

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,color] duration-500 ${headerTone}`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => go('beranda')}
            className="flex items-center gap-3 text-left"
            aria-label="Pesona Banten — kembali ke beranda"
          >
            <Logo className="h-10 w-10" />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-tight">
                Pesona Banten
              </span>
              <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] opacity-60">
                Tourism Portal
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-sand-400"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go('kontak')}
              className="hidden items-center gap-2 rounded-full bg-sand-400 px-5 py-2.5 text-sm font-bold text-[#231703] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Rencanakan Trip
              <IconArrowUpRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition-transform duration-300 hover:rotate-90 lg:hidden"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {open ? <IconClose /> : <IconMenu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-paper lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28 sm:px-10">
              <nav className="flex flex-col gap-2" aria-label="Navigasi seluler">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => go(link.id)}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.06,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-baseline justify-between border-b border-ink/10 py-4 text-left"
                  >
                    <span className="font-display text-[clamp(2rem,9vw,3rem)] font-semibold tracking-tight transition-colors group-hover:text-sea-600">
                      {link.label}
                    </span>
                    <span className="text-xs font-bold tracking-[0.25em] text-ink/40">
                      0{index + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="space-y-4"
              >
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="block text-sm font-semibold text-ink/70"
                >
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block text-sm font-semibold text-ink/70">
                  {CONTACT.email}
                </a>
                <div className="flex gap-3 pt-2">
                  {SOCIALS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.name]
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-sea-600 hover:bg-sea-600 hover:text-white"
                      >
                        <Icon />
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
