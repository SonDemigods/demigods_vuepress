---
title: 本地存储方法说明
date: 2019-06-26
categories:
 - 工具
tags:
 - javascript
 - tool
 - storage
---
## localSave
在localStorage存储数据

名称|类型|默认值|必须|说明
---|---|---|---|---
key|String|''|true|数据的key
value|String|''|true|数据的value

```javascript
import tools from '@/tools'

tools.localSave(key, value)
```

## localRead
根据key获取localStorage的数据

名称|类型|默认值|必须|说明
---|---|---|---|---
key|String|''|true|数据的key

```javascript
import tools from '@/tools'

tools.localRead(key)
```