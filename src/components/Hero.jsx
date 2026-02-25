import { motion } from 'framer-motion'
import DragonBackground from './DragonBackground'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      aria-label="Hero"
    >
      {/* Layer 1: Abstract serpentine SVG — furthest back */}
      <DragonBackground />

      {/*
        Layer 2: Red radial glow — bottom-left corner.
        Offset 3s delay from the gold glow so they pulse independently,
        creating a slow shimmer rather than synchronized breathing.
      */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 15% 90%, rgb(var(--color-accent-red) / 0.05) 0%, transparent 65%)',
        }}
        animate={{
          scale:   [1, 1.08, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 11,
          ease:     'easeInOut',
          repeat:   Infinity,
          delay:    3,
        }}
      />

      {/*
        Layer 3: Gold radial pulse — center.
        Uses CSS vars so the color adapts correctly in light mode.
      */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 50%, rgb(var(--color-accent) / 0.08) 0%, rgb(var(--color-accent) / 0.02) 50%, transparent 75%)',
        }}
        animate={{
          scale:   [1, 1.12, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          ease:     'easeInOut',
          repeat:   Infinity,
        }}
      />

      {/* Layer 4: Hero content — z-10 sits above all background layers */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* H1 — the thesis statement */}
        <motion.h1
          className="font-display text-hero text-text-primary mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Build Different.
        </motion.h1>

        {/* Subheadline — one-liner thesis */}
        <motion.p
          className="font-body text-lg md:text-xl text-text-muted font-light max-w-xl mx-auto mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
        >
          Most people build what&apos;s asked. I build what&apos;s needed.
        </motion.p>

        {/* Descriptor — identity in a line */}
        <motion.p
          className="font-body text-xs text-text-muted tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.68 }}
        >
          Taj Ikhlaas — Product Analyst. Future Founder.
        </motion.p>
      </div>

      {/* Scroll indicator — appears last, lives at bottom of viewport */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="font-body text-[10px] text-text-muted tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
        >
          <path d="M2 4L7 9L12 4" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
