# 事件
事件相关方法

## on
绑定事件

名称|类型|必须|说明
---|---|---|---
null|null|null|无

```javascript
import tools from '@/tools'

tools.on()
```

## off
解绑事件

名称|类型|必须|说明
---|---|---|---
null|null|null|无

```javascript
import tools from '@/tools'

tools.off()
```

## debounce
防抖

名称|类型|必须|说明
---|---|---|---
fn|Function|true|需要防抖的函数
delay|Number|true|防抖的时间

```javascript
import tools from '@/tools'

tools.debounce(fn, delay)
```