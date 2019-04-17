export default {
  css: ['~/assets/main.css'],
  plugins: ['~/plugins/highlight.js', '~/plugins/clipboard.js'],
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-129681195-4',
        dev: false
      }
    ]
  ]
};
