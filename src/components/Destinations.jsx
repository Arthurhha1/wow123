import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DESTINATIONS, DESTINATION_FILTERS } from '../data/destinations.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { IconArrowUpRight, IconCheck, IconClose, IconPin } from './icons.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function Destinations() {
  const [filter, setFilter] = useState('Semua')
  const [selected, setSelected] = useState(null)

  const visible =
    filter === 'Semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === filter)

  useEffect(() => {
    if (!selected) return undefined

    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  const openCard = (item) => setSelected(item)

  return (
    <section
      id="destinasi"
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            kicker="Destinasi Unggulan"
            title="Enam alasan untuk segera berangkat"
            description="Pantai, desa adat, hutan nasional, hingga candi laut — disusun dalam satu peta perjalanan yang mudah dipindai."
          />

          <Reveal delay={0.12} className="self-start lg:self-end">
            <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-paper px-5 py-3">
              <span className="font-display text-2xl font-semibold text-sea-700">
                {String(visible.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                {filter === 'Semua' ? 'Destinasi' : `Kategori ${filter}`}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {DESTINATION_FILTERS.map((item) => {
            const isActive = filter === item
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive ? 'text-sea-950' : 'text-ink/55 hover:text-ink'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-sand-400"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                ) : null}
                <span className="relative">{item}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          layout
          className="mt-8 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[13.5rem] sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: EASE }}
                role="button"
                tabIndex={0}
                aria-label={`Lihat detail ${item.name}`}
                onClick={() => openCard(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openCard(item)
                  }
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-[1.6rem] bg-sea-950 outline-none ring-sea-500/0 transition-shadow duration-500 hover:ring-4 focus-visible:ring-4 focus-visible:ring-sand-400 ${
                  filter === 'Semua' ? item.span : 'sm:col-span-1 lg:col-span-1'
                }`}
              >
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.location}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-charcoal-950/10 transition-all duration-500 group-hover:from-charcoal-950/95 group-hover:via-charcoal-950/55" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold text-white backdrop-blur transition-colors duration-500 group-hover:border-sand-400/70 group-hover:text-sand-300">
                    <IconPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-sea-950">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
                    {item.tagline}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-white transition-transform duration-500 group-hover:-translate-y-1 sm:text-[1.75rem]">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/0 transition-all duration-500 group-hover:text-white/80">
                    <span className="h-px w-6 bg-sand-400" />
                    Lihat detail & tips perjalanan
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
            <motion.div
              className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative z-10 max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-[2rem]"
            >
              <div className="relative h-56 w-full overflow-hidden sm:h-72">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-transparent to-charcoal-950/30" />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Tutup detail"
                  className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-ink"
                >
                  <IconClose />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sand-400 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#231703]">
                    {selected.category} · {selected.location}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                    {selected.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-[1.02rem] leading-relaxed text-ink/75">
                  {selected.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selected.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 rounded-2xl bg-paper p-4 text-sm font-medium text-ink/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-palm-500 text-white">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-ink/10 p-4">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-sea-600">
                      Waktu Terbaik
                    </span>
                    <p className="mt-1 font-semibold text-ink">{selected.bestTime}</p>
                  </div>
                  <div className="rounded-2xl border border-ink/10 p-4">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-sea-600">
                      Durasi Ideal
                    </span>
                    <p className="mt-1 font-semibold text-ink">{selected.duration}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={selected.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Rute di Peta
                    <IconArrowUpRight />
                  </a>
                  <button
                    type="button"
                    className="btn-ghost border-ink/25 text-ink hover:bg-ink hover:text-white"
                    onClick={() => setSelected(null)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
