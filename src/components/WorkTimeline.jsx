import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    id: 1,
    category: 'EXPERIENCE',
    accent: 'gold',
    title: 'Product Analyst',
    org: 'Flint Hills Resources (Koch)',
    location: 'Wichita, KS',
    dates: 'Jan. 2026 – Present',
    bullets: [
      'Own product definition and delivery for transportation-focused applications, partnering with engineers, data architects, and business stakeholders across terminals, carriers, and drivers.',
      'Translate operational and customer needs into prioritized backlog items in Azure DevOps — defining scope, acceptance criteria, and delivery tradeoffs.',
      'Lead user discovery and validation directly with end users to shape solutions for terminal availability, documentation workflows, and analytics dashboards.',
      'Collaborate on AWS-backed system designs, wireframe flows in Lucid, and support testing and data analysis across SQL and Neo4j environments.',
    ],
    tags: ['Azure DevOps', 'AWS', 'SQL', 'Neo4j', 'Product Strategy'],
  },
  {
    id: 2,
    category: 'EXPERIENCE',
    accent: 'gold',
    title: 'Software Engineer Intern',
    org: 'Garmin International',
    location: 'Olathe, KS',
    dates: 'May 2025 – Aug. 2025',
    bullets: [
      'Delivered enhancements to internal mapping tools in C# .NET, improving usability and workflow efficiency for cartographers.',
      'Built internal interfaces integrating API data sources to improve accessibility and consistency of satellite content.',
      'Worked cross-functionally to clarify requirements and validate feature behavior prior to release.',
    ],
    tags: ['C#', '.NET', 'APIs'],
  },
  {
    id: 3,
    category: 'EXPERIENCE',
    accent: 'gold',
    title: 'Software Engineer Intern',
    org: 'Koch Industries',
    location: 'Wichita, KS',
    dates: 'May 2024 – Aug. 2024',
    bullets: [
      'Built a full-stack dashboard using React and Node.js to visualize refinery application usage and surface feature gaps.',
      'Improved data integrity and query performance in Neo4j by refining Cypher queries and database structure.',
      'Collaborated with PMs and designers to translate user needs into functional technical solutions.',
    ],
    tags: ['React', 'Node.js', 'Neo4j', 'Cypher', 'Full Stack'],
  },
  {
    id: 4,
    category: 'LEADERSHIP',
    accent: 'muted-gold',
    title: 'President — Hack K-State',
    org: 'Kansas State University',
    location: 'Manhattan, KS',
    dates: 'Jan. 2024 – Jan. 2025',
    bullets: [
      'Led planning and execution of a 250+ attendee hackathon; owned event roadmap, sponsor outreach, and full team coordination.',
      'Raised ~$15k in sponsorship funding through outreach to regional and national tech companies.',
      'Managed treasury and financial operations including budget allocation, expense tracking, and sponsor fund disbursement.',
      'Partnered with university and industry stakeholders to align event goals with student career development outcomes.',
    ],
    tags: [],
  },
  {
    id: 5,
    category: 'LEADERSHIP',
    accent: 'muted-gold',
    title: 'Vice President — ACM Student Chapter',
    org: 'Kansas State University',
    location: 'Manhattan, KS',
    dates: 'Aug. 2023 – May 2025',
    bullets: [
      'Led planning of tech-centered events in collaboration with faculty and students focused on innovation and product.',
      'Executed multichannel marketing campaigns to increase awareness and drive event attendance.',
    ],
    tags: [],
  },
  {
    id: 6,
    category: 'EDUCATION',
    accent: 'red',
    title: 'B.S. in Computer Science',
    org: 'Kansas State University',
    location: 'Manhattan, KS',
    dates: 'Aug. 2021 – Dec. 2025',
    bullets: [
      'Graduated with a degree in Computer Science with focus areas in software engineering and data structures.',
      'Led two major student organizations simultaneously while completing degree.',
    ],
    tags: ['Python', 'SQL', 'Data Structures', 'C#', '.NET'],
  },
]

// ─── Color helpers ─────────────────────────────────────────────────────────────
//
// All conditional class strings are written out in full here so Tailwind's
// JIT engine includes them in the production bundle (no dynamic concatenation).

const ACCENT_MAP = {
  gold: {
    nodeClass:   'bg-accent',
    borderClass: 'border-l-accent',
    labelClass:  'text-accent',
    dashClass:   'text-accent',
    nodeStyle:   {},
    borderStyle: {},
    labelStyle:  {},
    dashStyle:   {},
  },
  'muted-gold': {
    nodeClass:   '',
    borderClass: '',
    labelClass:  '',
    dashClass:   '',
    nodeStyle:   { background: '#A07830' },
    borderStyle: { borderLeftColor: '#A07830' },
    labelStyle:  { color: '#A07830' },
    dashStyle:   { color: '#A07830' },
  },
  red: {
    nodeClass:   'bg-accent-red',
    borderClass: 'border-l-accent-red',
    labelClass:  'text-accent-red',
    dashClass:   'text-accent-red',
    nodeStyle:   {},
    borderStyle: {},
    labelStyle:  {},
    dashStyle:   {},
  },
}

// ─── TimelineEntry ─────────────────────────────────────────────────────────────

function TimelineEntry({ entry, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const ac = ACCENT_MAP[entry.accent]

  return (
    <div ref={ref} className="relative pl-12 mb-10 last:mb-0">
      {/* Diamond node on the vertical line */}
      <div
        className={`absolute left-3 top-7 -translate-x-1/2 w-2 h-2 rotate-45 ${ac.nodeClass}`}
        style={ac.nodeStyle}
        aria-hidden="true"
      />
      {/* Horizontal connecting tick */}
      <div
        className="absolute left-3 top-8 w-7 h-px bg-accent/20"
        aria-hidden="true"
      />

      {/* Entry card with x+y entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 24, x: -16 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 24, x: -16 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
        className={[
          'bg-surface border border-border border-l-2',
          ac.borderClass,
          'p-6 md:p-8 flex flex-col gap-5',
          'transition-colors duration-300 hover:bg-surface-alt',
        ].join(' ')}
        style={ac.borderStyle}
      >
        {/* Category + dates row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span
            className={`font-body text-[10px] tracking-[0.2em] uppercase ${ac.labelClass}`}
            style={ac.labelStyle}
          >
            {entry.category}
          </span>
          <span className="font-body text-xs text-text-muted">
            {entry.dates}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl text-text-primary leading-snug -mt-1">
          {entry.title}
        </h3>

        {/* Org + location */}
        <p className="font-body text-xs text-text-muted tracking-wide -mt-3">
          {entry.org} · {entry.location}
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-3 list-none m-0 p-0">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 mt-[3px] text-sm leading-none ${ac.dashClass}`}
                style={ac.dashStyle}
                aria-hidden="true"
              >
                –
              </span>
              <p className="font-body text-sm text-text-muted leading-relaxed m-0">
                {bullet}
              </p>
            </li>
          ))}
        </ul>

        {/* Tag pills */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] text-accent border border-accent/40 px-2.5 py-0.5 tracking-widest uppercase rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

// ─── WorkTimeline ──────────────────────────────────────────────────────────────

export default function WorkTimeline() {
  return (
    <div className="relative">
      {/* Vertical line running down the left side */}
      <div
        className="absolute left-3 top-0 bottom-0 w-px bg-accent/30"
        aria-hidden="true"
      />

      {TIMELINE.map((entry, i) => (
        <TimelineEntry key={entry.id} entry={entry} index={i} />
      ))}
    </div>
  )
}
