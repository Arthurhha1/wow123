import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { scrollToTop } from '../lib/scroll.js'
import { IconArrowUp } from './icons.jsx'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 700))

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sea-950 text-white shadow-xl shadow-sea-950/30 transition-colors hover:bg-sand-400 hover:text-[#231703] sm:right-8"
        >
          <IconArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
