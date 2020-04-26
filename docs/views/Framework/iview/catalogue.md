---
title: iview目录说明
date: 2019-07-08
categories:
 - 框架
tags:
 - vue
 - iview
 - 目录
---

## 目录结构

```javascript
│  .babelrc							// babel配置
│  .editorconfig					// 代码风格配置
│  .eslintignore					// 代码检查忽略配置
│  .eslintrc.js						// 代码检查配置
│  .gitignore						// git忽略配置
│  .postcssrc.js					// 浏览器兼容配置
│  cypress.json						// 集成测试配置
│  jsconfig.json					// js配置
│  LICENSE							// 开源协议
│  package-lock.json				// 本地包锁定
│  package.json						// node项目配置
│  README.md						// 自述文档
│  vue.config.js					// vue配置
│
├─public							// 打包文件夹
│  │  config.js						// 配置文件
│  │  favicon.ico					// 网站图标
│  │  index.html					// 首页模板
│  │  
│  └─WEB-INF						// tomcat默认页配置
│          
├─src								// 源码
│  │  App.vue						// vue根文件
│  │  index.less					// vue根样式
│  │  main.js						// 项目入口文件
│  │  
│  ├─api							// 接口
│  │      
│  ├─assets							// 资源
│  │  ├─icons						// 图标
│  │  │          
│  │  ├─images						// 图片
│  │  │          
│  │  └─theme						// 主题
│  │          
│  ├─components						// 项目组件
│  │          
│  ├─componentsLocale				// 项目组件国际化
│  │          
│  ├─config							// 配置入口
│  │      
│  ├─directive						// 自定义指令
│  │      
│  ├─libs							// 工具库
│  │      api.request.js			// axios导出
│  │      axios.js					// axios封装
│  │      excel.js					// excel工具
│  │      selectList.js				// 选择器默认列表
│  │      system.js					// 获取环境工具
│  │      tools.js					// 常用工具
│  │      util.js					// 基础工具
│  │      validate.js				// 验证方法
│  │      
│  ├─locale							// 国际化
│  │          
│  ├─mixins							// 混入方法
│  │      
│  ├─mock							// 模拟数据
│  │      
│  ├─plugin							// 插件
│  │          
│  ├─router							// 路由
│  │      
│  ├─store							// vuex
│  │               
│  └─view							// 页面
│                  
└─tests								// 集成测试

```