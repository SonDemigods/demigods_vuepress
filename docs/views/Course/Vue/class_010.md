---
title: vue教程010-vue-router
date: 2020-06-18
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## vue-router

单页面应用必然会使用vue-router管理前端的路由。

### 安装

```sh
npm install vue-router
```

### 创建router文件

router.js文件即路由的配置文件，以数组的形式存储路由信息，其标准格式如下。

```javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'http:xxx.com',
  routes: [{
    path: '/page',
    name: 'page',
    component: import('@/components/page'),
    meta: { title: '页面', path: '/page' }
  }]
})

export default router

```

### 挂载到全局

在`main.js`中导入vue-router并挂载。

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

### 跳转页面

```javascript
// 添加历史记录
this.$router.push({ name: 'page'})

// 不添加历史记录
this.$router.replace({name: 'page'})
```

### 动态路由

```javascript
const routers = [{
  path: '/page/:id',
  name: 'page',
  component: import('@/components/page'),
  meta: { title: '页面', path: '/page' }
}]

// 跳转页面
this.$router.push({ path: '/page/123'})

// 组件内获取id参数
const id = this.$route.params.id

```

### 带参路由

```javascript

// 跳转页面
this.$router.push({ 
  name: 'page',
  query: {
    id: '123'
  }
})

// 组件内获取id参数
const id = this.$route.query.id

```

### 导航守卫

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: 'http:xxx.com',
  routes: [{
    path: '/page',
    name: 'page',
    component: import('@/components/page'),
    meta: { title: '页面', path: '/page' }
  }]
})

// 全局的路由守卫
router.beforeEach((to, from, next) => {
  next()
})

// 独享的路由守卫
const routers = [{
  path: '/page',
  name: 'page',
  component: import('@/components/page'),
  beforeEnter: (to, from, next) => {
    next()
  },
  meta: { title: '页面', path: '/page' }
}]
```

### 路由元信息 

```javascript
const routers = [{
  path: '/page',
  name: 'page',
  component: import('@/components/page'),
  beforeEnter: (to, from, next) => {
    next()
  },
  // 路由元信息
  meta: { title: '页面', path: '/page' }
}]
```

### 组件懒加载

```javascript
const routers = [{
  path: '/page',
  name: 'page',
  // 路由元信息
  component: import('@/components/page'),
  beforeEnter: (to, from, next) => {
    next()
  },
  meta: { title: '页面', path: '/page' }
}]
```
