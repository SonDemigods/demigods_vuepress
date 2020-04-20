---
title: 数字格式化方法说明
date: 2020-04-17
author: 赵致喜
categories:
 - 格式化
tags:
 - javascript
 - tool
 - number
---
# 数字格式化方法说明

数字格式化方法

## integer

数字取整数，直接舍去小数位。

| 名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :---: | :----: | :----: | :--: | :--------: | ---- |
| value | Number |   0    | true | 被检测数据 |      |

```js
import tools from '@/tools'

tools.integer(value)
```



## integerFloor

数字取整数，返回小于参数值的最大整数。

| 名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :---: | :----: | :----: | :--: | :--------: | ---- |
| value | Number |   0    | true | 被检测数据 |      |

```js
import tools from '@/tools'

tools.integerFloor(value)
```



## integerCeil

数字取整数，返回大于参数值的最大整数。

| 名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :---: | :----: | :----: | :--: | :--------: | ---- |
| value | Number |   0    | true | 被检测数据 |      |

```js
import tools from '@/tools'

tools.integerCeil(value)
```



## integerRound

数字取整数，四舍五入。

| 名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :---: | :----: | :----: | :--: | :--------: | ---- |
| value | Number |   0    | true | 被检测数据 |      |

```js
import tools from '@/tools'

tools.integerRound(value)
```



## decimalInterception

小数位直接截取。

|  名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :----: | :----: | :----: | :--: | :--------: | ---- |
| value  | Number |   0    | true | 被检测数据 |      |
| number | Number |   0    | true |  小数位数  |      |

```js
import tools from '@/tools'

tools.decimalInterception(value, number)
```



## decimalInterceptionCeil

小数位截取，返回大于参数值的最大小数。

|  名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :----: | :----: | :----: | :--: | :--------: | ---- |
| value  | Number |   0    | true | 被检测数据 |      |
| number | Number |   0    | true |  小数位数  |      |

```js
import tools from '@/tools'

tools.decimalInterceptionCeil(value, number)
```



## decimalInterceptionRound

小数位截取，四舍五入。

|  名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :----: | :----: | :----: | :--: | :--------: | ---- |
| value  | Number |   0    | true | 被检测数据 |      |
| number | Number |   0    | true |  小数位数  |      |

```js
import tools from '@/tools'

tools.decimalInterceptionRound(value, number)
```



## percentage

小数位截取，输出百分比数据。

|  名称  |  类型  | 默认值 | 必须 |    说明    |      |
| :----: | :----: | :----: | :--: | :--------: | ---- |
| value  | Number |   0    | true | 被检测数据 |      |
| number | Number |   0    | true |  小数位数  |      |

```js
import tools from '@/tools'

tools.percentage(value, number)
```

