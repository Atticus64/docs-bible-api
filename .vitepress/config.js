import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bible Api Docs",
  description: "A documentation for bible-api",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api/examples' }
    ],

    sidebar: [
      {
        text: 'Api Enpoints',
        items: [
          { text: 'Book', link: '/api/books' },
          { text: 'Search', link: '/api/search' },
          { text: 'Versions', link: '/api/versions' },
          { text: 'Verses', link: '/api/verses' },
          { text: 'Chapter', link: '/api/chapter' }
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Api Examples', link: '/api/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/atticus64/bibleapi' }
    ]
  }
})
