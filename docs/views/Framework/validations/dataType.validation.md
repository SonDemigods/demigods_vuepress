---
title: 数据类型验证方法说明
date: 2020-04-17
author: 赵致喜
categories:
 - 验证
tags:
 - javascript
 - validation
 - dataType
---
## dataTypeValidation

全数据类型验证

| 名称  |  类型  | 默认值 | 必须 |     说明     |
| :---: | :----: | :----: | :--: | :----------: |
| value |   *    |  ‘ ’   | true | 被检测的数据 |
| type  | String | String | true |   数据类型   |

```js
import validations from '@/validations'

validations.dataTypeValidation(value, type)
```



## stringValidation

String数据类型验证

| 名称  |  类型  | 默认值 | 必须 |     说明     |
| :---: | :----: | :----: | :--: | :----------: |
| value |   *    |  ‘ ’   | true | 被检测的数据 |
| type  | String | String | true |   数据类型   |

```js
import validations from '@/validations'

validations.stringValidation(value, type)
```



## numberValidation

Number数据类型验证

| 名称  |  类型  | 默认值 | 必须 |     说明     |
| :---: | :----: | :----: | :--: | :----------: |
| value | Number |   0    | true | 被检测的数据 |
| type  | String | Number | true |   数据类型   |

```js
import validations from '@/validations'

validations.numberValidation(value, type)
```



## objectValidation

Object数据类型验证

| 名称  |  类型  | 默认值 | 必须 |     说明     |
| :---: | :----: | :----: | :--: | :----------: |
| value | Object |  { }   | true | 被检测的数据 |
| type  | String | Object | true |   数据类型   |

```js
import validations from '@/validations'

validations.objectValidation(value, type)
```



## arrayValidation

Array数据类型验证

| 名称  |  类型  | 默认值 | 必须 |     说明     |
| :---: | :----: | :----: | :--: | :----------: |
| value | Array  |  [ ]   | true | 被检测的数据 |
| type  | String | Array  | true |   数据类型   |

```js
import validations from '@/validations'

validations.arrayValidation(value, type)
```



## booleanValidation

Boolean数据类型验证

| 名称  |  类型   | 默认值  | 必须 |     说明     |
| :---: | :-----: | :-----: | :--: | :----------: |
| value | Boolean |  false  | true | 被检测的数据 |
| type  | String  | Boolean | true |   数据类型   |

```js
import validations from '@/validations'

validations.booleanValidation(value, type)
```



## functionValidation

Function数据类型验证

| 名称  |  类型   |     默认值     | 必须 |     说明     |
| :---: | :-----: | :------------: | :--: | :----------: |
| value | Boolean | function () {} | true | 被检测的数据 |
| type  | String  |    Function    | true |   数据类型   |

```js
import validations from '@/validations'

validations.functionValidation(value, type)
```

