---
title: 字符串方法说明
date: 2019-06-26
categories:
 - 工具
tags:
 - javascript
 - tool
 - string
---
# 字符串
字符串相关方法

## camelize
横线转驼峰命名

名称|类型|默认值|必须|说明
---|---|---|---|---
str|String|''|true|待转换的字符串

```javascript
import tools from '@/tools'

tools.camelize(str)
```

## hyphenate
驼峰转横线命名

名称|类型|默认值|必须|说明
---|---|---|---|---
str|String|''|true|待转换的字符串

```javascript
import tools from '@/tools'

tools.hyphenate(str)
```

## capitalize
字符串首位大写

名称|类型|默认值|必须|说明
---|---|---|---|---
str|String|''|true|待转换的字符串

```javascript
import tools from '@/tools'

tools.capitalize(str)
```