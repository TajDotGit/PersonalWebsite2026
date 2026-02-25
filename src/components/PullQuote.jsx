import { FadeUp } from './FadeUp'

export default function PullQuote({ children }) {
  return (
    <FadeUp>
      <blockquote className="border-l-[3px] border-accent pl-6 py-1 my-10">
        <p className="font-display italic text-xl md:text-2xl text-text-primary leading-snug">
          {children}
        </p>
      </blockquote>
    </FadeUp>
  )
}
