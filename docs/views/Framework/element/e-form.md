---
title: e-form组件使用说明
date: 2020-09-21
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-form
本组件为表单组件，实现了表单的基本功能，简化组件的使用，减少参数的传递和大量表单组件的使用。

## props

属性|说明|类型|默认值
-|-|-|-
formOptions|需要渲染的表单数组，详见`formOptions`|Array|[]
formDataCurrent|需要绑定的表单数据|Object|{}

## formOptions
每个对象为表单的各种属性。

属性|说明|类型|默认值
-|-|-|-
label|表单显示的文字|String|''
type|表单的类型，`input`、`number`、`select`、`time`、`date`、`radio`、`checkbox`、`cascader`|String|''
key|表单数据中的key|String|''
props|原始组件的相关属性，参考各个`element-ui`的相关组件|Object|{}