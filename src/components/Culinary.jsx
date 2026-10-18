import { CULINARY } from '../data/culinary.js'
import { CULTURE, MARQUEE_WORDS } from '../data/site.js'
import { sectionTexture } from '../data/destinations.js'
import { scrollToId } from '../lib/scroll.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { IconArrowUpRight } from './icons.jsx'

export default function Culinary() {
  return (
    <section
      id="kuliner"
      className="grain relative scroll-mt-20 overflow-hidden bg-charcoal-950 py-24 text-white sm:py-32"
    >
      <img
        src={sectionTexture}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/85 to-charcoal-950" />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            kicker="Kuliner & Budaya"
            tone="dark"
            title="Rasa dan jiwa Banten"
            description="Warisan dapur kesultanan, kue yang selalu hadir di hajatan, serta seni rakyat yang membuat ruas jalan selalu ramai."
          />
          <Reveal delay={0.12}>
            <button
              type="button"
              className="btn-ghost border-white/35 text-white hover:bg-white hover:text-charcoal-950"
              onClick={() => scrollToId('kontak')}
            >
              Ajukan Paket Kuliner
              <IconArrowUpRight />
            </button>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-white/10 bg-white/[0.03] py-5">
        <div className="flex w-max animate-marquee items-center">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-8 px-8 font-display text-xl text-white/40 sm:text-2xl"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
            </span>
          ))}
        </div>
      </div>

      <div className="shell relative mt-14">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CULINARY.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-sand-400/60 hover:bg-white/[0.07]">
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-transparent" />
                  <span className="absolute left-4 top-4 font-display text-sm font-semibold tracking-[0.2em] text-sand-400">
                    {item.index}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{item.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors duration-500 group-hover:border-sand-400/50 group-hover:text-sand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sand-400">
                Budaya Lokal
              </h3>
              <span className="h-px flex-1 bg-white/15" />
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {CULTURE.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-charcoal-900/70 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/30">
                  <span className="absolute right-6 top-4 font-display text-5xl font-semibold text-white/5 transition-colors duration-500 group-hover:text-sand-400/20">
                    {item.index}
                  </span>
                  <span className="block h-px w-14 bg-sand-400/60 transition-all duration-500 group-hover:w-24 group-hover:bg-sand-400" />
                  <h4 className="mt-6 font-display text-2xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
