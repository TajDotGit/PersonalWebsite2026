import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

// hoverAccent controls which color the card highlights on hover.
// Card 2 (engineering/data) gets red — creates a gold, red, gold rhythm
// across the three cards without being arbitrary.
const projects = [
  {
    id: 1,
    title: 'Transportation Intelligence Platform',
    context: 'Product Analyst — Flint Hills Resources (Koch)',
    description:
      'Defining product for internal transportation applications used by terminals, carriers, and drivers across Koch\'s refinery network.',
    tags: ['Product Strategy'],
    hoverAccent: 'gold',
  },
  {
    id: 2,
    title: 'Refinery Analytics Dashboard',
    context: 'Software Engineer Intern — Koch Industries',
    description:
      'Built a full-stack dashboard in React and Node.js to visualize refinery application usage and surface feature gaps.',
    tags: ['Full Stack', 'Data'],
    hoverAccent: 'red',
  },
  {
    id: 3,
    title: 'EduVista — Student Risk Analytics',
    context: 'Senior Capstone Project — K-State',
    description:
      'Predictive analytics platform identifying at-risk students from Canvas gradebook data using ensemble ML classification.',
    tags: ['ML', 'Analytics'],
    hoverAccent: 'gold',
  },
]

function WorkCard({ project, index }) {
  const isRed = project.hoverAccent === 'red'

  return (
    <FadeUp delay={0.1 * index}>
      <motion.article
        className={[
          'group relative bg-surface border border-border',
          'p-8 md:p-10 flex flex-col gap-5 h-full transition-colors duration-300',
          isRed ? 'hover:border-accent-red/40' : 'hover:border-accent/40',
        ].join(' ')}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-[10px] text-text-muted border border-border px-2 py-0.5 tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + context */}
        <div className="flex-1">
          <h3 className={[
            'font-display text-xl md:text-2xl text-text-primary mb-2 transition-colors duration-300 leading-snug',
            isRed ? 'group-hover:text-accent-red' : 'group-hover:text-accent',
          ].join(' ')}>
            {project.title}
          </h3>
          <p className="font-body text-xs text-text-muted tracking-wide uppercase mb-4">
            {project.context}
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Arrow link */}
        <Link
          to="/work"
          className={[
            'flex items-center gap-2 font-body text-xs text-text-muted',
            'transition-colors duration-300 tracking-widest uppercase mt-2 w-fit',
            isRed ? 'group-hover:text-accent-red' : 'group-hover:text-accent',
          ].join(' ')}
          aria-label={`View ${project.title}`}
        >
          View Project
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </motion.article>
    </FadeUp>
  )
}

export default function SelectedWork() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto"
      aria-labelledby="work-heading"
    >
      {/* Section header */}
      <FadeUp>
        <div className="mb-16">
          <h2
            id="work-heading"
            className="font-display text-3xl md:text-5xl text-text-primary mb-5"
          >
            Selected Work
          </h2>
          <div className="w-10 h-px bg-accent" />
        </div>
      </FadeUp>

      {/*
        Grid gap trick: gap-px bg-border on the grid + bg-background on each
        card wrapper creates editorial 1px divider lines without extra borders.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {projects.map((project, i) => (
          <div key={project.id} className="bg-background">
            <WorkCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
