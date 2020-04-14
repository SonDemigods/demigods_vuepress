---
title: 组件说明
date: 2020-04-14
categories:
 - 组件
tags:
 - javascript
 - component
---
# components

组件说明及实例,
* vue文件遵循文件结构规范[vue文件结构规范](../common/pageRule.md)
* 工具文件需要导出工具方法

## 目录

```javascript
└─ e-xxx							// 组件文件夹
	  e-xxx.vue						// 组件源码
	  index.js						// 导出组件
```

## vue组件规范
本规范基于vue文件结构规范，如有冲突，请以本规范为准。

* 组件名都使用`e-`开头
* 组件内`name`字段首字母大写去掉`-`
```
export default {
  name: 'Exxx'
}
```
* 组件必须配有md说明文档