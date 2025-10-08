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
        <ClientOnly>
          <div
            class="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
            role="list"
            aria-label="Ferramentas e tecnologias"
          >
            <div
              v-for="tool in tools"
              :key="tool.name"
              :title="tool.name"
              role="listitem"
              tabindex="0"
              class="w-24 h-16 sm:w-28 sm:h-20 rounded-2xl bg-gradient-to-b from-gray-700/70 to-gray-800/70
                     hover:from-gray-700 hover:to-gray-800 transition-all grid place-items-center shadow-sm shadow-black/20
                     ring-1 ring-white/5 hover:ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60
                     select-none"
            >
              <span class="text-xs sm:text-sm text-gray-100 font-medium text-center px-2 leading-snug tracking-wide">
                {{ tool.name }}
              </span>
            </div>
          </div>
        </ClientOnly>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type Tool = { name: string; icon: string }

const tools: Tool[] = [
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Jest", icon: "logos:jest" },
  { name: "Cypress", icon: "logos:cypress" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Java", icon: "logos:java" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "C", icon: "vscode-icons:file-type-c" },
  { name: "Docker", icon: "logos:docker-icon" }
]
</script>