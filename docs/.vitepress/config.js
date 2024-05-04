// import sidebar from './configs/sidebar';
import nav from './configs/nav';

import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

const taskLists = require('markdown-it-task-checkbox')

export default {
  title: 'vitepress-template',
  dist: '/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  vite: {
    plugins: [
      AutoSidebar({
        collapsed: false,
        titleFromFile: true,
      }),
    ],
  },
  markdown: {
    config: (md) => {
      md.use(taskLists, { 
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
    }
  },
  themeConfig: {
    siteTitle: 'vitepress-template💡',
    // sidebar,
    nav,
    editLink: {
      pattern: 'https://github.com/dlzmoe/vitepress-template/blob/main/docs/:path',
      text: 'Edit this article on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dlzmoe/vitepress-template' },
      { icon: 'twitter', link: 'https://twitter.com/dlzmoe' },
      { icon: 'discord', link: 'https://discord.gg/7u7kGgJhXF' },
    ],
    lastUpdated: false,
    lastUpdatedText: 'Update',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 - 2024 dlzmoe'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}