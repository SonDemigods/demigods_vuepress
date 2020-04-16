---
title: 验证说明
date: 2020-04-14
categories:
 - 验证
tags:
 - javascript
 - validation
---
# validation

验证说明及实例,
* 同级文件名后缀为`.validation.js`的文件将自动引入入口文件中
* 验证文件需要导出验证方法

## 验证结果

验证结果统一返回固定格式数据
```javascript
{
  parameters: {},				// 验证方法传入的参数，用于排查错误
  result:false,					// 验证结果，通过为true，不通过为false
  message: ''					// 验证结果说明，包含未通过的原因
}
```

## 目录

```javascript
index.js						// 入口文件
xxx.validation.js				// 工具文件
```

## 入口文件

```javascript
let validations = {}

const importAll = function (r) {
  r.keys().map(value => {
    Object.assign(validations, r(value))
  })
}

importAll(require.context('.', true, /\.validation\.js/))

export default validations
```

## 验证文件

```javascript
/**
 * @description 文件说明
 * @author 作者
 * @date 时间
 * @version 版本
 */

/**
 * @functionName 方法名称
 * @param {*} parameter 参数说明
 * @return {*} 返回值
 * @description 方法说明
 * @author 作者
 * @date 时间
 * @version 版本
 */
export const name = (parameter) => {
  // ...
}
```