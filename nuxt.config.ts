// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:true,
  
  
  modules:[
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-mail',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    'nuxt-og-image',
    '@nuxt/ui'
  ],
  css:['~/assets/app.css'],

  mail:{
    message:{
      to:'abdfot16264@nbss.nbed.nb.ca'
    },
    smtp:{
      host:'smtp-mail.outlook.com',
      port:587
    }
  },
  googleFonts:{
    families:{
      'Open+Sans':true
    },
    display: 'swap', // Ensures fallback font is used temporarily until Open Sans loads
    preload: true // Preload the font to improve load time
  
  }

})