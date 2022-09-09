import { defineConfig } from 'vitepress'

const themeConfig = {
  logo: '/logo.png',
  socialLinks: [
    { icon: 'github', link: 'https://github.com/luckept/learn-vue3-sourcecode' },
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-present Luckept'
  },
}

export default defineConfig({
  title: 'Learn Vue3 Sourcecode',
  themeConfig,
  appearance: false,
})

