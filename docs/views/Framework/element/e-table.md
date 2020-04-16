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

# e-table
本组件为`element-ui`中`el-table`组件的二次封装，简化传递参数；列数据和表格数据单独传递，减少插槽的使用。
该组件已全局注册，直接使用即可。
该文档只说明与原`el-table`组件的区别和新增项。

## props
该项对应原组件`Table Attributes`

### 新增的属性

属性|说明|类型|默认值
-|-|-|-
columns|表格列配置，详见原组件`Table-column Attributes`说明|Array|[]

## columns
该项对应原组件`Table-column Attributes`

### 新增的属性

属性|说明|类型|默认值
-|-|-|-
slotName|自定义插槽的name|String|''

## 参考资料
element-ui中的[el-tablle](https://element.eleme.cn/#/zh-CN/component/table)组件相关说明

