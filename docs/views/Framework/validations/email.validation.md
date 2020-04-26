---
title: 邮箱验证方法说明
date: 2020-04-14
categories:
 - 验证
tags:
 - javascript
 - validation
 - email
---
## emailValidation
验证字符串是否符合邮箱规则

名称|类型|默认值|必须|说明
---|---|---|---|---
value|String|''|true|被检测的数据

```javascript
import validations from '@/validations'

validations.emailValidation(value)
```