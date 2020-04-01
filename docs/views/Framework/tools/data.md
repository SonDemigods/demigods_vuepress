# 数据类型
数据类型相关方法

## isPrimitive
检测数据是不是原始数据类型

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isPrimitive(value)
```

## isStatic
检测数据是不是除了symbol外的原始数据类型

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isStatic(value)
```

## getRawType
获取数据类型

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.getRawType(value)
```

## isObject
判断数据是不是引用类型的数据

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isObject(value)
```

## isObjectLike
检查数据是不是类对象

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isObjectLike(value)
```

## isPlainObject
判断数据是不是Object类型的数据

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isPlainObject(value)
```

## isFunction
检查数据是不是函数

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isFunction(value)
```

## isLength
检查数据是否为有效的类数组长度

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isLength(value)
```

## isArrayLike
检查数据是否是类数组

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isArrayLike(value)
```

## isJSON
检查数据是否是json字符串

名称|类型|默认值|必须|说明
---|---|---|---|---
value|String|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isJSON(value)
```

## isEmpty
检查数据是否为空

名称|类型|默认值|必须|说明
---|---|---|---|---
value|*|''|true|被检测的数据

```javascript
import tools from '@/tools'

tools.isEmpty(value)
```