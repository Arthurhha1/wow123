import { CONTACT, SOCIALS } from '../data/site.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { ICON_MAP } from './iconMaps.js'
import { IconArrowUpRight } from './icons.jsx'

export default function Contact() {
  const infoItems = [
    { icon: 'pin', label: 'Alamat', value: CONTACT.address },
    { icon: 'phone', label: 'Telepon', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    { icon: 'mail', label: 'Surel', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: 'clock', label: 'Jam Layanan', value: CONTACT.hours },
  ]

  return (
    <section
      id="kontak"
      className="relative scroll-mt-20 overflow-hidden bg-charcoal-950 pb-20 pt-24 text-white sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 h-[26rem] w-[26rem] rounded-full bg-sea-900/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-palm-700/25 blur-3xl"
      />

      <div className="shell relative">
        <SectionHeading
          index="04"
          kicker="Kontak & Pemandu"
          tone="dark"
          title="Hubungi kami untuk perjalananmu"
          description="Hubungi Pusat Informasi Pariwisata Banten melalui telepon atau kunjungi langsung — tim pemandu kami siap membantu menyusun rute dan agenda terbaik untukmu."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
                {CONTACT.name}
              </span>
              <ul className="mt-5 space-y-5">
                {infoItems.map((item) => {
                  const Icon = ICON_MAP[item.icon]
                  const content = (
                    <span className="flex gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sea-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/45">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-white/85">
                          {item.value}
                        </span>
                      </span>
                    </span>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block transition-colors hover:text-sand-300">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sea-900 to-charcoal-900 p-6 sm:p-7">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sea-300">
                Ikuti Perjalanan Kami
              </span>
              <div className="mt-5 flex flex-wrap gap-3">
                {SOCIALS.map((social) => {
                  const Icon = ICON_MAP[social.name.toLowerCase()] ?? ICON_MAP.social
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-sand-400 hover:text-sand-300"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  )
                })}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Dapatkan agenda festival, promo tiket, dan rute baru setiap pekan.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-white/10">
            <iframe
              title="Peta lokasi Pusat Informasi Pariwisata Banten"
              src={CONTACT.mapEmbed}
              loading="lazy"
              className="h-[22rem] w-full border-0 grayscale-[0.35] contrast-[1.05] sm:h-[26rem]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-charcoal-950/95 to-transparent p-5 sm:p-6">
              <div>
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
                  Peta Lokasi
                </span>
                <p className="mt-1 max-w-md text-sm text-white/80">{CONTACT.address}</p>
              </div>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition-transform duration-300 hover:-translate-y-1"
              >
                Buka di Google Maps
                <IconArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
