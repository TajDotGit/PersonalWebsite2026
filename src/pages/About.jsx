import { motion } from 'framer-motion'
import Navbar     from '../components/Navbar'
import Footer     from '../components/Footer'
import PullQuote  from '../components/PullQuote'
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

// ─── Shared image wrapper ──────────────────────────────────────────────────────

function EditorialImg({ src, alt, height, objectPosition = 'center', className = '' }) {
  return (
    <div
      className={`group overflow-hidden rounded-sm border border-accent/25 hover:border-accent/60 transition-colors duration-300 ${className}`}
      style={{ boxShadow: '0 0 20px rgb(var(--color-accent) / 0.06)' }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full object-cover block"
        style={{ height, objectPosition }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}

// ─── Currently data ───────────────────────────────────────────────────────────

const CURRENTLY = [
  { label: 'ROLE',     value: 'Product Analyst, Flint Hills Resources (Koch)' },
  { label: 'BUILDING', value: 'Early-stage startup ideas with co-founders' },
  { label: 'BASED',    value: 'Wichita, KS (not for long)' },
  { label: 'NEXT',     value: 'San Francisco Bay Area' },
]

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <main className="pt-16 md:pt-20">

        {/* ── Page Header ────────────────────────────────────────────────── */}
        <section className="pt-20 md:pt-28 pb-16 px-6 md:px-16 max-w-5xl mx-auto">
          <FadeUp>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary mb-6 leading-tight">
              The Story.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-body text-base md:text-lg text-text-muted mb-12">
              Where it started, where it's going, and everything in between.
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

        {/* ── Essay Column ───────────────────────────────────────────────── */}
        <div className="max-w-[720px] mx-auto px-6 md:px-0 pb-24">

          {/* Section 1 — Portrait (float right) + Paragraph 1 */}
          <FadeUp>
            <div className="mb-10">
              {/* Portrait: float right on md+, stacked on mobile */}
              <div className="md:float-right md:ml-8 md:mb-4 mb-6 md:w-[280px] w-full">
                <EditorialImg
                  src="/images/about/CampusShot.JPG"
                  alt="Taj Ikhlaas — Manhattan, KS"
                  height="380px"
                  objectPosition="center top"
                />
                <p className="font-body text-[11px] text-text-muted italic mt-2 tracking-wide">
                  Manhattan, KS
                </p>
              </div>

              <p className="font-body text-[17px] leading-[1.8] text-text-muted">
                I came to Kansas State with a chip on my shoulder and something to prove.
                Computer science felt like the closest thing to building the future, but I
                noticed early that the ambition in the room didn't always match mine. Most
                people were there to get a degree and get a job. I wanted more than that —
                and I figured if the energy wasn't there, I'd help create it. I found ACM
                and threw myself in. Events, outreach, showing up consistently. Eventually
                I was Vice President, helping put on tech talks, recruiting events, and
                community nights for the CS crowd. It wasn't glamorous work but it mattered.
                Getting students in a room, excited about what they were building — that
                energy was worth chasing.
              </p>

              <div className="clear-both" />
            </div>
          </FadeUp>

          {/* Section 2 — Paragraph 2 + ACM group image */}
          <FadeUp>
            <div className="mb-10">
              <p className="font-body text-[17px] leading-[1.8] text-text-muted mb-8">
                Hack K-State hit different. There's something about a hackathon — the chaos,
                the sleep deprivation, the moment a team demos something that didn't exist
                36 hours ago — that I couldn't get enough of. I started organizing, then
                traveling. Hack KU, other campuses. I wanted to see how other communities
                did it. By 2024 I was running Hack K-State as President — managing sponsors,
                logistics, marketing, the whole operation. 200 people showed up. Watching
                that room full of builders do their thing was one of the better days I've had.
              </p>

              <EditorialImg
                src="/images/about/ACMGroup.jpg"
                alt="ACM K-State — the team"
                height="320px"
                objectPosition="center"
              />
              <p className="font-body text-[11px] text-text-muted italic mt-2 tracking-wide">
                ACM K-State — the team.
              </p>
            </div>
          </FadeUp>

          {/* Section 3 — Paragraph 3 (no image) */}
          <FadeUp>
            <p className="font-body text-[17px] leading-[1.8] text-text-muted mb-10">
              The clubs gave me more than experience points on a resume. They gave me a
              network — real relationships with people in the industry who opened doors I
              wouldn't have found otherwise. Both of my software engineering internships
              came through connections I made by showing up and doing the work. I learned
              early that in tech, who you know and how you show up for people compounds
              just as fast as any technical skill.
            </p>
          </FadeUp>

          {/* Pull Quote */}
          <PullQuote>
            The questions I actually cared about lived upstream of the engineering.
          </PullQuote>

          {/* Section 4 — Paragraph 4 */}
          <FadeUp>
            <p className="font-body text-[17px] leading-[1.8] text-text-muted mb-10">
              The internships taught me something about myself. I was decent at writing
              the code. But I kept gravitating toward the conversations — with stakeholders,
              with users, with anyone who could tell me why we were building the thing in
              the first place. Product wasn't a fallback. It was the realization that the
              questions I actually cared about lived upstream of the engineering. I made
              the transition into product as a new grad and it clicked immediately.
              I haven't looked back.
            </p>
          </FadeUp>

          {/* Section 5 — Koch image + Paragraph 5 */}
          <FadeUp>
            <div className="mb-10">
              <EditorialImg
                src="/images/about/Koch_SideProfile.PNG"
                alt="Wichita, KS — Flint Hills Resources"
                height="360px"
                objectPosition="top center"
                className="mb-3"
              />
              <p className="font-body text-[11px] text-text-muted italic mb-8 tracking-wide">
                Wichita, KS — Flint Hills Resources.
              </p>

              <p className="font-body text-[17px] leading-[1.8] text-text-muted">
                Right now I'm a Product Analyst at Koch, learning what it means to own
                something end to end in a real organization. But I'll be honest — I'm stuck
                in the mud out here in Kansas, and I know it. The longer game is the Bay.
                That's where the founders are, where the capital is, where the conversations
                I want to be in are happening. I'm working on startup ideas with people I
                trust, looking for the product worth going all in on. The goal was never
                just a career. It was always to build something that mattered.
                Still working on that part — but the direction is clear.
              </p>
            </div>
          </FadeUp>

          {/* Currently */}
          <FadeUp>
            <div className="mt-16 pt-10 border-t border-border">
              <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">
                Currently
              </h2>
              <dl className="flex flex-col gap-4">
                {CURRENTLY.map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-4">
                    <dt className="font-body text-[10px] text-accent tracking-[0.1em] uppercase shrink-0 w-20">
                      {label}
                    </dt>
                    <dd className="font-body text-sm text-text-muted">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeUp>

          {/* Connect */}
          <FadeUp>
            <div className="mt-14 pt-10 border-t border-border text-center">
              <p className="font-display italic text-lg md:text-xl text-text-muted mb-8">
                If you're building something interesting, let's talk.
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <a
                  href="mailto:tajikhlaas@gmail.com"
                  className="font-body text-xs text-accent hover:text-accent-red transition-colors duration-300 tracking-[0.1em] uppercase"
                >
                  tajikhlaas@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/tajammul-ikhlaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-accent hover:text-accent-red transition-colors duration-300 tracking-[0.1em] uppercase"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeUp>

        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
