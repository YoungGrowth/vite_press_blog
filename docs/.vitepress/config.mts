import { defineConfig } from 'vitepress'
import sidebar from './sidebar/sidebar.mjs'
import router from './router/router.mts'
import navbar from './navbar/index.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "共享资源库",
  description: "A demo",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  rewrites: router,
  themeConfig: {
    logo: '/logo.png',
    nav: navbar,
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present VitePress'
    }
  }
})
