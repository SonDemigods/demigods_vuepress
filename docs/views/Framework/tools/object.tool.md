---
title: 对象方法说明
date: 2019-06-26
categories:
 - 工具
tags:
 - javascript
 - tool
 - object
---
## hasKey
判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性如果没有传入key这个参数，则判断obj对象是否有键值对

名称|类型|默认值|必须|说明
---|---|---|---|---
obj|Object|{}|true|检测的对象
key|String|''|true|检测的key

```javascript
import tools from '@/tools'

tools.hasKey(obj, key)
```

## objEqual
判断两个对象是否相等，这两个对象的值只能是数字或字符串

名称|类型|默认值|必须|说明
---|---|---|---|---
obj1|Object|{}|true|对象1
obj2|Object|{}|true|对象2

```javascript
import tools from '@/tools'

tools.objEqual(obj1, obj2)
```