<template>
  <section id="about" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 md:px-12">

      <h2 class="text-4xl font-bold text-center text-white mb-4">
        Sobre Mim
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

      <div class="max-w-4xl mx-auto text-lg text-gray-300 text-left md:text-center leading-relaxed">
        <p class="mb-6">
          Venho de uma sólida carreira em Logística e Coordenação de TI, descobri na programação a minha verdadeira paixão. Hoje, como Desenvolvedor de Software, meu grande diferencial é unir o pensamento estratégico e a resolução de problemas complexos, que aprimorei na gestão, com a capacidade técnica de construir soluções digitais robustas e eficientes.
        </p>
        <p>
          Minha experiência me permite não apenas escrever código, mas também entender o impacto que a tecnologia tem no negócio, garantindo que cada projeto entregue o máximo de valor. Sou movido por desafios e pela busca contínua de conhecimento, com foco especial nos ecossistemas JavaScript/TypeScript e Python.
        </p>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-3xl font-bold text-white mb-8">Minhas Ferramentas</h3>
        <ClientOnly>
          <div
            class="
              max-w-2xl
              md:max-w-3xl
              lg:max-w-4xl
              mx-auto
              flex flex-wrap
              justify-center items-center
              gap-3
              sm:gap-4
              md:gap-5
              px-2
              sm:px-4
              md:px-6
            "
          >
            <v-chip
              v-for="tool in tools"
              :key="tool.name"
              :prepend-icon="tool.mdi"
              variant="tonal"
              color="primary"
              size="small"
              class="text-sm mb-2"
            >
              {{ tool.name }}
            </v-chip>
          </div>
        </ClientOnly>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type Tool = { name: string; mdi?: string }

const tools: Tool[] = [
  { name: "VS Code", mdi: "mdi-microsoft-visual-studio-code" },
  { name: "Git", mdi: "mdi-git" },
  { name: "HTML5", mdi: "mdi-language-html5" },
  { name: "CSS3", mdi: "mdi-language-css3" },
  { name: "Figma", mdi: "mdi-figma" },
  { name: "Nuxt", mdi: "mdi-nuxt" },
  { name: "Vue", mdi: "mdi-vuejs" },
  { name: "Next", mdi: "mdi-nextjs" },
  { name: "React", mdi: "mdi-react" },
  { name: "Bootstrap", mdi: "mdi-bootstrap" },
  { name: "Tailwind", mdi: "mdi-tailwind" },
  { name: "Jest", mdi: "mdi-clipboard-check-outline" },
  { name: "Cypress", mdi: "mdi-test-tube" },
  { name: "PostgreSQL", mdi: "mdi-database" },
  { name: "MongoDB", mdi: "mdi-leaf" },
  { name: "MySQL", mdi: "mdi-database" },
  { name: "Java", mdi: "mdi-language-java" },
  { name: "JavaScript", mdi: "mdi-language-javascript" },
  { name: "TypeScript", mdi: "mdi-language-typescript" },
  { name: "Node.js", mdi: "mdi-nodejs" },
  { name: "C", mdi: "mdi-language-c" },
  { name: "Docker", mdi: "mdi-docker" }
]
</script>
