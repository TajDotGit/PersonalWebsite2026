import { motion } from 'framer-motion'
import Navbar        from '../components/Navbar'
import Footer        from '../components/Footer'
import WorkTimeline  from '../components/WorkTimeline'
import WorkProjects  from '../components/WorkProjects'
import { FadeUp }   from '../components/FadeUp'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y:       0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y:       -8,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export default function Work() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <main className="pt-16 md:pt-20">

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <section className="pt-20 md:pt-28 pb-16 px-6 md:px-16 max-w-5xl mx-auto">
          <FadeUp>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary mb-6 leading-tight">
              The Record.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-body text-base md:text-lg text-text-muted mb-12">
              Every role. Every build. Every step toward the goal.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            {/* Gold gradient rule — transparent → gold → transparent */}
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgb(var(--color-accent)), transparent)',
              }}
            />
          </FadeUp>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section className="pb-16 md:pb-24 px-6 md:px-16 max-w-4xl mx-auto">
          <WorkTimeline />
        </section>

        {/* ── Projects ─────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-border">
          <WorkProjects />
        </section>

        {/* ── Closing Statement ─────────────────────────────────────────── */}
        <FadeUp>
          <div className="py-16 md:py-20 text-center px-6">
            <p className="font-display italic text-text-muted text-base md:text-lg tracking-wide">
              This is the foundation. The building continues.
            </p>
          </div>
        </FadeUp>

      </main>

      <Footer />
    </motion.div>
  )
}
