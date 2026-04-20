<template>
  <section id="projects" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6 md:px-12">

      <h2 class="text-4xl font-bold text-center text-white mb-4">
        Projetos em Destaque
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="bg-gray-800/90 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/5 hover:ring-white/10
                 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="relative aspect-video bg-gray-900/60">
            <img 
              :src="project.image" 
              :alt="`Imagem do projeto ${project.title}`" 
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            >
          </div>
          
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            
            <p class="text-gray-300 mb-4 leading-relaxed">{{ project.description }}</p>
            
            <div class="mb-6">
              <p class="text-white font-semibold mb-2">Tecnologias:</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  class="px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                         bg-gray-700 text-green-400 ring-1 ring-green-500/10"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <a 
                v-if="project.repoUrl"
                :href="project.repoUrl" 
                target="_blank" 
                class="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
              >
                <Icon name="mdi:github" class="text-xl" />
                Repositório
              </a>
              <a 
                v-if="project.liveUrl" 
                :href="project.liveUrl" 
                target="_blank" 
                class="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60"
              >
                <Icon name="mdi:web" class="text-xl" />
                Ver Online
              </a>
              <a
                v-if="project.instagramUrl"
                :href="project.instagramUrl"
                target="_blank"
                class="flex items-center gap-2 text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/60"
              >
                <Icon name="mdi:instagram" class="text-xl" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 pt-10 border-t border-gray-700">
        <h2 class="text-3xl font-bold text-center text-white mb-8">
          Conquistas em Hackathons
        </h2>
        <ul class="max-w-2xl mx-auto list-disc list-inside text-gray-300 text-lg space-y-2">
          <li><strong>2º Lugar</strong> - NASA Space Apps Challenge (Etapa Salvador).</li>
          <li><strong>3º Lugar</strong> - Hackathon CEPEDI (Desenvolvimento de Soluções para a Indústria).</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// --- DADOS DOS PROJETOS ---
// Projetos reais fornecidos pelo usuário.
const projects = [
  {
    title: 'INSS de Obras Smart — Sistema eSocial',
    description: 'Plataforma web multi-tenant para gestão de obras com envio prático de dados ao eSocial, integração com pagamentos e armazenamento em bucket.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Cloud', 'Segurança Multi-tenant', 'Git', 'Docker', 'Bucket Storage'],
    repoUrl: null,
    liveUrl: 'https://inssdeobrasmart.com.br',
    instagramUrl: 'https://www.instagram.com/inssdeobrasmart',
  },
  {
    title: 'Residência CEPEDI — Fullstack Pleno',
    description: 'Desenvolvimento fullstack de plataforma com autenticação e integrações. Atuação em API e front.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1080&q=80',
    technologies: ['FastAPI', 'Next.js', 'APIRequest', 'PostgreSQL', 'Docker', 'Git'],
    repoUrl: null,
    liveUrl: 'https://sasi.net.br',
    instagramUrl: "https://www.instagram.com/sasi_sistema/",
  },
  {
    title: 'Automatiza Brazil 4.0 — Sistema de Gestão',
    description: 'Plataforma de gestão empresarial para acompanhar vida útil de ativos, gerar orçamentos vinculados ao fluxo de caixa, emitir ordens de serviço e enviar documentos diretamente aos clientes, com armazenamento em bucket e instalação local.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWNvbW1lcmNlLGRhc2hib2FyZHx8fHx8fDE3MjgzMTQ0Mjg&ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Nuxt.js', 'NestJS', 'PostgreSQL', 'Bucket Storage', 'Instalação Local'],
    repoUrl: null,
    liveUrl: 'https://www.instagram.com/AutomatizaBrazil',
    instagramUrl: 'https://www.instagram.com/AutomatizaBrazil',
  },
];
</script>
