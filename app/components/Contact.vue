<template>
  <section id="contact" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 md:px-12 text-center">

      <h2 class="text-4xl font-bold text-white mb-4">
        Conecte-se Comigo
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-10"></div>

      <div class="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 flex-col gap-5">
        
        <a 
          href="https://github.com/jefersonbrluz"
          target="_blank"
          class="items-center justify-center gap-4 w-auto bg-gray-700 text-white font-bold p-4 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="mdi:github" class="text-3xl" />
          <span class="text-lg">GitHub</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/jefersonbluz/" 
          target="_blank"
          class="items-center justify-center gap-4 w-auto bg-blue-600 text-white font-bold p-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="mdi:linkedin" class="text-3xl" />
          <span class="text-lg">LinkedIn</span>
        </a>
        
        <a 
          href="mailto:jefersonbrluz@gmail.com"
          class="items-center justify-center gap-4 w-auto bg-red-600 text-white font-bold p-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="mdi:email-outline" class="text-3xl" />
          <span class="text-lg">E-mail</span>
        </a>

        <a 
          :href="whatsappUrl"
          target="_blank"
          class="items-center justify-center gap-4 w-auto bg-green-600 text-white font-bold p-4 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="mdi:whatsapp" class="text-3xl" />
          <span class="text-lg">WhatsApp</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// URL do WhatsApp com mensagem pré-definida e codificada
const whatsappUrl = 'https://wa.me/5577988486170?text=Olá!%20Vi%20seu%20portfólio%20e%20fiquei%20interessado.';
</script>