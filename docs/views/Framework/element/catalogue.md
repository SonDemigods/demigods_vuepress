---
title: element目录说明
date: 2020-03-23
categories:
 - 框架
tags:
 - vue
 - element
 - 目录
---

## 目录结构

```javascript
│  .browserslistrc					// 浏览器兼容配置
│  .eslintrc.js						// 代码检查配置
│  .gitignore						// git忽略配置
│  babel.config.js					// babel配置
│  jsconfig.json					// js配置
│  package-lock.json				// 本地包锁定
│  package.json						// node项目配置
│  README.md						// 自述文档
│  
├─public							// 打包资源
│	   config.js					// 项目配置
│	   favicon.ico					// 网站图标
│	   index.html					// 首页模板
│                  
└─src								// 源码
   │  App.vue						// vue根文件
   │  main.js						// 项目入口
   │  
   ├─assets							// 资源
   │  │  
   │  └─images						// 图片
   │          
   ├─components						//项目组件
   │          
   ├─http							// 接口
   │      api.js					// 接口
   │      core.js					// axios封装
   │      index.js					// axios导出
   │      
   ├─icon							// 图标
   │  ├─ant
   │  │      
   │  └─rookie
   │          
   ├─layout							// 布局
   │          
   ├─router							// 路由
   │  
   ├─store							// vuex
   │ 
   ├─styles							// 样式
   │      
   ├─tools							// 常用工具
   │      
   ├─util							// 基础工具
   │      
   └─views							// 页面
        
```