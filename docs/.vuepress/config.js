module.exports = {
  'title': '陨落的半神',
  'description': '剥开情感的外衣，找寻技术的真谛',
  'dest': 'public',
  // 发布到github.io需要添加base
  // 'base': '/demigods_vuepress/',
  'head': [
    [
      'link',
      {
        'rel': 'icon',
        'href': '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        'name': 'viewport',
        'content': 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  'theme': 'reco',
  'themeConfig': {
    'nav': [
      {
        'text': '首页',
        'link': '/',
        'icon': 'reco-home'
      },
      {
        'text': '教程',
        'link': '/tags/教程/',
        'icon': 'reco-document',
        'items': [{
          'text': 'Vue',
          'link': '/categories/vue教程/'
        }]
      },
      {
        'text': '时间线',
        'link': '/timeline/',
        'icon': 'reco-date'
      },
      {
        'text': '联系我',
        'icon': 'reco-message',
        'items': [
          {
            'text': 'GitHub',
            'link': 'https://github.com/SonDemigods',
            'icon': 'reco-github'
          }
        ]
      }
    ],
    'type': 'blog',
    'blogConfig': {
      'category': {
        'location': 2,
        'text': '分类'
      },
      'tag': {
        'location': 3,
        'text': '标签'
      }
    },
    'friendLink': [
      {
        'title': 'vuepress-theme-reco',
        'desc': 'A simple and beautiful vuepress Blog & Doc theme.',
        'avatar': 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        'link': 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    'logo': '/logo.png',
    'search': true,
    'searchMaxSuggestions': 10,
    'sidebar': 'auto',
    'lastUpdated': '更新时间',
    'author': '陨落的半神',
    'authorAvatar': '/avatar.jpg',
    // 备案配置
    'record': '津ICP备17010288号',
    'recordLink': 'http://www.beian.miit.gov.cn',
    // 'cyberSecurityRecord': '公安部备案文案',
    // 'cyberSecurityLink': '公安部备案指向链接',
    // 项目开始时间，只填写年份
    'startYear': '2018',
  },
  'markdown': {
    'lineNumbers': true
  },
  'plugins': [
    // 支持流程图
    ['flowchart'],
    // BGM播放器
    ['@vuepress-reco/vuepress-plugin-bgm-player', {
      'shrinkMode': 'mini',
      'audios': [{
        'name': 'Natural Grace',
        'artist': 'Dan Gibson / John Herberman',
        'url': '/bgm/01.mp3',
        'cover': '/bgm/01.jpg'
      },
      {
        'name': '里の秋',
        'artist': 'さだまさし',
        'url': '/bgm/02.mp3',
        'cover': '/bgm/02.jpg'
      },
      {
        'name': 'Braveheart Theme',
        'artist': 'William Jackson',
        'url': '/bgm/03.mp3',
        'cover': '/bgm/03.jpg'
      },
      {
        'name': 'Game of Thrones Orchestra',
        'artist': '孟晓洁Jae',
        'url': '/bgm/04.mp3',
        'cover': '/bgm/04.jpg'
      },
      {
        'name': 'China-P',
        'artist': '徐梦圆',
        'url': '/bgm/05.mp3',
        'cover': '/bgm/05.jpg'
      }]
    }],
    // 平滑滚动
    ['vuepress-plugin-smooth-scroll'],
    // 更新时间
    ['@vuepress/last-updated', {
      transformer: (timestamp) => {
        const moment = require('moment')
        moment.locale('zh-CN')
        return moment(timestamp).format('llll')
      }
    }],
    // 图片放大
    ['@vuepress/medium-zoom', {
      selector: '.theme-reco-content :not(a) > img'
    }],
    // 加载进度条
    ['@vuepress/nprogress'],
    // 新内容刷新
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    }],
    // 阅读进度条
    ['reading-progress']
  ]
}