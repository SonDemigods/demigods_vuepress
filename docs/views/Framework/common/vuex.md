---
title: vuex文件结构说明
date: 2020-03-24
categories:
 - 框架
tags:
 - vue
 - vuex
---

# vuex文件结构
vuex的使用说明

## 目录
```javascript
│  store.js						// vuex主文件
│  
└─modules						// vuex模块
```

## 文件

```javascript
export default {
  state: {},					// 状态
  getters: {},					// 计算状态
  mutations: {},				// 提交
  actions: {}					// 异步提交
}
```

## 参考资料

[官方文档](https://vuex.vuejs.org/zh/)