---
title: 长度验证方法说明
date: 2020-04-17
author: 赵致喜
categories:
 - 验证
tags:
 - javascript
 - validation
 - length
---
## dataLengthValidation

全数据类型长度验证

|  名称  |  类型  | 默认值 | 必须 |     说明     |
| :----: | :----: | :----: | :--: | :----------: |
| value  |   *    |  ‘ ’   | true | 被检测的数据 |
| number | Number |   0    | true |   数据长度   |

```js
import validations from '@/validations'

validations.dataLengthValidation(value, number)
```



## stringLengthValidation

String数据类型长度验证

|  名称  |  类型  | 默认值 | 必须 |     说明     |
| :----: | :----: | :----: | :--: | :----------: |
| value  |   *    |  ‘ ’   | true | 被检测的数据 |
| number | Number |   0    | true |   数据长度   |

```js
import validations from '@/validations'

validations.stringLengthValidation(value, number)
```



## numberLengthValidation

Number数据类型长度验证

|  名称  |  类型  | 默认值 | 必须 |     说明     |
| :----: | :----: | :----: | :--: | :----------: |
| value  | Number |   0    | true | 被检测的数据 |
| number | Number |   0    | true |   数据长度   |

```js
import validations from '@/validations'

validations.numberLengthValidation(value, number)
```



## objectLengthValidation

Object数据类型长度验证

|  名称  |  类型  | 默认值 | 必须 |     说明     |
| :----: | :----: | :----: | :--: | :----------: |
| value  | Object |  { }   | true | 被检测的数据 |
| number | Number |   0    | true |   数据长度   |

```js
import validations from '@/validations'

validations.objectLengthValidation(value, number)
```



## arrayLengthValidation

Array数据类型长度验证

|  名称  |  类型  | 默认值 | 必须 |     说明     |
| :----: | :----: | :----: | :--: | :----------: |
| value  | Array  |  [ ]   | true | 被检测的数据 |
| number | Number |   0    | true |   数据长度   |

```js
import validations from '@/validations'

validations.arrayLengthValidation(value, number)
```

