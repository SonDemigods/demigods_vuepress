---
title: e-manage组件使用说明
date: 2020-09-21
categories:
 - 组件
tags:
 - vue
 - element
 - component
---

## e-manage
本组件为管理页面基本功能组件，实现了页面单表增删改查的基本功能，简化组件的使用，减少参数的传递和大量表单组件的使用，自动处理简单的增删改查的业务逻辑。

## props

属性|说明|类型|默认值
-|-|-|-
searchShow|是否显示搜索区|Boolean|true
operationShow|是否显示操作区|Boolean|true
controlFormOptions|控制区需要渲染的查询表单数组，详见`e-search`组件的`formOptions`|Array|[]
controlBtns|控制区需要渲染的操作按钮数组，详见`e-operation`组件的`btns`|Array|[]
tableColumns|表格列配置，详见`e-table`组件的`columns`|Array|[]
dialogFormOptions|编辑框需要渲染的表单数组，详见`e-form`组件的`formOptions`|Array|[]
interFace|接口地址，详见`interFace`|Object|{}

## interFace
需要使用的接口配置

属性|说明|类型|默认值
-|-|-|-
insert|新增接口|Object|{}
update|修改接口|Object|{}
delete|删除接口|Object|{}
select|查询接口|Object|{}

### 接口详细配置

属性|说明|类型|默认值
-|-|-|-
url|接口请求地址|String|''
type|接口请求类型，`GET`、`POST`、`PUT`、`DELETE`、`PATCH`|String|''