import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO_STATS } from '../data/site.js'
import { heroFloatImage, heroImage } from '../data/destinations.js'
import { scrollToId } from '../lib/scroll.js'
import { IconArrowRight } from './icons.jsx'

const TITLE = [
  [{ text: 'Jelajahi' }, { text: 'Keindahan' }],
  [{ text: '&' }, { text: 'Budaya' }, { text: 'Banten', accent: 'text-sand-400' }],
]

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-sea-950 text-white"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={heroImage}
          alt="Lanskap pesisir Banten dengan air jernih dan pasir putih saat fajar"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sea-950/85 via-sea-950/40 to-sea-950/95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_12%_18%,rgba(7,37,47,0.8),transparent_70%)]" />
      <div className="grain absolute inset-0 -z-10 opacity-45" />

      <div
        style={{ y: contentY, opacity: contentOpacity }}
        className="shell relative flex min-h-[100svh] flex-col justify-center pb-28 pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center gap-4"
        >
          <span className="eyebrow text-sea-200">Portal Pariwisata Provinsi Banten</span>
          <span className="hidden h-px flex-1 bg-white/20 sm:block" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
            06°06′ S · 106°09′ E
          </span>
        </motion.div>

        <h1 className="display-title mt-8 max-w-5xl text-[clamp(2.6rem,7.4vw,6.4rem)] leading-[0.97]">
          {TITLE.map((line, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden pb-[0.06em]">
              {line.map((word, wordIndex) => (
                <motion.span
                  key={word.text}
                  className={`inline-block ${word.accent ?? ''}`}
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    delay: 0.18 + (lineIndex * line.length + wordIndex) * 0.09,
                    duration: 0.95,
                    ease: EASE,
                  }}
                >
                  {word.text}&nbsp;
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.8, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Dari ombak Pantai Anyer hingga rumah bambu Baduy, dari mercusuar Banten Lama
          hingga aroma Sate Bandeng yang baru diangkat dari arang — satu portal untuk
          merancang perjalanan terbaikmu di Banten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.86, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button type="button" className="btn-primary" onClick={() => scrollToId('destinasi')}>
            Mulai Berkelana
            <IconArrowRight />
          </button>
          <button
            type="button"
            className="btn-ghost border-white/45 text-white hover:bg-white hover:text-sea-950"
            onClick={() => scrollToId('profil')}
          >
            Kenali Banten
          </button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, duration: 0.8, ease: EASE }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
        className="absolute right-10 top-1/2 hidden w-56 -translate-y-1/2 xl:block"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-sea-950/50"
        >
          <img
            src={heroFloatImage}
            alt="Matahari terbenam di pesisir Banten"
            className="h-40 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="bg-sea-950/85 px-4 py-3 backdrop-blur">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.24em] text-sand-400">
              Sorotan Pekan Ini
            </span>
            <span className="mt-1 block text-sm font-semibold text-white">
              Sunset Pantai Anyer
            </span>
          </figcaption>
        </motion.div>
      </motion.figure>

      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 sm:right-10 md:flex">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-white/60">
          Gulir
        </span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-5 bg-sand-400"
            animate={{ y: [-22, 60] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </div>
    </section>
  )
}
