# 数组
数组相关方法

## forEach
循环数组并执行方法

名称|类型|必须|说明
---|---|---|---
arr|Array|true|遍历的数组
fn|Function|true|执行的方法

```javascript
import tools from '@/tools'

tools.forEach(arr, fn)
```

## getIntersection
得到两个数组的交集, 两个数组的元素为数值或字符串

名称|类型|必须|说明
---|---|---|---
arr1|Array|true|数组1
arr2|Array|true|数组2

```javascript
import tools from '@/tools'

tools.getIntersection(arr1, arr2)
```

## getUnion
得到两个数组的并集, 两个数组的元素为数值或字符串

名称|类型|必须|说明
---|---|---|---
arr1|Array|true|数组1
arr2|Array|true|数组2

```javascript
import tools from '@/tools'

tools.getUnion(arr1, arr2)
```

## hasOneOf
判断要查询的数组是否至少有一个元素包含在目标数组中

名称|类型|必须|说明
---|---|---|---
targetarr|Array|true|目标数组
arr|Array|true|需要查询的数组

```javascript
import tools from '@/tools'

tools.hasOneOf(targetarr, arr)
```