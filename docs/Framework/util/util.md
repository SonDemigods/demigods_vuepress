# 基础工具说明

## token方法
名称|参数|返回值|说明
---|---|---|---
setToken|token|无|保存token到cookie
getToken|无|token|读取cookie保存的token

### 实例
```
import {
  setToken,
  getToken
} from '@/lib/util'

setToken(token)
getToken()
```

## url参数解析
名称|参数|返回值|说明
---|---|---|---
getParams|url|参数对象|解析url提取参数为key:value形式

### 实例
```
import {
  getParams
} from '@/lib/util'

getParams(url)
```

## 本地存储
名称|参数|返回值|说明
---|---|---|---
localSave|key,value|无|保存localStorage数据
localRead|key|value|返回localStorage数据

### 实例
```
import {
  localSave,
  localRead
} from '@/lib/util'

localSave(key,value)
localRead(key)
```