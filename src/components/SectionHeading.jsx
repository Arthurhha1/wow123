import Reveal from './Reveal.jsx'

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  tone = 'light',
  align = 'left',
}) {
  const isDark = tone === 'dark'

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <span className={`eyebrow ${isDark ? 'text-sand-400' : 'text-sea-600'}`}>
          {index} — {kicker}
        </span>
      </Reveal>

      <Reveal delay={0.07}>
        <h2
          className={`display-title mt-6 text-[clamp(2.1rem,5vw,3.9rem)] ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isDark ? 'text-white/65' : 'text-ink/70'
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
