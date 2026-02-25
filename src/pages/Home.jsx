import { motion } from 'framer-motion'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import SelectedWork from '../components/SelectedWork'
import Ethos        from '../components/Ethos'
import Footer       from '../components/Footer'

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

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Ethos />
      </main>
      <Footer />
    </motion.div>
  )
}
