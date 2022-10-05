export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng',
    htmlAttrs: { lang: 'vi' },
    meta: [
      // General
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hệ thống 100 cửa hàng bán lẻ điện thoại, máy tính laptop, smartwatch, smarthome, thiết bị IT, phụ kiện chính hãng - Giá tốt, trả góp 0%, giao miễn phí.' },
      { hid: 'keywords', name: 'keywords', content: 'cellphones, cellphone, cellphone s, cell phones, cell phone' },
      { name: 'url', content: 'https://cellphones.com.vn' },
      { name: 'robots', content: 'INDEX,FOLLOW' },
      { rel: 'canonical', content: 'https://cellphones.com.vn' },
      { name: 'format-detection', content: 'telephone=no' },
      // Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'content="vi_VN"' },
      { property: 'og:title', content: 'CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng' },
      { property: 'og:site_name', content: 'CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng' },
      { property: 'og:description', content: 'Hệ thống 100 cửa hàng bán lẻ điện thoại, máy tính laptop, smartwatch, smarthome, thiết bị IT, phụ kiện chính hãng - Giá tốt, trả góp 0%, giao miễn phí.' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon/logo-cps.png'
      },
      {
        rel: 'manifest',
        href: '/favicon/manifest.json'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/dayjs'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash-es'],
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    }
  },

  // Router Configuration
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/:catchAll(.*)',
        component: resolve(__dirname, 'pages/exception/404.vue')
      })
    },
    middleware: []
  }
}
