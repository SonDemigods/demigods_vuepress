---
title: 函数方法说明
date: 2019-06-26
categories:
 - 工具
tags:
 - javascript
 - tool
 - function
---
# 事件
事件相关方法

## on
绑定事件

名称|类型|默认值|必须|说明
---|---|---|---|---
null|null|无|null|无

```javascript
import tools from '@/tools'

tools.on()
```

## off
解绑事件

名称|类型|默认值|必须|说明
---|---|---|---|---
null|null|无|null|无

```javascript
import tools from '@/tools'

tools.off()
```

## debounce
防抖

名称|类型|默认值|必须|说明
---|---|---|---|---
fn|Function|function () {}|true|需要防抖的函数
delay|Number|1000|true|防抖的时间,毫秒

```javascript
import tools from '@/tools'

tools.debounce(fn, delay)
```