<template>
  <section id="projects" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6 md:px-12">

      <h2 class="text-4xl font-bold text-center text-white mb-4">
        Projetos em Destaque
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img :src="project.image" :alt="`Imagem do projeto ${project.title}`" class="w-full h-48 object-cover">
          
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            
            <div class="mb-6">
              <p class="text-white font-semibold mb-2">Tecnologias:</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  class="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <a 
                :href="project.repoUrl" 
                target="_blank" 
                class="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Icon name="mdi:github" class="text-xl" />
                Repositório
              </a>
              <a 
                v-if="project.liveUrl" 
                :href="project.liveUrl" 
                target="_blank" 
                class="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Icon name="mdi:web" class="text-xl" />
                Ver Online
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
          <li>Menção Honrosa por Inovação em Hackathon de Logística.</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// --- DADOS DOS PROJETOS ---
// Preencha esta lista com seus projetos. Use uma URL de placeholder para as imagens.
const projects = [
  {
    title: 'Projeto Alpha',
    description: 'Um sistema de gerenciamento de inventário para otimizar processos logísticos, desenvolvido com uma API robusta e um front-end reativo.',
    image: 'https://images.unsplash.com/photo-1586953208448-3151cf797f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwLGRhc2hib2FyZHx8fHx8fDE3Mjg4NjQ4OTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    technologies: ['Nuxt.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/seu-usuario/projeto-alpha',
    liveUrl: 'https://projeto-alpha.vercel.app', // Deixe como null se não houver link online
  },
  {
    title: 'API de Micro-serviços Beta',
    description: 'Uma arquitetura de micro-serviços para uma plataforma de e-commerce, focada em escalabilidade e performance com Nest.js.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBpLGNvZGV8fHx8fHwxNzI4ODY0OTQ3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    technologies: ['Nest.js', 'TypeScript', 'Docker', 'RabbitMQ'],
    repoUrl: 'https://github.com/seu-usuario/projeto-beta',
    liveUrl: null,
  },
  {
    title: 'Dashboard de BI Gamma',
    description: 'Visualização de dados interativa para análise de performance de vendas, conectando múltiplas fontes de dados em tempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGFzaGJvYXJkLGRhdGF8fHx8fHwxNzI4ODY1MDAy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    technologies: ['Power BI', 'SQL Server', 'Python (ETL)'],
    repoUrl: 'https://github.com/seu-usuario/projeto-gamma',
    liveUrl: 'https://power-bi-gamma-live.com',
  },
];
</script>