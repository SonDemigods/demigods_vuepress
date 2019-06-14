module.exports = {
  title: '陨落的半神',
  description: '个人博客及作品展示',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 导航
    nav: [{
        text: 'HTML',
        link: '/HTML/'
      },
      {
        text: 'CSS',
        link: '/CSS/'
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/'
      },
      {
        text: 'About',
        link: '/About/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/SonDemigods'
      }
    ],
    // 侧边栏
    sidebar: {
      '/HTML/': [
        ''
      ],
      '/CSS/': [
        ''
      ],
      '/JavaScript/': [
        '',
        'catalogue',
        'config',
        'util',
        'tool',
        'validate',
        'ajax'
      ],
      '/About/': [
        ''
      ],
      // fallback
      '/': [
        ''
      ]
    }
  }
}