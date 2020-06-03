---
title: e-operation组件使用说明
date: 2020-05-25
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-operation
本组件为列表上方的操作组件，实现了操作组件的相关功能，包含`新增`、`编辑`、`删除`、`导入`、`导出`功能，还可以自定义按钮。

## props

属性|说明|类型|默认值
-|-|-|-
btns|需要渲染的按钮数组，详见`btns`|Array|[]

## events
以下为内置按钮触发的事件，需要在`btns`中配置相关按钮

名称|说明|参数
-|-|-
on-insert|点击新增按钮时触发的方法|无
on-update|点击编辑按钮时触发的方法|无
on-delete|点击删除按钮时触发的方法|无
on-import|点击导入按钮时触发的方法|无
on-export|点击导出按钮时触发的方法|无

## btns
可以为字符串和对象，字符串为内置按钮，对象为自定义按钮的各种属性。

### 内置按钮
名称|显示文字|图标|触发事件
-|-|-|-
insert|新增|plus|on-insert
update|编辑|edit|on-update
delete|删除|delete|on-delete
import|导入|upload2|on-import
export|导出|download|on-export

### 自定义按钮
属性|说明|类型|默认值
-|-|-|-
title|按钮显示的文字|String|''
icon|按钮显示的图标，详见`element-ui`图标|String|''
event|按钮触发的事件|String|''
props|按钮组件的相关属性，参考各个`element-ui`的按钮组件|Object|{}