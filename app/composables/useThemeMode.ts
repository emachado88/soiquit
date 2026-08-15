// Landing-wide dark mode. The `dark` class on <html> is the single source of
// truth: the pre-paint script in nuxt.config.ts applies it before first paint
// (same STORAGE_KEY), this composable mirrors it reactively and persists user
// picks. Static SPA -> plain localStorage, no cookies.

const STORAGE_KEY = 'theme'
const THEME_COLOR = { light: '#1a6b5c', dark: '#0f0e0d' }

const isDark = ref(false)
let watchingSystem = false

function setDark(value: boolean) {
  isDark.value = value
  document.documentElement.classList.toggle('dark', value)
  // Keep the browser chrome (mobile URL bar) in sync with the page.
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', value ? THEME_COLOR.dark : THEME_COLOR.light)
}

function toggleTheme() {
  setDark(!isDark.value)
  try {
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }
  catch {
    // Private mode / storage disabled — theme still applies for this session.
  }
}

export function useThemeMode() {
  if (import.meta.client) {
    // Mirror whatever the pre-paint script already applied — setDark also
    // syncs the theme-color meta, which the pre-paint script doesn't touch.
    setDark(document.documentElement.classList.contains('dark'))
    // Until the user picks a side, keep following the OS.
    if (!watchingSystem) {
      watchingSystem = true
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) setDark(e.matches)
      })
    }
  }
  return { isDark, toggleTheme }
}
