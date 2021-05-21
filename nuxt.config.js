export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luella Photography',
    titleTemplate: '%s | Luella Photography',

    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Let me help you bring your visions to life! Providing high fidelity photography and editing' },
      { hid: 'twitter:title', name: "twitter:title", content:"Luella Photography"},

      { hid: 'twitter:description', name: "twitter:description", content:"Let me help you bring your visions to life! Providing high fidelity photography and editing"},
      { hid: 'twitter:url', name: "twitter:url", content:"https://luella.photography/"},
      { hid: 'twitter:card', name: "twitter:card", content:"summary_large_image"},
      { hid: 'twitter:image', name: "twitter:image", content:"-"},

      { hid: 'og:type', name: "og:type", content:"website"},
      { hid: 'og:title', name: "og:title", content:"Luella Photography"},
      { hid: 'og:description', name: "og:description", content:"Let me help you bring your visions to life! Providing high fidelity photography and editing"},
      { hid: 'og:url', name: "og:url", content:"https://luella.photography/"},
      { hid: 'og:image', name: "og:image", content:"-"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vueBurger.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
