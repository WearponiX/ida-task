export default {
  target: 'static',
  head: {
    title: 'ida-task',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/sass/_variables.scss',
      './assets/sass/_mixins.scss',
      './assets/sass/_animations.scss',
      './assets/sass/index.scss',
    ]
  },
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
}
