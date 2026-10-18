export const NAV_OFFSET = 76

export function scrollToId(id, offset = NAV_OFFSET) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
