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
  ],
  head: {
    title: 'CSSFX - Beautifully simple click-to-copy CSS effects',
    meta: [
      { charset: 'utf8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use.'
      },
      {
        property: 'og:title',
        content: 'CSSFX - Beautifully simple click-to-copy CSS effects'
      },
      {
        property: 'og:description',
        content:
          'Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://cssfx.dev' },
      { property: 'og:image', content: 'http://cssfx.dev/logo.png' },
      {
        property: 'og:image:secure_url',
        content: 'https://cssfx.dev/logo.png'
      },
      { property: 'og:image:alt', content: 'cssfx logo' },
      { property: 'og:image:width', content: '1000' },
      { property: 'og:image:height', content: '800' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'msapplication-TileColor', content: '#0d0b1e' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600|Roboto+Mono'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0d0b1e' }
    ]
  }
};
