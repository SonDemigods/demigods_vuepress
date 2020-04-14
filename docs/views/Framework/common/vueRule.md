---
sticky: 1
title: vue开发规范
date: 2020-03-31
categories:
 - 规范
tags:
 - vue
 - 规范
---

# vue开发规范

## 规范目的

* 为提高团队协作效率
* 产出统一且高质量的前端代码
* 提高项目扩展性
* 降低后期维护的成本
* 输出高质量的文档

## 命名规范

为了让大家编写可维护易扩展的代码
让团队中的所有人编写风格统一，其他人看你的代码能轻易读懂

### 普通变量命名

* 小驼峰命名
* 命名必须与内容相关
* 复数的时候加s

### 常量命名

* 使用大写字母的下划线（_）组合

### 组件命名

* 大驼峰声明
  * 多个单词
  * 有意义，能描述实际功能的单词或短语
  * 公共组件库统一使用公司名开头
* 小写单词+连字符的方式使用
  * 标签成对使用且必须闭合
  * 导入组件时使用大驼峰声明
* 不能使用保留字

### method命名

* 小驼峰命名
* 动词 + 名词
* 获取数据以data结尾
* `init`、`refresh`例外
* 使用常见单词

常用单词表
名称 | 说明 | 名称 | 说明 | 名称 | 说明 | 名称 | 说明
--- | --- | --- | --- | --- | --- | --- | ---
get | 获取 | set | 设置 | add | 增加 | remove | 删除
create | 创建 | destory | 销毁 | start | 启动 | stop | 停止
open | 打开 | close | 关闭 | read | 读取 | write | 写入
load | 载入 | save | 保存 | backup | 备份 | restore | 恢复
import | 导入 | export | 导出 | split | 分割 | merge | 合并
inject | 注入 | extract | 提取 | attach | 附着 | detach | 脱离
bind | 绑定 | separate | 分离 | view | 查看 | browse | 浏览
edit | 编辑 | modify | 修改 | select | 选取 | mark | 标记
copy | 复制 | paste | 粘贴 | undo | 撤销 | redo | 重做
insert | 插入 | delete | 移除 | add | 加入 | append | 添加
clean | 清理 | clear | 清除 | index | 索引 | sort | 排序
find | 查找 | search | 搜索 | increase | 增加 | decrease | 减少
play | 播放 | pause | 暂停 | launch | 启动 | run | 运行
compile | 编译 | execute | 执行 | debug | 调试 | trace | 跟踪
observe | 观察 | listen | 监听 | build | 构建 | publish | 发布
input | 输入 | output | 输出 | encode | 编码 | decode | 解码
encrypt | 加密 | decrypt | 解密 | compress | 压缩 | decompress | 解压缩
pack | 打包 | unpack | 解包 | parse | 解析 | emit | 生成
connect | 连接 | disconnect | 断开 | send | 发送 | receive | 接收
download | 下载 | upload | 上传 | refresh | 刷新 | synchronize | 同步
update | 更新 | revert | 复原 | lock | 锁定 | unlock | 解锁
check out | 签出 | check in | 签入 | submit | 提交 | commit | 交付
push | 推 | pull | 拉 | expand | 展开 | collapse | 折叠
begin | 开始 | end | 结束 | start | 开始 | finish | 完成
enter | 进入 | exit | 退出 | abort | 放弃 | quit | 离开
obsolete | 废弃 | depreciate | 废旧 | collect | 收集 | aggregate | 聚集

### views文件夹下的文件命名

* 小驼峰命名
* 尽量使用名词
* 至少两个单词

### props命名

* 小驼峰命名
* 小写单词+连字符的方式使用

### 其他

* 作用域较小时变量可以适当简写
* 循环变量可以简写

## 结构化规范

### 目录结构

* 全局文件统一使用`index.js`导出
* 全局模块统一管理
* 临时文件上线前视情况保留

详见各框架说明

### vue文件结构

* 必须有`name`属性且与文件名相同
* 必须有`template`标签
* 必须有`script`标签且含有`export default {}`
* 组件对象顺序

