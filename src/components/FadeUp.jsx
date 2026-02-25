import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * FadeUp — scroll-triggered fade + upward reveal animation.
 * Wraps any children in a motion.div that animates in once when
 * the element enters the viewport.
 *
 * Props:
 *   delay     — optional stagger delay in seconds (default 0)
 *   className — passthrough className for layout control
 */
export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  // Trigger 80px before the element fully enters the viewport
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
