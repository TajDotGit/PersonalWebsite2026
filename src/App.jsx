import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Home    from './pages/Home'
import Work    from './pages/Work'
import Writing from './pages/Writing'
import Post    from './pages/Post'
import About   from './pages/About'

// AnimatePresence needs access to location, so routes must live
// inside a component that can call useLocation within BrowserRouter.
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"        element={<Home />}    />
        <Route path="/work"    element={<Work />}    />
        <Route path="/writing"      element={<Writing />} />
        <Route path="/writing/:slug" element={<Post />}    />
        <Route path="/about"        element={<About />}   />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
