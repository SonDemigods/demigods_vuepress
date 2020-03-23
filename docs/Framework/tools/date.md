# 时间
时间相关方法

## date2str
时间转换为字符串

名称|类型|必须|说明
---|---|---|---
date|Date|true|时间对象

```javascript
import tools from '@/tools'

tools.date2str(date)
```

## str2date
时间字符串或时间戳转换成Date数据

名称|类型|必须|说明
---|---|---|---
str|String/Number|true|时间字符串或时间戳

```javascript
import tools from '@/tools'

tools.str2date(str)
```

## getTimeStamp
获取传入的时间或当前时间的时间戳

名称|类型|必须|说明
---|---|---|---
str|String/Number|false|时间字符串或时间戳

```javascript
import tools from '@/tools'

tools.getTimeStamp(str)
```

## getRelativeTime
生成相对时间

名称|类型|必须|说明
---|---|---|---
timeStamp|String/Number|true|时间戳

```javascript
import tools from '@/tools'

tools.getRelativeTime(timeStamp)
```