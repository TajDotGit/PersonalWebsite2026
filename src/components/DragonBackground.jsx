import { motion } from 'framer-motion'

/**
 * DragonBackground — abstract serpentine SVG element for the hero.
 *
 * Three large cubic-bezier paths suggest the shadow of coiling dragon
 * forms rather than a literal illustration. Stroke-only, sub-5% opacity.
 * A slow Framer Motion breathing animation gives the background depth.
 *
 * Positioned absolute behind all hero content (no z-index, sits under z-10 content).
 * pointer-events-none so it never intercepts clicks.
 */
export default function DragonBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          animate={{
            scale:  [1, 1.015, 1],
            rotate: [0, 0.2, 0],
          }}
          transition={{
            duration: 12,
            ease:     'easeInOut',
            repeat:   Infinity,
          }}
          style={{ transformOrigin: '720px 450px' }}
        >
          {/*
            Path 1 — Primary serpentine body (gold)
            A long S-curve from upper-left sweeping down and across, suggesting
            the spine of a massive coiling form.
          */}
          <path
            d="M -80,180 C 200,40 180,420 480,260 S 820,20 1040,310 S 1260,580 1540,380"
            stroke="rgb(var(--color-accent))"
            strokeWidth="1.5"
            opacity="0.05"
          />

          {/*
            Path 2 — Secondary coil (gold, thinner)
            A second serpentine body crossing behind the first, tighter loops
            suggesting depth and layering.
          */}
          <path
            d="M 160,-60 C 320,160 220,380 440,520 S 680,680 900,460 S 1120,240 1360,500 S 1500,720 1600,580"
            stroke="rgb(var(--color-accent))"
            strokeWidth="1"
            opacity="0.04"
          />

          {/*
            Path 3 — Crossing arc (crimson)
            A single long diagonal arc crossing the gold paths — suggests
            the shadow of a second serpent, or a wing arc. The red creates
            tension against the gold without competing.
          */}
          <path
            d="M -160,760 C 120,640 340,180 640,320 C 860,420 1080,80 1440,40"
            stroke="rgb(var(--color-accent-red))"
            strokeWidth="1"
            opacity="0.04"
          />
        </motion.g>
      </svg>
    </div>
  )
}
