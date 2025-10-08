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
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const preferenceKey = 'theme-preference'
const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)
const themeLabel = computed(() => (isDark.value ? 'Alternar para tema claro' : 'Alternar para tema escuro'))

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.global.name.value = next
  localStorage.setItem(preferenceKey, next)
}
</script>


