---
title: vue-router配置说明
date: 2019-06-14
categories:
 - 框架
tags:
 - vue
 - vue-router
---

## 目录

```javascript
index.js						// router入口
xxx.router.js					// router模块
```

## 入口文件

```javascript
import Vue from 'vue'
import Router from 'vue-router'

// 动态引入路由文件
const routerList = []

function importAll (r) {
  r.keys().map(value => {
    r(value).default.map(item => {
      routerList.push(item)
    })
  })
}

importAll(require.context('.', true, /\.router\.js/))

Vue.use(Router)

const router = new Router({
  routes: []
})

export default router
```

## 模块文件

```javascript
const page = () => require.ensure([], () => (require('@/views/page')), 'page')

export default [
  {
    path: '/page',
    name: 'page',
    component: page,
    meta: { title: '页面', path: '/page' }
  }
]

```

## 参考资料

[官方文档](https://router.vuejs.org/zh/)