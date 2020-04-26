---
title: vuex文件结构说明
date: 2020-03-24
categories:
 - 规范
tags:
 - vue
 - vuex
---

## 目录
```javascript
│  index.js						// vuex主文件
│  
└─modules						// vuex模块
```

## 文件

```javascript
export default {
  state: {},					// 状态
  getters: {},					// 计算状态
  mutations: {},				// 同步提交
  actions: {}					// 异步提交
}
```

## 实例

### index.js文件
将demo.js引入index.js中，作为一个模块使用
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import demo from './module/demo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    demo
  }
})

```

### demo.js文件

```javascript
// 引入工具函数
import tools from '@/tools'

// 引入axios
import api from '@/api'

export default {
  // 状态
  state: {
    // 实例为json数据
    // 使用本地存储处理页面刷新后数据丢失的问题
    pageData: tools.localRead('pageData') ? JSON.parse(tools.localRead('pageData')) : {}
  },
  // 计算状态
  getters: {
    // 根据id查询页面数据
    getPageDataById: (state) => (id = '') => {
      return state.pageData[id] ? state.pageData[id] : {}
    }
  },
  // 同步提交
  mutations: {
    // 添加页面数据
    addPageDataById (state, info = {}) {
      let data = {
        ...state.pageData
      }
      if (info.id) {
        data[info.id] = {
          ...info
        }
      }
      state.pageData = data
      tools.localSave('pageData', JSON.stringify(data))
    },
    // 根据页面数据id删除页面数据
    removePageDataById (state, id = '') {
      // 删除数据
      let data = {
        ...state.pageData
      }
      delete data[id]
      state.pageData = data
      tools.localSave('pageData', JSON.stringify(data))
    }
  },
  // 异步提交
  active: {
    // 根据远程数据更新本地数据
    uploadPageDataById ({ commit }, id = '') {
      const url = `url?id=${id}`
      api.get(url).then(res => {
        commit('addPageDataById', res.data)
      })
    }
  }
}

```

### vue文件
在vue文件中的使用方式
```vue
<template>
  <div></div>
</template>

<script>
// vuex工具函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'vuex-demo',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  watch: {},
  computed: {
    // 导入状态
    ...mapState({
      pageData: state => state.demo.pageData
    }),
    // 导入计算状态
    ...mapGetters(['getPageDataById'])
  },
  methods: {
    // 导入同步方法
    ...mapMutations([
      'addPageDataById',
      'removePageDataById'
    ]),
    // 导入异步方法
    ...mapActions(['uploadPageDataById']),
    // 调用导入的数据
    getDataByid (id = '') {
      return this.getPageDataById(id)
    },
    // 调用导入的方法
    addDataById (info = {}) {
      this.addPageDataById(info)
    },
    removePageDataById (id = '') {
      this.removePageDataById(id)
    },
    addDataById (id = '') {
      this.uploadPageDataById(id)
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>
```

## 参考资料

[官方文档](https://vuex.vuejs.org/zh/)