<template>
  <footer class="bg-gray-900 text-gray-400 py-8">
    <div class="container mx-auto px-6 text-center">
      
      <div class="flex justify-center items-center gap-6 mb-4">
        <a href="https://github.com/jefersonbrluz" target="_blank" aria-label="GitHub" class="hover:text-green-400 transition-colors">
          <v-icon icon="mdi-github" size="36" />
        </a>
        <a href="https://www.linkedin.com/in/jefersonbluz/" target="_blank" aria-label="LinkedIn" class="hover:text-green-400 transition-colors">
          <v-icon icon="mdi-linkedin" size="36" />
        </a>
      </div>
      
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Jeferson Braga Luz. Todos os direitos reservados.
      </p>

    </div>
  </footer>
</template>

<script setup lang="ts">
// Nenhuma lógica de script necessária.
</script>