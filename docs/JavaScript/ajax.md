# ajax 说明

## 参数

| 参数   | 类型   | 说明             |
| ------ | ------ | ---------------- |
| url    | string | 请求地址         |
| data   | object | 请求参数         |
| config | object | 额外配置，见下表 |

| 额外配置    | 类型    | 说明                                                   |
| ----------- | ------- | ------------------------------------------------------ |
| method      | string  | 请求类型，默认值：post，可选值：get、post、put、delete |
| contentType | string  | 提交类型，默认值：url，可选值：url：表单、json：json   |
| showMsg     | boolean | 显示提示信息，默认值：false                            |

## 直接使用

```
import api from '@/api'

api('url', data).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```

## 绑定原型链

```
import api from '@/api'

Vue.prototype.$api = api
```

## 绑定后使用

```
this.$api('url', data).then( res => {
    console.log(res)
}).cath( err => {
    console.log(err)
})
```
