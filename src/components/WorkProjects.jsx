import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
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

// ─── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <motion.article
        className="group bg-surface border border-border border-l-2 border-l-accent p-8 flex flex-col gap-4 h-full transition-colors duration-300 hover:bg-surface-alt"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {/* Date */}
        <span className="font-body text-[10px] text-text-muted tracking-widest uppercase">
          {project.date}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl text-text-primary leading-snug group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tag pills */}
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

// ─── WorkProjects ──────────────────────────────────────────────────────────────

export default function WorkProjects() {
  return (
    <div>
      {/* Section heading — same pattern as SelectedWork on the home page */}
      <FadeUp>
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
            Selected Builds
          </h2>
          <div className="w-10 h-px bg-accent" />
        </div>
      </FadeUp>

      {/*
        Editorial divider trick: gap-px bg-border on the grid + bg-background on
        each card wrapper creates 1px divider lines between cards.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {PROJECTS.map((project, i) => (
          <div key={project.id} className="bg-background">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </div>
  )
}
