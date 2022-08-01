import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/',
  title: 'ubuntu 简明指南',
  description: '使用 ubuntu 作为日常 工作 🧑🏻‍💻 娱乐 🍿 的系统',


  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg'}],
  ],


  theme: defaultTheme({
    logo: '/images/logo.svg',
    repo: 'emerywan/ubuntu-workstation-guide',
    docsDir: 'docs',
    contributors: false,
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
            '/guide/prepare/driver.md',
            '/guide/prepare/virtual.md',
          ],
        },
        {
          text: '基础知识',
          children: [
            '/guide/base/linux.md',
            '/guide/base/directory.md',
            '/guide/base/ubuntu.md',
          ],
        },
        {
          text: '使用配置',
          children: [
            '/guide/use/basic.md',
            '/guide/use/advanced.md',
            '/guide/use/beauty.md',
            '/guide/use/network.md',
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
            '/code/install/go.md',
            '/code/install/cuda.md',
          ],
        },
        {
          text: '工具',
          children: [
            '/code/tool/docker.md',
            '/code/tool/mysql.md',
            '/code/tool/redis.md',
            '/code/tool/mongodb.md',
            '/code/tool/rabbitmq.md',
            '/code/tool/rocketmq.md',
            '/code/tool/kafka.md',
            '/code/tool/zookeeper.md',
            '/code/tool/elasticsearch.md',
            '/code/tool/nginx.md',
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
          text: '推荐',
          children: [
            '/tip/recommend.md',
            '/tip/github.md',
            '/tip/top_linux_commands.md',
            '/tip/resourse.md'
          ],
        },
        {
          text: '玩法',
          children: [
            '/tip/pan.md',
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        }
      }
    }),
  ],

})
