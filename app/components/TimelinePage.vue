<template>
  <section id="career" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6 md:px-12">

      <h2 class="text-4xl font-bold text-center text-white mb-4">
        Carreira e Formação
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-20"></div>

      <div class="relative max-w-4xl mx-auto">
        <div class="hidden md:block absolute left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2"></div>
        <div class="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gray-700"></div>

        <div class="mb-16">
          <h3 class="text-3xl font-bold text-center text-white mb-12">Experiência Profissional</h3>
          
          <div
            v-for="(job, index) in workExperience"
            :key="job.title"
            class="relative mb-8 flex flex-col md:flex-row md:justify-between items-center w-full pl-10 md:pl-0"
            :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
          >
            <div class="hidden md:block order-1 w-5/12"></div>
            <div class="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full absolute left-4 top-3 md:static">
              <v-icon icon="mdi-briefcase" class="text-white mx-auto text-lg" />
            </div>
            <div class="hidden md:block order-1 w-6 h-0.5 bg-gray-600"></div>
            <div class="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h4 class="font-bold text-white text-xl">{{ job.title }}</h4>
              <p class="font-semibold text-green-400 text-md mb-2">{{ job.company }} | {{ job.period }}</p>
              <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li v-for="desc in job.description" :key="desc">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-center text-white mb-12">Formação Acadêmica</h3>

          <div
            v-for="(edu, index) in education"
            :key="edu.course"
            class="relative mb-8 flex flex-col md:flex-row md:justify-between items-center w-full pl-10 md:pl-0"
            :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
          >
            <div class="hidden md:block order-1 w-5/12"></div>
            <div class="z-10 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full absolute left-4 top-3 md:static">
              <v-icon icon="mdi-school" class="text-white mx-auto text-lg" />
            </div>
            <div class="hidden md:block order-1 w-6 h-0.5 bg-gray-600"></div>
            <div class="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h4 class="font-bold text-white text-xl">{{ edu.course }}</h4>
              <p class="font-semibold text-blue-400 text-md">{{ edu.institution }} | {{ edu.period }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const workExperience = [
  {
    title: 'Desenvolvedor de Software',
    company: 'CEPEDI e freelancer',
    period: '2025 - Presente',
    description: [
      'Desenvolvimento de APIs RESTful com Nest.js e FastAPI.',
      'Criação de interfaces reativas com Nuxt.js (Vue) e Next.js (React).',
      'Gerenciamento de bancos de dados PostgreSQL e otimização de queries SQL.',
      'Implementação de pipelines de CI/CD com Docker e Git.'
    ]
  },
  {
    title: 'Coordenador de TI',
    company: 'TSJ Transportes',
    period: '2021 - 2025',
    description: [
      'Liderança de equipes de suporte e infraestrutura de TI.',
      'Gestão de projetos, otimizando processos e reduzindo custos operacionais.',
      'Análise de dados e criação de dashboards em Power BI para suporte à decisão.',
      'Responsável pela segurança da informação e infraestrutura de rede.'
    ]
  }
];

const education = [
{
    course: 'Imersão em Desenvolvimento Back-end (Java)',
    institution: 'Oracle ONE - Alura',
    period: '2025 - 2026'
  },
  {
    course: 'Técnico em Análise e Desenvolvimento de Sistemas',
    institution: 'SENAI CIMATEC - Vitória da Conquista - BA',
    period: '2023 - 2024'
  },
  {
    course: 'Técnico em Eletromecânica',
    institution: 'SENAI CIMATEC - Vitória da Conquista - BA',
    period: '2020 - 2022'
  }
];
</script>
