const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="currentColor" opacity="0.12" />
      <circle cx="44" cy="21" r="7.5" fill="#efc35c" />
      <path
        d="M7 41c5.5-4.5 11-4.5 16.5 0s11 4.5 16.5 0 11-4.5 16.5 0"
        stroke="#43aecd"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M7 52c5.5-4.5 11-4.5 16.5 0s11 4.5 16.5 0 11-4.5 16.5 0"
        stroke="#2fae7d"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function IconArrowUpRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function IconArrowUp({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  )
}

export function IconMenu({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  )
}

export function IconClose({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function IconPin({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function IconMail({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconPhone({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 3.5 5.7 2.5 2.5 0 0 1 6 3Z" />
    </svg>
  )
}

export function IconClock({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  )
}

export function IconCheck({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function IconHeritage({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 21h16" />
      <path d="M6 21V10" />
      <path d="M12 21V7" />
      <path d="M18 21V10" />
      <path d="M4 10 12 4l8 6" />
    </svg>
  )
}

export function IconPhilosophy({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M5 19c4-1 6-3.5 7-7 .9-3 3-5.6 7-7-1 4-1.6 7.4-3.6 10.2C13.6 17.2 10.4 18.6 5 19Z" />
      <path d="M5 19c1.5-2.6 3.2-4.6 5.4-6.4" />
    </svg>
  )
}

export function IconGeography({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m3 19 6-10 4 6 2.5-4L21 19Z" />
      <circle cx="17" cy="6" r="2.4" />
    </svg>
  )
}

export function IconInstagram({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconX({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.6 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L2 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.1h1.7L7.6 4.8H5.8l10.7 14.3Z" />
    </svg>
  )
}

export function IconYoutube({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4.5" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" />
    </svg>
  )
}

export function IconFacebook({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5h2.5V5.4h-2.7c-2.3 0-3.8 1.5-3.8 3.9v1.6H8v3.1h2.5V21h3.3v-7h2.4l.5-3.1h-2.9V9.7c0-.8.3-1.2 1.2-1.2Z" />
    </svg>
  )
}
