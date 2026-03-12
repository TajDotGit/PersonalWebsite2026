import { motion } from 'framer-motion'
import Navbar     from '../components/Navbar'
import Footer     from '../components/Footer'
import { FadeUp } from '../components/FadeUp'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// ─── Project Data ────────────────────────────────────────────────────────────

const OTHER_PROJECTS = [
  {
    id: 1,
    title: 'EduVista — Student Risk Analytics',
    date: 'Aug. 2025 – Dec. 2025',
    description:
      'Predictive analytics platform that processed Canvas gradebook data to identify at-risk students and inform instructor interventions. Built ensemble classification model producing risk categories with confidence scores.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
  },
  {
    id: 2,
    title: 'Refinery Analytics Dashboard',
    date: 'Summer 2024',
    description:
      'Full-stack internal dashboard built during Koch internship to visualize refinery application usage patterns and surface product feature gaps for stakeholders.',
    tags: ['React', 'Node.js', 'Neo4j'],
  },
]

// ─── ProjectCard ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <motion.article
        className="group bg-surface border border-border border-l-2 border-l-accent p-8 flex flex-col gap-4 h-full transition-colors duration-300 hover:bg-surface-alt"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <span className="font-body text-[10px] text-text-muted tracking-widest uppercase">
          {project.date}
        </span>

        <h3 className="font-display text-xl md:text-2xl text-text-primary leading-snug group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-[10px] text-accent border border-accent/40 px-2.5 py-0.5 tracking-widest uppercase rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </FadeUp>
  )
}

// ─── Projects Page ───────────────────────────────────────────────────────────

export default function Projects() {
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
              The Lab.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-body text-base md:text-lg text-text-muted mb-12">
              Products shipped. Problems solved. Experiments run.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgb(var(--color-accent)), transparent)',
              }}
            />
          </FadeUp>
        </section>

        {/* ── Featured: CardMatch ──────────────────────────────────────── */}
        <section className="pb-16 md:pb-24 px-6 md:px-16 max-w-5xl mx-auto">
          <FadeUp>
            <div className="mb-14">
              <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
                Featured
              </h2>
              <div className="w-10 h-px bg-accent" />
            </div>
          </FadeUp>

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
                      src="/images/cardmatch-screenshot.png"
                      alt="CardMatch — credit card recommendation app"
                      className="w-full h-full object-cover block"
                      style={{ minHeight: '300px' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Content panel */}
                  <div className="lg:w-[45%] p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5">
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

                    <h3 className="font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                      CardMatch
                    </h3>

                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      A credit card recommendation engine built for the r/churning
                      and r/creditcards communities. Profiles spending habits, credit
                      score, income, and travel preferences through a multi-step
                      adaptive quiz — then scores and ranks real card offers with a
                      confidence percentage.
                    </p>

                    <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                      {[
                        'Scored recommendations with match percentage (0–100)',
                        'Side-by-side card comparison on benefits, fees, and perks',
                        'Live database of 33+ cards from Amex, Chase, Capital One, Citi, Discover',
                        'My Wallet — track owned cards, renewal alerts, bonus progress',
                        'Watchlist for future planning with Apply Now links',
                        'Google OAuth + email auth via Supabase',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-[3px] text-sm leading-none text-accent" aria-hidden="true">
                            –
                          </span>
                          <p className="font-body text-sm text-text-muted leading-relaxed m-0">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {['React', 'Supabase', 'Tailwind CSS', 'OAuth'].map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[10px] text-accent border border-accent/40 px-2.5 py-0.5 tracking-widest uppercase rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-body text-xs text-text-muted group-hover:text-accent transition-colors duration-300 tracking-widest uppercase mt-2">
                      Visit cardmatch.live
                      <span className="inline-block">→</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </a>
          </FadeUp>
        </section>

        {/* ── Other Builds ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 md:px-16 max-w-5xl mx-auto border-t border-border">
          <FadeUp>
            <div className="mb-14">
              <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
                Other Builds
              </h2>
              <div className="w-10 h-px bg-accent" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {OTHER_PROJECTS.map((project, i) => (
              <div key={project.id} className="bg-background">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing Statement ────────────────────────────────────────── */}
        <FadeUp>
          <div className="py-16 md:py-20 text-center px-6">
            <p className="font-display italic text-text-muted text-base md:text-lg tracking-wide">
              More coming. Always building.
            </p>
          </div>
        </FadeUp>

      </main>

      <Footer />
    </motion.div>
  )
}
