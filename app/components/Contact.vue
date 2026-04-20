<template>
  <section id="contact" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6 md:px-12 text-center">

      <h2 class="text-4xl font-bold text-white mb-4">
        Conecte-se Comigo
      </h2>
      <div class="w-24 h-1 bg-green-500 mx-auto mb-10"></div>

      <div class="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 flex-col gap-5">
        <a
          v-for="item in contacts"
          :key="item.label"
          :href="item.href"
          target="_blank"
          class="flex items-center justify-center gap-4 w-auto text-white font-bold p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          :class="item.classes"
        >
          <v-icon :icon="item.icon" class="text-3xl" />
          <span class="text-lg">{{ item.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// URL do WhatsApp com mensagem pré-definida e codificada
const whatsappUrl = 'https://wa.me/5571996585476?text=Olá!%20Vi%20seu%20portfólio%20e%20fiquei%20interessado.';

type ContactItem = {
  label: string
  href: string
  icon: string
  classes: string
}

const contacts: ContactItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/jefersonbluz',
    icon: 'mdi-github',
    classes: 'bg-gray-700 hover:bg-gray-600'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jefersonbluz/',
    icon: 'mdi-linkedin',
    classes: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    label: 'E-mail',
    href: 'mailto:jefersonbrluz@gmail.com',
    icon: 'mdi-email-outline',
    classes: 'bg-red-600 hover:bg-red-700'
  },
  {
    label: 'WhatsApp',
    href: whatsappUrl,
    icon: 'mdi-whatsapp',
    classes: 'bg-green-600 hover:bg-green-700'
  }
]
</script>