```javascript
components
props
data
computed
created
mounted
metods
filter
watch
```

详见 [vue文件结构规范](./pageRule.md)

### 属性结构规范

* 每个属性单独占用一行

```vue
<my-component a="a"
              b="b"
              c="c"></my-component>
```
* 属性顺序

```javascript
class
id,ref
name
data-*
src, for, type, href,value,max-length,max,min,pattern
title, alt，placeholder
aria-*, role
required,readonly,disabled
is
v-for
key
v-if
v-else-if
v-else
v-show
v-cloak
v-pre
v-once
v-model
v-bind,:
v-on,@
v-html
v-text
```

## 注释规范

代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明

### 必须添加的注释

* 公共组件的使用说明，必要时可以附带md文档
* 组件中的核心、重要函数
* 复杂业务逻辑
* 多重判断、选择
* 特殊情况的代码处理说明

### 单行注释

* 单独一行，不要写到代码后面
* 使用//且后面跟一个空格

```javascript
// 名称
const name = 'abc'
```

### 多行注释

* 使用/\*\*开头，\*\*/结尾，每一行开头都要有\*
* 包含名称、描述、参数、返回值、作者、时间、版本等相关信息
* javascript
```javascript
/**
 * @functionName localSave
 * @param {String} key 数据的key
 * @param {String} value 数据的value
 * @description 在localStorage存储数据
 * @author 张航
 * @date 2020-03-18 12:21:36
 * @version V1.0.0
 */
 
 /**
 * @functionName localRead
 * @param {String} key 获取数据的key
 * @return {String} 返回查询结果，未找到时返回结果为''（空字符串）
 * @description 根据key获取localStorage的数据
 * @author 张航
 * @date 2020-03-18 12:23:56
 * @version V1.0.0
 */
```
* component
```vue
/**
 * @componentName demo
 * @props {*|String|Number|Boolean|Array|Object} 参数
 * @event {Function} 事件
 * @description 组件描述
 * @author 张航
 * @date 2020-03-18 11:25:29
 * @version V1.0.0
 */
```

## 编码规范

### es6规范

* 常量`const`
* 变量`let`
* 字符串使用单引号
* 动态字符串使用字符串模板（反引号，`${}`）
* 使用解构赋值处理对象、数组的赋值
* 函数的参数要有默认值
* 使用解构赋值处理对象类型的函数参数
* 使用箭头函数
* 模块导出
  * 一个输出使用 `export default`
  * 多个输出使用 `export const name`

### 指令规范

* 指令使用缩写形式
  * `v-bind:class` => `:class`
  * `v-on:click` => `@click`
* `v-for`必须有`key`属性且`key`属性在循环中唯一
* `v-if`与`v-for`不能再同一个元素上
  * 使用计算属性处理原始数据
  * `v-if`放到父级元素上

### props规范

* 必须包含`type`、`default`属性
* 视情况添加`required`、`validator`属性

```vue
props: {
  status: {
    type: String,
	default: '',
    required: true,
    validator: function (value) {
      // ...
    }
  }
}
```

### 其他

* 避免使用`this.$parent`
* `console`、`debugger`使用完及时删除
* `if`、`else`、`else if`不允许简写

## css规范

### 通用规范

* class命名
  * 统一使用连字符
  * 使用小写字母
  * 语义明确且与内容相关
* 省略值为0时的单位
* css可以实现就不用js
* 优先使用缩写属性
* 声明顺序
  * 显示属性 `display`、`visibility`、`position`、`float`、`clear`...
  * 自身属性 `width`、`height`、`margin`、`padding`、`border`、`overflow`...
  * 其他属性 `font`、`text-align`、`vertical-align`、`color`、`background`...
* 避免在scoped中使用元素选择器

### sass/less规范

* 嵌套属性顺序
  * 当前选择器的样式属性
  * 父级选择器的伪类选择器
  * 伪类元素
  * 父级选择器的声明样式
  * 媒体查询
  * 子选择器

### 其他

* 组件内部使用局部样式`scoped`
* 公共组件、全局组件库使用BEM

