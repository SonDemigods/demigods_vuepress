---
title: e-pagination组件使用说明
date: 2020-04-16
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-pagination
本组件为`element-ui`中`el-pagination`组件的二次封装，简化传递参数。
部分参数修改了默认值。
该组件已全局注册，直接使用即可。
该文档只说明与原`el-pagination`组件的区别和新增项。

## props
该项对应原组件`Attributes`

### 修改的属性

属性|说明|类型|默认值
-|-|-|-
total|总条目数|Number|0
page-sizes|每页显示个数选择器的选项设置|Array|[10,20,50,100]
layout|组件布局，子组件名用逗号分隔|String|'total, sizes, prev, pager, next, jumper'

## 参考资料
element-ui中的[el-pagination](https://element.eleme.cn/#/zh-CN/component/pagination)组件相关说明

