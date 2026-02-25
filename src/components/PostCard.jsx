import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

export default function PostCard({ post, index }) {
  const { slug, frontmatter } = post
  const { title, date, description, status } = frontmatter
  const isSoon = status === 'soon'

  // Format: "2026-03-01" → "MARCH 2026"
  const formattedDate = new Date(date + 'T00:00:00')
    .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    .toUpperCase()

  const cardContent = (
    <motion.article
      className={[
        'bg-surface border border-border',
        isSoon ? 'border-l-2 border-l-accent-red' : 'border-l-2 border-l-accent',
        'p-7 flex flex-col gap-3 h-full transition-colors duration-300',
        isSoon ? 'opacity-60 cursor-default' : 'hover:bg-surface-alt cursor-pointer',
      ].join(' ')}
      whileHover={isSoon ? {} : { y: -3 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {/* Date */}
      <span className="font-body text-[10px] text-text-muted tracking-[0.2em] uppercase">
        {formattedDate}
      </span>

      {/* Title */}
      <h3 className={[
        'font-display text-xl md:text-2xl leading-snug transition-colors duration-300',
        isSoon ? 'text-text-primary' : 'text-text-primary group-hover:text-accent',
      ].join(' ')}>
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
        {description}
      </p>

      {/* Action area */}
      <div className="flex justify-end pt-1">
        {isSoon ? (
          <span className="font-body text-[10px] text-accent-red border border-accent-red/40 px-2.5 py-0.5 tracking-widest uppercase rounded-full opacity-80">
            Soon
          </span>
        ) : (
          <span className="font-body text-xs text-accent tracking-widest uppercase flex items-center gap-1">
            Read →
          </span>
        )}
      </div>
    </motion.article>
  )

  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <div className="group h-full">
        {isSoon ? cardContent : (
          <Link to={`/writing/${slug}`} className="block h-full">
            {cardContent}
          </Link>
        )}
      </div>
    </FadeUp>
  )
}
