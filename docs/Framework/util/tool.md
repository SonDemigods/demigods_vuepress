# 工具说明（已废弃）
2020年之前的框架使用该说明文档

## 数组方法
名称|参数|返回值|说明
---|---|---|---
forEach|arr,fn|无|arr：目标数组，fn(item,i,arr)：执行函数（当前项，index,原数组）循环数组执行方法
getIntersection|arr1,arr2|res|返回两个数组的交集, 两个数组的元素为数值或字符串
getUnion|arr1,arr2|res|返回两个数组的并集, 两个数组的元素为数值或字符串
hasOneOf|targetarr,arr|res|判断要查询的数组是否至少有一个元素包含在目标数组中
oneOf|value,validList|res|判断要查询的字符串或数值是否包含验证的列表内

### 实例
```javascript
import {
  forEach,
  getIntersection,
  getUnion,
  hasOneOf,
  oneOf
} from '@/lib/tool'

forEach(arr, fn)
getIntersection(arr1, arr2)
getUnion(arr1, arr2)
hasOneOf(targetarr, arr)
oneOf(value, validList)
```

## 对象方法
名称|参数|返回值|说明
---|---|---|---
hasKey|obj,key|res|判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性如果没有传入key这个参数，则判断obj对象是否有键值对
objEqual|obj1,obj2|res|判断两个对象是否相等，这两个对象的值只能是数字或字符串

### 实例
```javascript
import {
  hasKey,
  objEqual
} from '@/lib/tool'

hasKey(obj, key)
objEqual(obj1, obj2)
```

## 时间方法
名称|参数|返回值|说明
---|---|---|---
isMillisecond|timeStamp|res|判断时间戳格式是否是毫秒
isEarly|timeStamp,currentTime|res|前者的时间戳是否早于后者时间戳
getDate|timeStamp,startType|res|时间戳转字符串，startType：year，包含年度
getRelativeTime|timeStamp|res|计算相对时间
date2str|date|res|时间对象转字符串
str2date|str|res|字符串转时间对象

### 实例
```javascript
import {
  isMillisecond,
  isEarly,
  getDate,
  getRelativeTime,
  date2str,
  str2date
} from '@/lib/tool'

isMillisecond(timeStamp)
isEarly(timeStamp,currentTime)
getDate(timeStamp,startType)
getRelativeTime(timeStamp)
date2str(date)
str2date(str)
```

## 数据验证方法
名称|参数|返回值|说明
---|---|---|---
isStatic|value|res|检测数据是不是除了symbol外的原始数据
isPrimitive|value|res|检测数据是不是原始数据
isObject|value|res|判断数据是不是引用类型的数据
isObjectLike|value|res|检查value是否是类对象
getRawType|value|res|获取数据类型
isEmpty|value|res|检查 value 是否为空

### 实例
```javascript
import {
  isStatic,
  isPrimitive,
  isObject,
  isObjectLike,
  getRawType,
  isEmpty
} from '@/lib/tool'

isStatic(any)
isPrimitive(any)
isObject(any)
isObjectLike(any)
getRawType(any)
isEmpty(any)
```

## 命名转换
名称|参数|返回值|说明
---|---|---|---
camelize|str|res|横线转驼峰命名
hyphenate|str|res|驼峰命名转横线命名
capitalize|str|res|字符串首位大写

### 实例
```javascript
import {
  camelize,
  hyphenate,
  capitalize
} from '@/lib/tool'

camelize(str)
hyphenate(str)
capitalize(str)
```