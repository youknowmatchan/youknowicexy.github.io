import Sun  from '@/public/svg/sun.svg'
import Moon from '@/public/svg/moon.svg'
import { useTheme } from 'next-themes'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun/ > : < Moon />}
    </button>
  )
}

