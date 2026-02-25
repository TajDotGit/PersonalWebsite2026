import { FadeUp } from './FadeUp'

export default function Ethos() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-16 max-w-4xl mx-auto"
      aria-labelledby="ethos-heading"
    >
      {/* Top rule — subtle warm crimson tint instead of flat grey */}
      <FadeUp>
        <hr className="border-accent-red/20 mb-16 md:mb-20" />
      </FadeUp>

      {/* Section heading */}
      <FadeUp delay={0.05}>
        <h2
          id="ethos-heading"
          className="font-display text-3xl md:text-5xl text-text-primary mb-12"
        >
          The Ethos
        </h2>
      </FadeUp>

      {/* Editorial paragraph */}
      <FadeUp delay={0.1}>
        <p className="font-body text-base md:text-lg text-text-muted leading-loose mb-16">
          The best products don&apos;t come from the best engineers — they come from people
          who can&apos;t stop asking why. Why does this exist? Who does it serve? What would
          make it undeniable? Those are the questions I wake up thinking about. I work in
          product because it&apos;s the closest thing to building a vision end to end — not
          just executing someone else&apos;s roadmap, but shaping what gets built and why it
          matters. Steve Jobs proved that the people who care most about the experience are
          the ones who define the era. That&apos;s the standard. That&apos;s the goal.
        </p>
      </FadeUp>

      {/* Pull quote — left-border editorial treatment */}
      <FadeUp delay={0.15}>
        <blockquote className="border-l-2 border-accent pl-8 py-1 mb-16 md:mb-20">
          <p className="font-display text-2xl md:text-3xl text-accent italic leading-snug">
            &ldquo;Product. Vision. Founder.&rdquo;
          </p>
        </blockquote>
      </FadeUp>

      {/* Bottom rule */}
      <FadeUp delay={0.2}>
        <hr className="border-accent-red/20" />
      </FadeUp>
    </section>
  )
}
