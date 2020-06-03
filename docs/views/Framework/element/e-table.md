---
title: e-table组件使用说明
date: 2020-04-13
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-table
本组件为`element-ui`中`el-table`和`el-pagination`组件的二次封装，集成分页组件，简化传递参数；列数据和表格数据单独传递，减少插槽的使用。
该组件已全局注册，直接使用即可。
该文档只说明与原`el-table`组件的区别和新增项。

## props
该项对应原组件`Table Attributes`

### 新增的属性

属性|说明|类型|默认值
-|-|-|-
columns|表格列配置，详见原组件`Table-column Attributes`说明|Array|[]
page-show|是否显示分页|Boolean|true
total|总数|Number|0
current|当前页|Number|1
page-option|分页组件配置，详见`e-page`组件|Object|{}

## events
该项对应原组件`Table Events`

### 新增的方法

名称|说明|参数
-|-|-
page-size-change|pageSize 改变时会触发|每页条数
page-current-change|currentPage 改变时会触发|当前页
page-prev-click|用户点击上一页按钮改变当前页后触发|当前页
page-next-click|用户点击下一页按钮改变当前页后触发|当前页


## columns
该项对应原组件`Table-column Attributes`

### 新增的属性

属性|说明|类型|默认值
-|-|-|-
slotName|自定义插槽的name|String|''

## 参考资料
element-ui中的[el-tablle](https://element.eleme.cn/#/zh-CN/component/table)组件相关说明

