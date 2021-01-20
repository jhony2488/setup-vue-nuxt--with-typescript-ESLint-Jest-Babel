export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    title: process.env.npm_package_name || 'setup-app-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { author: '' },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#214a81',
      },
      { hid: 'lang', name: 'lang', content: 'pt-br' },
      {
        hid: 'copyright',
        name: 'copyright',
        content: '© 2021',
      },
      { 'http-equiv': 'imagetoolbar', content: 'no' },
      { name: 'revisit-after', content: '15 days' },
      { name: 'creator', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: './favicon.png' },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    script: [
      {
        src: './scripts/js/jquery.js',
      },
      {
        src: '/scripts/js/allPolify.js',
        async: true,
      },
      {
        src: '/scripts/js/acessibilidade.js',
        async: true,
        defer: true,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.png' },
      { rel: 'icon', sizes: '16x16', href: './favicon.png' },
      { rel: 'icon', sizes: '32x32', href: './favicon.png' },
      { rel: 'icon', sizes: '57x57', href: './favicon.png' },
      { rel: 'icon', sizes: '60x60', href: './favicon.png' },
      { rel: 'icon', sizes: '72x72', href: './favicon.png' },
      { rel: 'icon', sizes: '76x76', href: './favicon.png' },
      { rel: 'icon', sizes: '96x96', href: './favicon.png' },
      { rel: 'icon', sizes: '114x114', href: './favicon.png' },
      { rel: 'icon', sizes: '120x120', href: './favicon.png' },
      { rel: 'icon', sizes: '144x144', href: './favicon.png' },
      { rel: 'icon', sizes: '152x152', href: './favicon.png' },
      { rel: 'icon', sizes: '180x180', href: './favicon.png' },
      { rel: 'icon', sizes: '192x192', href: './favicon.png' },

      { rel: 'apple-touch-icon', sizes: '16x16', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '32x32', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '96x96', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: './favicon.png' },
      { rel: 'apple-touch-icon', sizes: '192x192', href: './favicon.png' },
    ],
  },
  pwa: {
    manifest: {
      name: process.env.npm_package_name || '',
      description: process.env.npm_package_description || '',
      background_color: '#214a81',
      icon: {
        purpose: 'maskable',
        source: './favicon.png',
        icons: [
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '64x64',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '120x120',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '144x144',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '152x152',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '384x384',
          },
          {
            src: './favicon.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
      lang: 'pt-br',
      useWebmanifestExtension: false,
      theme_color: '#ffff',
      start_url: '',
      display: 'minimal-ui',
    },
    workbox: {
      /* workbox options */
      offlineAnalytics: true,
      cacheOptions: {
        cacheId: process.env.npm_package_name || '',
        directoryIndex: '/',
        offline: true,
        revision: undefined,
      },
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  loading: { color: 'blue ', height: '5px' },
  css: ['~assets/sass/main.scss'],
  generate: {
    fallback: true,
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['./assets/scripts/@types/index.ts', '@/plugins/vue-compiler.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
    'nuxt-i18n',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/sass/*.scss'],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  env: {
    baseUrl: process.env.BASE_URL,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
