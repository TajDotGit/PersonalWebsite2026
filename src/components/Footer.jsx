import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FadeUp } from './FadeUp'

const socialLinks = [
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/tajammul-ikhlaas',
  },
  {
    label: 'Email',
    href:  'mailto:tajikhlaas@gmail.com',
  },
]

// Particle configs — defined at module level so they're stable across renders
const PARTICLES = [
  { id: 0,  char: '龍', x: -105, y: -90,  color: '#C9A84C', dur: 0.72 },
  { id: 1,  char: '●',  x:   95, y: -108, color: '#A01010', dur: 0.85 },
  { id: 2,  char: '—',  x:  -80, y:  100, color: '#C9A84C', dur: 0.68 },
  { id: 3,  char: '●',  x:  115, y:   75, color: '#A01010', dur: 0.90 },
  { id: 4,  char: '龍', x: -118, y:   20, color: '#C9A84C', dur: 0.75 },
  { id: 5,  char: '—',  x:   60, y: -115, color: '#A01010', dur: 0.62 },
  { id: 6,  char: '●',  x:  108, y:  -45, color: '#C9A84C', dur: 0.80 },
  { id: 7,  char: '龍', x:  -45, y:  112, color: '#A01010', dur: 0.70 },
  { id: 8,  char: '—',  x:   30, y:  118, color: '#C9A84C', dur: 0.88 },
  { id: 9,  char: '●',  x: -112, y:  -55, color: '#A01010', dur: 0.65 },
  { id: 10, char: '龍', x:   78, y:   95, color: '#C9A84C', dur: 0.78 },
  { id: 11, char: '—',  x:  -70, y: -105, color: '#A01010', dur: 0.83 },
]

export default function Footer() {
  const [exploding, setExploding]       = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const controls = useAnimation()

  async function handleDragonClick() {
    if (exploding) return
    setExploding(true)

    // Phase 1 — Ignition (0–0.3s): scale up, bright gold, red glow
    await controls.start({
      scale:  3,
      color:  '#E0BC6A',
      filter: 'drop-shadow(0 0 10px #A01010) drop-shadow(0 0 20px #A01010)',
      transition: { duration: 0.3, ease: 'easeOut' },
    })

    // Phase 2 — Explosion: spawn particles
    setShowParticles(true)

    // Phase 3 — Reset after 1.5s
    setTimeout(async () => {
      setShowParticles(false)
      await controls.start({
        scale:  1,
        color:  'rgba(201, 168, 76, 0.15)',
        filter: 'none',
        transition: { duration: 0.4, ease: 'easeInOut' },
      })
      setExploding(false)
    }, 1500)
  }

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-14">
        <FadeUp>
          {/* Top row: copyright + social links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <p className="font-body text-sm text-text-muted">
              © 2026 Taj Ikhlaas
            </p>

            <nav aria-label="Social and contact links">
              <ul className="flex items-center gap-6 list-none m-0 p-0">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-body text-sm text-text-muted hover:text-accent transition-colors duration-200 tracking-wide"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15 }}
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom tagline — centered, italic, very small */}
          <p className="font-display italic text-center text-xs text-text-muted/40 tracking-wide">
            Built with intention.
          </p>

          {/* Dragon Easter Egg — barely visible, no label, found by curiosity */}
          <div className="relative flex justify-center mt-3" style={{ height: '20px' }}>
            <motion.span
              animate={controls}
              initial={{ scale: 1, color: 'rgba(201, 168, 76, 0.15)', filter: 'none' }}
              onClick={handleDragonClick}
              className="font-body text-[11px] cursor-default select-none"
              style={{ lineHeight: 1 }}
              aria-hidden="true"
            >
              龍
            </motion.span>

            {/* Particles — pointer-events none so they don't block footer links */}
            {showParticles && PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className="absolute font-body pointer-events-none select-none"
                style={{
                  fontSize:  p.char === '龍' ? '9px' : '8px',
                  color:     p.color,
                  top:       '50%',
                  left:      '50%',
                  transform: 'translate(-50%, -50%)',
                  lineHeight: 1,
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0 }}
                transition={{ duration: p.dur, ease: 'easeOut' }}
              >
                {p.char}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
