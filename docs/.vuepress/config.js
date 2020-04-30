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
        'url': 'https://m801.music.126.net/20200401140539/d3372a6f959698770d17fd5ea4df086c/jdyyaac/5458/055c/005a/c273dcddc9260bdf43477011a3464ce7.m4a',
        'cover': 'https://p1.music.126.net/HxhkHA6NWjrXASgmXiNXRw==/1407374891536105.jpg'
      },
      {
        'name': '里の秋',
        'artist': 'さだまさし',
        'url': 'https://m701.music.126.net/20200401134813/f51e86dd8a1d14ddb3f59991b00bfda1/jdyyaac/515f/075e/0159/f5ce2f624b0431f5b5a6639588b95112.m4a',
        'cover': 'https://p1.music.126.net/_Q10akDglE0wNV4tbV_aEA==/2480498232287561.jpg'
      },
      {
        'name': 'Braveheart Theme',
        'artist': 'William Jackson',
        'url': 'https://m801.music.126.net/20200401140640/325d1160051e6c7873407121eb0dc1c0/jdyyaac/050f/0352/040c/2e6a6fabf448ed9f50bd3f2f491e6dc6.m4a',
        'cover': 'https://p1.music.126.net/6P2498qDeCRFjBllej4AfQ==/829031767395984.jpg'
      },
      {
        'name': 'Game of Thrones Orchestra',
        'artist': '孟晓洁Jae',
        'url': 'https://m10.music.126.net/20200401133033/3fee6107d08b8160a842070e1cbfecce/ymusic/545f/555c/565a/c5df2ddae0b61887ad09a042b8ac6692.mp3',
        'cover': 'https://p1.music.126.net/IYq4E6kYALau2Dy8F63dTg==/109951164001378057.jpg'
      },
      {
        'name': 'China-P',
        'artist': '徐梦圆',
        'url': 'http://m701.music.126.net/20200401131414/d3f6e24bc3444fdc22a1cd3487d52b26/jdyyaac/5658/5408/030b/a218dd3791cb8a16a6044a1712ddceb4.m4a',
        'cover': 'http://p1.music.126.net/qxhi4CQFa1iXeeHhEaOBNg==/17961621951438972.jpg'
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
    // 阅读进度条
    ['reading-progress']
  ]
}