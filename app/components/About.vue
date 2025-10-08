<template>
  <section id="about" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 md:px-12">

      <h2 class="text-4xl font-bold text-center text-white mb-4">
        Sobre Mim
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

      <div class="max-w-4xl mx-auto text-lg text-gray-300 text-left md:text-center leading-relaxed">
        <p class="mb-6">
          Vindo de uma sólida carreira em Logística e Coordenação de TI, descobri na programação a minha verdadeira paixão. Hoje, como Desenvolvedor de Software, meu grande diferencial é unir o pensamento estratégico e a resolução de problemas complexos, que aprimorei na gestão, com a capacidade técnica de construir soluções digitais robustas e eficientes.
        </p>
        <p>
          Minha experiência me permite não apenas escrever código, mas também entender o impacto que a tecnologia tem no negócio, garantindo que cada projeto entregue o máximo de valor. Sou movido por desafios e pela busca contínua de conhecimento, com foco especial nos ecossistemas JavaScript/TypeScript e Python.
        </p>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-3xl font-bold text-white mb-8">Minhas Ferramentas</h3>
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:nuxt-icon" class="text-5xl" />
            <span class="text-sm">Nuxt.js</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:nestjs" class="text-5xl" />
            <span class="text-sm">Nest.js</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:fastapi-icon" class="text-5xl" />
            <span class="text-sm">FastAPI</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:python" class="text-5xl" />
            <span class="text-sm">Python</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:postgresql" class="text-5xl" />
            <span class="text-sm">PostgreSQL</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:docker-icon" class="text-5xl" />
            <span class="text-sm">Docker</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:git-icon" class="text-5xl" />
            <span class="text-sm">Git</span>
          </div>

          <div class="flex flex-col items-center gap-2 p-4 w-28">
            <Icon name="logos:microsoft-power-bi" class="text-5xl" />
            <span class="text-sm">Power BI</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Nenhuma lógica de script necessária para este componente estático.
</script>