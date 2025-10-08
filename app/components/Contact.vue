<template>
  <section id="contact" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 md:px-12 text-center">

      <h2 class="text-4xl font-bold text-white mb-4">
        Vamos Conversar?
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-8"></div>

      <p class="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
        Estou sempre aberto a novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou simplesmente quer trocar uma ideia, sinta-se à vontade para entrar em contato!
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="mailto:jefersonbrluz@gmail.com"
          class="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg"
        >
          <Icon name="mdi:email-outline" class="text-2xl" />
          Enviar um E-mail
        </a>
        <a 
          href="https://www.linkedin.com/in/jefersonbluz/" 
          target="_blank"
          class="flex items-center justify-center gap-3 w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
        >
          <Icon name="mdi:linkedin" class="text-2xl" />
          Conectar no LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Nenhuma lógica de script necessária.
</script>