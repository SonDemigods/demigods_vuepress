---
title: 密码验证方法说明
date: 2020-04-21
author: 赵致喜
categories:
 - 验证
tags:
 - javascript
 - validation
 - password
---
## passwordLengthValidation

验证密码不小于8位

| 名称  |  类型  | 默认值 | 必须 |    说明    |
| :---: | :----: | :----: | :--: | :--------: |
| value | String |  ' '   | true | 被检测密码 |

```js
import validations from '@/validations'

validations.passwordLengthValidation(value)
```



## passwordMiddleValidation

验证密码(大小写字母、数字、符号任意两种，并且不小于8位)

| 名称  |  类型  | 默认值 | 必须 |    说明    |
| :---: | :----: | :----: | :--: | :--------: |
| value | String |  ' '   | true | 被检测密码 |

```js
import validations from '@/validations'

validations.passwordMiddleValidation(value)
```



## passwordSeniorValidation

验证密码(大小写字母、数字、符号三种同时存在，并且不小于8位)

| 名称  |  类型  | 默认值 | 必须 |    说明    |
| :---: | :----: | :----: | :--: | :--------: |
| value | String |  ' '   | true | 被检测密码 |

```js
import validations from '@/validations'

validations.passwordSeniorValidation(value)
```