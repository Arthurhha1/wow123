import { motion } from 'framer-motion'
import { ABOUT_PILLARS, TIMELINE } from '../data/site.js'
import { aboutImages } from '../data/destinations.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { PILLAR_ICONS } from './iconMaps.js'

export default function About() {
  return (
    <section id="profil" className="relative scroll-mt-20 overflow-hidden bg-paper py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-palm-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-16 h-72 w-72 rounded-full bg-sea-100 blur-3xl"
      />

      <div className="shell relative">
        <SectionHeading
          index="01"
          kicker="Profil Banten"
          title="Jejak sang jawara di ujung barat Jawa"
          description="Sejarah panjang kesultanan, filosofi hidup yang dijaga turun-temurun, dan bentang alam yang membuat Banten berdiri beda dari provinsi mana pun."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="relative overflow-hidden rounded-[2rem] bg-sea-100 shadow-xl shadow-sea-950/10">
                <img
                  src={aboutImages.tree}
                  alt="Pohon raksasa berakar kuat melambangkan akar sejarah Banten"
                  className="h-[26rem] w-full object-cover sm:h-[32rem]"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sea-950/90 to-transparent p-6 pt-16 text-white">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
                    Filosofi
                  </span>
                  <p className="mt-2 font-display text-xl leading-snug">
                    “Akar yang kuat membuat pohon bertahan menghadap angin.”
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-5 flex items-stretch gap-4 overflow-hidden rounded-3xl border border-ink/10 bg-white p-4">
                <img
                  src={aboutImages.hills}
                  alt="Pegunungan berkabut di batas barat Banten"
                  className="h-24 w-28 shrink-0 rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-sea-600">
                    Geografi
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    Pesisir, hutan tropis, dan gunung api berjajar dalam satu provinsi.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                Banten adalah kisah pelabuhan yang tak pernah berhenti berlayar — dari bandar
                niaga abad ke-16 hingga gerbang wisata masa kini.
              </p>
            </Reveal>

            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {ABOUT_PILLARS.map((pillar, index) => {
                const Icon = PILLAR_ICONS[pillar.icon]
                return (
                  <Reveal key={pillar.title} delay={0.06 * index}>
                    <article className="group flex gap-6 py-7">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sea-950 text-sea-300 transition-colors duration-500 group-hover:bg-sand-400 group-hover:text-[#231703]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-ink">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-[0.97rem] leading-relaxed text-ink/70">
                          {pillar.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
                Garis Waktu
              </h3>
              <motion.span
                className="h-px flex-1 origin-left bg-ink/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {TIMELINE.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.07}>
                <li className="group relative border-t-2 border-sea-200 pt-5 transition-colors duration-500 hover:border-sand-400">
                  <span className="font-display text-3xl font-semibold text-sea-700 transition-colors duration-500 group-hover:text-sand-500">
                    {item.year}
                  </span>
                  <h4 className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
