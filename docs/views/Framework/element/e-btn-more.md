---
title: e-btn-more组件使用说明
date: 2020-05-20
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-btn-more
本组件为`e-table`中操作列中扩展的按钮组件，实现操作按钮的合并，简化按钮布局，折叠部分不常用按钮。

## props

属性|说明|类型|默认值
-|-|-|-
btns|需要渲染的按钮数组，详见`btns`|Array|[]
row|当前行的数据|Object|{}

## events

名称|说明|参数
-|-|-
on-xxx|按钮点击时触发的方法，详见`btns`|当前行的数据


## btns
该数组可以中可以是字符串`String`和对象`Object`，字符串为内置按钮的名称，提供常用的按钮；对象为按钮的各种属性。

属性|说明|类型|默认值
-|-|-|-
title|按钮显示的文字|String|''
event|点击触发的方法|String|''
