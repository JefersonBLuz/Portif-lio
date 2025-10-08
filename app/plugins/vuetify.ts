import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#22c55e',
    secondary: '#3b82f6',
    background: '#ffffff',
    surface: '#f8fafc',
    info: '#0284c7',
    success: '#16a34a',
    warning: '#f59e0b',
    error: '#dc2626',
  },
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#22c55e',
    secondary: '#60a5fa',
    background: '#0b1220',
    surface: '#111827',
    info: '#38bdf8',
    success: '#22c55e',
    warning: '#fbbf24',
    error: '#ef4444',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const preferenceKey = 'theme-preference'

  let defaultTheme: 'light' | 'dark' = 'dark'

  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: { defaultSet: 'mdi' },
    theme: {
      defaultTheme,
      themes: { light, dark },
    },
  })

  nuxtApp.vueApp.use(vuetify)

  if (import.meta.client) {
    const stored = localStorage.getItem('theme-preference')
    if (stored === 'light' || stored === 'dark') {
      vuetify.theme.global.name.value = stored
    } else {
      vuetify.theme.global.name.value = 'dark'
    }
  }
})


