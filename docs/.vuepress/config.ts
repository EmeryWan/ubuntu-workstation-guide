import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  // 站点配置
  lang: 'zh-CN',
  title: 'ubuntu 简明指南',
  description: '使用 ubuntu 作为日常 工作 🧑🏻‍💻 娱乐 🍿 的系统',
  
  head: [
    ['link', { rel: 'icon', href: ''}],
  ],

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'emerywan/ubuntu-workstation-guide',
    docsDir: 'docs',
    navbar: [
      {
        text: '开始使用 👏',
        link: '/guide/'
      },
      {
        text: '开发相关 💻',
        link: '/code/'
      },
      {
        text: '推荐内容 🪁',
        link: '/tip/'
      }
    ],

    sidebar: {
      '/code': [
        {
          text: '环境安装',
          children: [
            '/code/install/java-install.md',
          ],
        },
        {
          text: '开发',
          children: [
            '/code/coding/deep-learning.md',
          ],
        },
      ],
    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],

})
