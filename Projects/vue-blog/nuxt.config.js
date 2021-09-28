export default {
  mode:'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "vue-blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
      }
    ]
  },

  // Progress bar color //
  loading: {
    color: 'yellow',
    height: '2px',
    throttle: 0
   },

  //  loadingIndicator: {  >> // Only works in spa mode
  //    name:'circle',
  //    color:'#797979',
  //  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css' // define styles globally
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://vue-blog-a3fc2-default-rtdb.europe-west1.firebasedatabase.app',
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Environment variables
  env: {
    baseUrl: process.env.BASE_URL || 'https://vue-blog-a3fc2-default-rtdb.europe-west1.firebasedatabase.app'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
};
