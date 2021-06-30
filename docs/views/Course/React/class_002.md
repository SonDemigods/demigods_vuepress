---
title: react教程002-创建项目
date: 2021-06-28
categories:
 - react教程
tags:
 - 教程
 - react

---

## 创建react项目

运行`npx create-react-app <name>`创建一个新的项目。

## react项目说明

### 目录

```javascript
│  .browserslistrc					// 浏览器兼容配置
│  .eslintrc.js						// eslint配置
│  .gitignore						// git忽略配置
│  babel.config.js					// babel配置
│  package-lock.json				// 本地包锁定
│  package.json						// node项目配置
│  README.md						// 自述文档
│  
├─node_modules						// 本地npm包
│
├─public							// 打包目录
│      favicon.ico
│      index.html
│      
└─src								// 源码
    │  App.css						// 根组件样式
    │  App.js						// 根组件
	│  App.test.js					// 根组件测试
	│  index.css					// 入口样式
	│  index.js						// 项目入口
	│  logo.svg						// logo
	│  reportWebVitals.js			// 性能检测配置
	└─ setupTests.js				// 测试
```

### 项目运行和打包

在项目目录运行`npm run start` 可以启动项目。
![class_002_01](./assets/class_002_01.png)

在项目目录运行`npm run build` 可以打包项目。
![class_002_02](./assets/class_002_02.png)

上述命令对应`package.json`中`script`部分。
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```