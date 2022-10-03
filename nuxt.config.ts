import { defineNuxtConfig } from 'nuxt'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  unocss: {
    preflight: true,
    icons: true,
    webFonts: true,
    transformers: [transformerDirectives(), transformerVariantGroup()],
  },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@formkit/nuxt'
  ],
})
