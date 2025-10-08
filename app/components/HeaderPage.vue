<template>
  <v-app-bar elevation="0" density="comfortable" class="backdrop-blur bg-transparent">
    <v-container class="px-4">
      <div class="flex items-center justify-between">
        <a href="#hero" class="text-lg font-semibold text-white">Jeferson Braga</a>
        <div class="hidden md:flex items-center gap-3">
          <v-btn
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            variant="text"
            class="px-3 border-b-2 border-transparent"
            :color="activeSection === item.id ? 'primary' : undefined"
            :class="activeSection === item.id ? 'text-green-400 border-green-400' : 'text-white/90'"
            :aria-current="activeSection === item.id ? 'page' : undefined"
          >
            {{ item.label }}
          </v-btn>
        </div>
        <div class="flex items-center gap-2">
          <!-- <v-btn icon variant="text" @click="toggleTheme" :aria-label="themeLabel">
            <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
          </v-btn> -->
        </div>
      </div>
    </v-container>
  </v-app-bar>

  <!-- Navegação inferior somente em mobile -->
  <v-bottom-navigation
    v-if="smAndDown"
    elevation="8"
    v-model="activeSection"
    class="fixed bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-md border-t border-white/10 text-white pb-[env(safe-area-inset-bottom)] z-50 py-1"
    mode="shift"
  >
    <v-btn
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      :value="item.id"
      variant="text"
      class="min-w-0 px-2"
      :color="activeSection === item.id ? 'primary' : undefined"
    >
      <v-icon :icon="item.icon" :class="activeSection === item.id ? 'text-green-400' : 'text-white/90'" />
      <span class="text-[10px]" :class="activeSection === item.id ? 'text-green-400' : 'text-white/90'">{{ item.label }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref, onMounted, onBeforeUnmount } from 'vue'

type NavItem = { id: string; label: string; href: string; icon: string }
const navItems: NavItem[] = [
  { id: 'hero', label: 'Início', href: '#hero', icon: 'mdi-home' },
  { id: 'about', label: 'Sobre', href: '#about', icon: 'mdi-account' },
  { id: 'career', label: 'Carreira', href: '#career', icon: 'mdi-timeline' },
  { id: 'projects', label: 'Projetos', href: '#projects', icon: 'mdi-briefcase' },
  { id: 'contact', label: 'Contato', href: '#contact', icon: 'mdi-email' }
]

const { smAndDown } = useDisplay()
const activeSection = ref<string>('hero')

let observer: IntersectionObserver | null = null
onMounted(() => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -45% 0px',
    threshold: [0.25, 0.5, 0.75]
  }
  observer = new IntersectionObserver((entries) => {
    const candidate = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
    const id = candidate?.target?.id
    if (id) activeSection.value = id
  }, options)

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer?.observe(el)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>


