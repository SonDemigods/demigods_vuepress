# 基础工具说明

## token 方法

| 名称     | 参数  | 返回值 | 说明                     |
| -------- | ----- | ------ | ------------------------ |
| setToken | token | 无     | 保存 token 到 cookie     |
| getToken | 无    | token  | 读取 cookie 保存的 token |

### 实例

```
import {
  setToken,
  getToken
} from '@/lib/util'

setToken(token)
getToken()
```

## url 参数解析

| 名称      | 参数     | 返回值                             | 说明 |
| --------- | -------- | ---------------------------------- | ---- |
| getParams | 参数对象 | 解析 url 提取参数为 key:value 形式 |

### 实例

```
import {
  getParams
} from '@/lib/util'

getParams(url)
```

## 本地存储

| 名称      | 参数       | 返回值 | 说明                   |
| --------- | ---------- | ------ | ---------------------- |
| localSave | key、value | 无     | 保存 localStorage 数据 |
| localRead | key        | value  | 返回 localStorage 数据 |

### 实例

```
import {
  localSave,
  localRead
} from '@/lib/util'

localSave(key,value)
localRead(key)
```
