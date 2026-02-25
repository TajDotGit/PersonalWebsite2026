import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import Navbar   from '../components/Navbar'
import Footer   from '../components/Footer'
import { FadeUp } from '../components/FadeUp'

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

// Browser-safe frontmatter parser (replaces gray-matter, no Buffer dep)
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw.trim() }
  const data = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    let val = line.slice(colon + 1).trim()
    if (/^["'][\s\S]*["']$/.test(val)) val = val.slice(1, -1)
    data[key] = val
  }
  return { data, content: match[2].trim() }
}

const rawFiles = import.meta.glob('../content/writing/*.md', {
  eager:  true,
  query:  '?raw',
  import: 'default',
})

function getPost(slug) {
  const entry = Object.entries(rawFiles).find(([filepath]) =>
    filepath.split('/').pop().replace('.md', '') === slug
  )
  if (!entry) return null
  const { data: frontmatter, content: body } = parseFrontmatter(entry[1])
  return { slug, frontmatter, body }
}

// react-markdown component overrides — all use CSS var tokens for light/dark
const mdComponents = {
  p: ({ children }) => (
    <p className="font-body text-[17px] leading-[1.8] text-text-muted mb-6">
      {children}
    </p>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-2xl md:text-3xl text-accent mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-xl text-accent mt-8 mb-3">{children}</h3>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-accent pl-6 py-1 my-8 font-display italic text-text-muted">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="font-mono text-sm text-accent bg-surface px-1.5 py-0.5 rounded">
        {children}
      </code>
    ) : (
      <pre className="font-mono text-sm text-accent bg-surface p-4 rounded overflow-x-auto my-6">
        <code>{children}</code>
      </pre>
    ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent hover:text-accent-red transition-colors duration-200 underline"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="text-text-primary font-semibold">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside font-body text-[17px] text-text-muted mb-6 space-y-2 pl-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside font-body text-[17px] text-text-muted mb-6 space-y-2 pl-4">
      {children}
    </ol>
  ),
}

export default function Post() {
  const { slug }  = useParams()
  const navigate  = useNavigate()
  const post      = getPost(slug)

  // Redirect if post doesn't exist or is "soon"
  useEffect(() => {
    if (!post || post.frontmatter.status === 'soon') {
      navigate('/writing', { replace: true })
    }
  }, [post, navigate])

  if (!post || post.frontmatter.status === 'soon') return null

  const { frontmatter, body } = post
  const formattedDate = new Date(frontmatter.date + 'T00:00:00')
    .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    .toUpperCase()

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <main className="pt-16 md:pt-20">
        <div className="max-w-[720px] mx-auto px-6 md:px-0 pt-16 md:pt-24 pb-24">

          {/* Back link */}
          <FadeUp>
            <Link
              to="/writing"
              className="font-body text-xs text-accent hover:text-accent-red transition-colors duration-200 tracking-widest uppercase inline-flex items-center gap-1 mb-12"
            >
              ← Writing
            </Link>
          </FadeUp>

          {/* Post headline */}
          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-4 leading-tight">
              {frontmatter.title}
            </h1>
          </FadeUp>

          {/* Date */}
          <FadeUp delay={0.1}>
            <p className="font-body text-[10px] text-text-muted tracking-[0.2em] uppercase mb-10">
              {formattedDate}
            </p>
          </FadeUp>

          {/* Gold gradient rule */}
          <FadeUp delay={0.12}>
            <div
              className="h-px w-full mb-12"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgb(var(--color-accent)), transparent)',
              }}
            />
          </FadeUp>

          {/* Body */}
          <FadeUp delay={0.15}>
            <ReactMarkdown components={mdComponents}>{body}</ReactMarkdown>
          </FadeUp>

        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
