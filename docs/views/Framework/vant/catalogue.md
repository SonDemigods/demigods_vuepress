---
title: vant目录说明
date: 2019-07-09
categories:
 - 框架
tags:
 - vue
 - vant
 - 目录
---
# 目录结构

```javascript
│  .gitignore						// git忽略配置
│  babel.config.js					// babel配置
│  LICENSE							// 开源协议
│  package.json						// webpack配置
│  README.md						// 自述文档
│  vue.config.js					// vue 配置
│  
├─public							// 打包文件夹
│      config.js					// 配置文件
│      favicon.ico					// 网站图标
│      index.html					// 首页模板
│      
└─src								// 源码
    │  App.vue						// vue根文件
    │  main.js						// 项目入口文件
    │  router.js					// 路由文件
    │  
    ├─api							// 接口
    │      
    ├─asset							// 资源
    │  ├─icon						// 图标
    │  ├─image						// 图片
    │  └─theme						// 主题
    │          
    ├─config						// 配置文件
    │      
    ├─lib							// 工具库
    │      api.request.js			// axios导出
    │      axios.js					// axios封装
    │      selectList.js			// 选择器默认列表
    │      tools.js					// 常用工具
    │      util.js					// 基础工具
    │      validate.js				// 验证方法
    │      
    ├─store							// vuex
    │          
    └─view							// 页面

```
