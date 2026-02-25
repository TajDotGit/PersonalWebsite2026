import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Default to dark; only go light if explicitly stored
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') !== 'light'
  )

  useEffect(() => {
    // Toggle .light class on <html> — :root vars stay as dark defaults,
    // html.light overrides them with the light palette
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
