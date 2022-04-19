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
        text: '介绍',
        link: '/'
      },
      {
        text: '使用',
        link: '/use/'
      },
      {
        text: '开发',
        link: '/code/'
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
            '/code/coding/java.md',
          ],
        },
      ],
    },
    plugins: [
      [
        "@vuepress/plugin-search",
        {
          locales: {
            "/": {
              placeholder: "搜索",
            },
          },
        },
      ],
    ],
  },
})
