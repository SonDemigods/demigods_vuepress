---
title: 浮点小数位数验证方法说明
date: 2020-04-17
author: 赵致喜
categories:
 - 验证
tags:
 - javascript
 - validation
 - decimal
---
## decimalValidation

验证浮点小数位数是否符合

|  名称  |  类型  | 默认值 | 必须 |    说明    |
| :----: | :----: | :----: | :--: | :--------: |
| value  | Number |   0    | true | 被检测数据 |
| number | Number |   0    | true |  小数位数  |

```js
import validations from '@/validations'

validations.decimalValidation(value, number)
```
