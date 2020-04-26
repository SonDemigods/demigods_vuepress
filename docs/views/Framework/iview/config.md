---
title: iview配置说明
date: 2019-07-09
categories:
 - 框架
tags:
 - vue
 - iview
 - config
---

## 配置项

名称|类型|说明
---|---|---
cookieExpires|number|cookie存储时间，单位/天
useI18n|boolean|是否使用国际化
plugin|object|需要加载的插件
online|boolean|是否网络版
baseUrl|object|ajax请求基础路径，dev：开发；pro：打包
homeName|string|首页路由的name
systemName|string|当前系统的名称
productName|string|平台的名称
loginUrl|string|平台的登录地址
theme|string|主题名称
themeList|array|主题列表
sizeList|array|字号列表

*注：当前主题不可动态切换