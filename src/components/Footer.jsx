import { CONTACT, NAV_LINKS, SOCIALS } from '../data/site.js'
import { scrollToId, scrollToTop } from '../lib/scroll.js'
import { ICON_MAP } from './iconMaps.js'
import { Logo } from './icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-charcoal-950 text-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-3 text-left"
            >
              <Logo className="h-11 w-11" />
              <span>
                <span className="block font-display text-xl font-semibold">Pesona Banten</span>
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/45">
                  Portal Pariwisata Daerah
                </span>
              </span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Portal resmi promosi destinasi, budaya, dan kuliner Provinsi Banten — dirancang
              untuk membantumu menemukan pesona barat Jawa dalam satu perjalanan.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Navigasi footer">
            <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
              Jelajahi
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(link.id)}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-sand-400">
              Pusat Informasi
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>{CONTACT.address}</li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = ICON_MAP[social.name.toLowerCase()] ?? ICON_MAP.social
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-sand-400 hover:text-sand-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Pesona Banten — dibangun sebagai purwarupa portal pariwisata daerah.
          </p>
          <p>
            Visual: Dokumentasi Lokal · Peta: OpenStreetMap · Bahasa: Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
