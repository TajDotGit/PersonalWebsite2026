import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

export default function SelectedWork() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto"
      aria-labelledby="focus-heading"
    >
      {/* Section header */}
      <FadeUp>
        <div className="mb-16">
          <h2
            id="focus-heading"
            className="font-display text-3xl md:text-5xl text-text-primary mb-5"
          >
            Current Focus
          </h2>
          <div className="w-10 h-px bg-accent" />
        </div>
      </FadeUp>

      {/* Featured project — editorial card with image */}
      <FadeUp delay={0.1}>
        <a
          href="https://cardmatch.live"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <motion.article
            className="bg-surface border border-border overflow-hidden transition-colors duration-300 hover:border-accent/40"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image panel */}
              <div className="lg:w-[55%] overflow-hidden">
                <motion.img
                  src="/images/og.png"
                  alt="CardMatch — credit card recommendation app"
                  className="w-full h-full object-cover block"
                  style={{ minHeight: '280px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>

              {/* Content panel */}
              <div className="lg:w-[45%] p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {['Live Product', 'Full Stack', 'Startup'].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] text-text-muted border border-border px-2 py-0.5 tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                  CardMatch
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  A credit card recommendation engine built for the r/churning and
                  r/creditcards communities. Multi-step adaptive quiz with scored
                  recommendations, side-by-side card comparison, a live database of
                  33+ cards, My Wallet tracking, and full dark/light mode support.
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-2 font-body text-xs text-text-muted group-hover:text-accent transition-colors duration-300 tracking-widest uppercase mt-2">
                  Visit cardmatch.live
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.article>
        </a>
      </FadeUp>
    </section>
  )
}
