# 目录结构

```javascript
│  .babelrc							// babe配置
│  .editorconfig					// 代码风格配置
│  .eslintignore					// 代码检查忽略配置
│  .eslintrc.js						// 代码检查配置
│  .gitignore						// git忽略配置
│  .postcssrc.js					// 浏览器兼容配置
│  index.html						// 首页模板
│  jsconfig.json					// js配置
│  package-lock.json				// webpack锁定
│  package.json						// webpack配置
│  README.md						// 自述文档
│  
├─build								// webpack打包配置
│      
├─config							// 配置
│      dev.env.js					// 开发配置
│      index.js						// vue配置
│      prod.env.js					// 打包配置
│                  
├─src								// 源码
│  │  App.vue						// vue根文件
│  │  main.js						// 项目入口
│  │  
│  ├─assets							// 资源
│  │  │  
│  │  └─images						// 图片
│  │          
│  ├─components						//项目组件
│  │          
│  ├─http							// 接口
│  │      api.js					// 接口
│  │      core.js					// axios封装
│  │      http.js					// 
│  │      index.js					// axios导出
│  │      
│  ├─icon							// 图标
│  │  ├─ant
│  │  │      
│  │  └─rookie
│  │          
│  ├─layout							// 布局
│  │          
│  ├─router							// 路由
│  │      
│  ├─styles							// 样式
│  │      
│  ├─tools							// 常用工具
│  │      
│  ├─util							// 基础工具
│  │      
│  ├─views							// 页面
│  │          
│  └─vuex							// vuex
│              
└─static							// 静态文件
        
```