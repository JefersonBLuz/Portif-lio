<template>
  <v-app-bar elevation="0" density="comfortable" class="backdrop-blur bg-transparent">
    <v-container class="px-4">
      <div class="flex items-center justify-between">
        <a href="#hero" class="text-lg font-semibold text-white">Jeferson Braga</a>
        <div class="hidden md:flex items-center gap-2">
          <v-btn variant="text" href="#about">Sobre</v-btn>
          <v-btn variant="text" href="#projects">Projetos</v-btn>
          <v-btn variant="text" href="#contact">Contato</v-btn>
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
    class="fixed bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-md border-t border-white/10 text-white pb-[env(safe-area-inset-bottom)]"
    mode="shift"
  >
    <v-btn
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      variant="text"
    >
      <v-icon :icon="item.icon" />
      <span class="text-xs">{{ item.label }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
type NavItem = { label: string; href: string; icon: string }
const navItems: NavItem[] = [
  { label: 'Início', href: '#hero', icon: 'mdi-home' },
  { label: 'Sobre', href: '#about', icon: 'mdi-account' },
  { label: 'Projetos', href: '#projects', icon: 'mdi-briefcase' },
  { label: 'Contato', href: '#contact', icon: 'mdi-email' }
]

const { smAndDown } = useDisplay()
</script>


