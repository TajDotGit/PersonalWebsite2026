import { motion } from 'framer-motion'
import Navbar   from '../components/Navbar'
import Footer   from '../components/Footer'
import PostCard from '../components/PostCard'
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

function getAllPosts() {
  return Object.entries(rawFiles)
    .map(([filepath, raw]) => {
      const { data: frontmatter, content: body } = parseFrontmatter(raw)
      const slug = filepath.split('/').pop().replace('.md', '')
      return { slug, frontmatter, body }
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
}

export default function Writing() {
  const posts = getAllPosts()

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
              Writing.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-body text-base md:text-lg text-text-muted mb-12">
              Dispatches on product, building, and the pursuit of something greater.
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

        {/* ── Intro paragraph ─────────────────────────────────────────────── */}
        <FadeUp>
          <div className="max-w-[600px] mx-auto px-6 md:px-0 mb-16 text-center">
            <p className="font-display italic text-base md:text-lg text-text-muted leading-relaxed">
              This is where I think out loud. Product strategy, startup lessons,
              observations from the road. Published when it's ready — not before.
            </p>
          </div>
        </FadeUp>

        {/* ── Post list ───────────────────────────────────────────────────── */}
        <section className="pb-24 px-6 md:px-16 max-w-4xl mx-auto">
          <div className="flex flex-col gap-px bg-border">
            {posts.map((post, i) => (
              <div key={post.slug} className="bg-background">
                <PostCard post={post} index={i} />
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </motion.div>
  )
}
