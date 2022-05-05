import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  // 站点配置
  lang: 'zh-CN',
  title: 'ubuntu 简明指南',
  description: '使用 ubuntu 作为日常 工作 🧑🏻‍💻 娱乐 🍿 的系统',
  
  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg'}],
  ],

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.svg',
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
      '/guide': [
        {
          text: '序言',
          children: [
            '/guide/prologue/index.md',
            '/guide/prologue/wiki.md',
            '/guide/prologue/need.md',
          ],
        },
        {
          text: '使用准备',
          children: [
            '/guide/prepare/hardware.md',
            '/guide/prepare/distribution.md',
            '/guide/prepare/media-and-setting.md',
          ],
        },
        {
          text: '安装详解',
          children: [
            '/guide/prepare/native.md',
            '/guide/prepare/virtual.md',
            '/guide/prepare/graphics.md',
          ],
        },
        {
          text: '基础知识',
          children: [
            '/guide/base/linux.md',
            '/guide/base/ubuntu.md',
          ],
        },
        {
          text: '使用配置',
          children: [
            '/guide/use/basic.md',
            '/guide/use/advanced.md',
            '/guide/use/beauty.md',
          ],
        },
        {
          text: '常用软件',
          children: [
            '/guide/app/daily.md',
            '/guide/app/office.md',
            '/guide/app/communication.md',
            '/guide/app/amusement.md',
            '/guide/app/code.md',
          ],
        }
      ],

      '/code': [
        {
          text: '开发环境',
          children: [
            '/code/install/java.md',
            '/code/install/node.md',
            '/code/install/python.md',
            '/code/install/docker.md',
          ],
        },
        {
          text: '开发',
          children: [
            '/code/coding/deep-learning.md',
          ],
        },
      ],

      '/tip': [
        {
          text: '开发',
          children: [
            '/tip/github.md',
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
