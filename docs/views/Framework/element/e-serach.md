---
title: e-search组件使用说明
date: 2020-05-20
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-search
本组件为列表查询的组件，实现了查询组件的基本功能，简化组件的使用，减少参数的传递和大量表单组件的使用。

## props

属性|说明|类型|默认值
-|-|-|-
formOptions|需要渲染的表单数组，详见`formOptions`|Array|[]
formLabelWidth|表单整体的label宽度|String|'80px'
refreshShow|是否显示【重置】按钮|Boolean|true

## events

名称|说明|参数
-|-|-
on-search|点击查询按钮时触发的方法|表单数据
on-refresh|点击重置按钮时触发的方法|表单数据
change-height|点击展开或关闭按钮时触发的方法|表单占用的高度

## formOptions
每个对象为表单的各种属性。

属性|说明|类型|默认值
-|-|-|-
label|表单显示的文字|String|''
type|表单的类型，`input`、`number`、`select`、`time`、`date`、`radio`、`checkbox`、`cascader`|String|''
key|表单数据中的key|String|''
props|原始组件的相关属性，参考各个`element-ui`的相关组件|Object|{}