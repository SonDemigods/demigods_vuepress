# ajax说明

## axios封装
使用class形式封装，支持get、post、put、delete

### 绑定原型链
```javascript
import api from '@/api'

Vue.prototype.$api = api
```

### get
参数 | 类型 | 默认值 | 说明
---|---|---|---
url | string | ‘’ | 请求地址

```javascript
import api from '@/api'

api.get('url').then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

### post
参数 | 类型 | 默认值 | 说明
---|---|---|---
url | string | ‘’ | 请求地址
data | object | {} | 请求参数
type| Boolean | true |参数类型 true:json;false:formData; 

```javascript
import api from '@/api'

api.post('url', data, type).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

### put
参数 | 类型 | 默认值 | 说明
---|---|---|---
url | string | ‘’ | 请求地址
data | object | {} | 请求参数
type| Boolean | true |参数类型 true:json;false:formData; 

```javascript
import api from '@/api'

api.put('url', data, type).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

### delete
参数 | 类型 | 默认值 | 说明
---|---|---|---
url | string | ‘’ | 请求地址
data | object | {} | 请求参数
type| Boolean | true |参数类型 true:json;false:formData; 

```javascript
import api from '@/api'

api.delete('url', data, type).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

## axios封装（已废弃）
2020年之前的框架使用该说明文档
### 参数

参数 | 类型 | 说明
---|---|---
url | string | 请求地址
data | object | 请求参数
config | object | 额外配置，见下表


额外配置 | 类型 | 说明
---|---|---
method|string|请求类型，默认值：post，可选值：get、post、put、delete
contentType | string | 提交类型，默认值：url，可选值：url：表单、json：json
showMsg|boolean|显示提示信息，默认值：false

### 直接使用

```javascript
import api from '@/api'

api('url', data).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

### 绑定原型链

```javascript
import api from '@/api'

Vue.prototype.$api = api
```

### 绑定后使用

```javascript
this.$api('url', data).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```
