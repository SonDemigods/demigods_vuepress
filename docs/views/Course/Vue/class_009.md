---
title: vue教程009-vuex状态管理
date: 2020-06-18
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 状态管理

在实际业务中，经常会遇到多个页面使用同一个数据的情况，之前我们都是通过全局变量的方式去处理，在vue中则使用vuex进行状态管理。

### 安装

```sh
npm install vuex --save
```

### 创建store文件

store文件即vuex管理数据的配置文件，其中包括`seate`存储的数据、`getters`计算状态，类似于vue中的计算属性、`mutations`同步修改数据、`action`异步修改数据。

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
})

```

### 挂载到全局

在`main.js`中导入vuex并挂载。

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

### vuex的使用

首先导入状态管理的相关方法，包括同步提交和异步提交等方法。
```javascript
// vuex工具函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
```

在vue文件中使用vuex存储的数据和修改其中的数据。

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
      pageData: state => state.pageData
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
