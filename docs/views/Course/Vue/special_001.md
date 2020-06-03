---
title: vue教程特别篇001-element-ui
date: 2020-06-02
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 必备技能

### 简介
`element-ui`是基于`vue`开发的ui框架，拥有出色的性能，丰富的组件，美观的效果，在各类型的项目中都可以使用这套ui框架

### 开发环境
* node
* vue-cli
* vs code

## 初始化项目

### 使用vue-cli创建项目
> [官方文档](https://cli.vuejs.org/zh/guide/installation.html)

运行 `vue create`命令创建一个vue项目。

```sh
vue create <name>
```
选择合适的项目配置，当前配置如下：
* babel
* router
* vuex
* css-processors
* linter/formatter
* history
* sass/scss（with node-sass）
* eslint with error prevention only
* lint on save
* in dedicated config files

## 集成element-ui

### 安装
> [官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

在项目根目录下运行`npm i element-ui -S`

安装完后在根目录的`package.json`文件中会有如下数据
```json
"element-ui": "^2.13.1"
```

### 使用

在/src目录下的`main.js`中添加如下代码
```javascript
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用ElementUI
Vue.use(ElementUI)
```

## 使用组件
`element-ui`会把所有组件注册为全局组件

### 使用el-table组件

```vue
<template>
  <div>
    <el-table :data="tableData"
              stripe
              border
              size="mini"
              @row-click="handleTableClick"
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  props: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]

    }
  },
  watch: {},
  computed: {},
  methods: {
    handleTableClick (row, column, event) {
      console.log({ row, column, event })
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>

```

### 文档使用说明

以`el-table`组件为例，说明文档主要分为两部分，即实例演示部分和属性事件说明部分。

* 实例部分
  此部分为简单的使用的实例演示。
* 属性事件说明部分
  该部分主要分为2部分，即属性部分和事件部分。
  
  props属性为组件接收的参数，类似于函数接收的参数，一般使用`:xxx`的方式传递。
  
  events事件为组件触发的事件，例如点击事件等，一般使用`@xxx`绑定触发事件时执行的函数。