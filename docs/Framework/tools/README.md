# tools

工具说明及实例,
* 同级文件名后缀为[.tool.js]的文件将自动引入入口文件中
* 工具文件需要导出工具方法

## 目录

```javascript
index.js						// 入口文件
xxx.tool.js						// 工具文件
```

## 入口文件

```javascript
let tools = {}

const importAll = function (r) {
  r.keys().map(value => {
    Object.assign(tools, r(value))
  })
}

importAll(require.context('.', true, /\.tool\.js/))

export default tools
```

## 工具文件

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