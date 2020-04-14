---
title: 时间验证方法说明
date: 2020-04-14
categories:
 - 验证
tags:
 - javascript
 - validation
 - date
---
# 时间验证
时间相关验证方法

## dateCompare
被检测时间与当前时间比较

名称|类型|默认值|必须|说明
---|---|---|---|---
date|String/Number/Date|new Date()|true|被检测的数据
type|Number|0|true|比较类型,1:比当前时间早;2:比当前时间晚;

```javascript
import validations from '@/validations'

validations.dateCompare(date, type)
```

## firstDateEarlier
检测第一个时间是否比第二个时间早

名称|类型|默认值|必须|说明
---|---|---|---|---
date1|String/Number/Date|new Date()|true|被检测的数据
date2|String/Number/Date|new Date()|true|被检测的数据

```javascript
import validations from '@/validations'

validations.firstDateEarlier(date1, date2)
```