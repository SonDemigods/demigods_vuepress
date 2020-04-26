---
title: vue教程003-vue文件详解
date: 2020-04-26
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## vue文件说明

vue文件主要分为三个部分，`template`、`script`、`style`，分别对应`html`、`javascript`、`css`。

> [vue文件结构规范](../../Framework/common/pageRule.md)

### template说明

在`template`中元素可以渲染文本或html、传递参数和绑定事件。

在`html`中渲染文本可以使用`{{ text }}`的方式渲染文本，如果需要渲染`html`片段就需要用到`v-html`指令了。
```vue
// 渲染文本
<div>{{ text }}</div>
// 渲染html片段
<div v-html="htmlDom"></div>
```

通过`v-bind`可以绑定原始的`html`属性，也可以给组件传递参数。
一般使用`:[key]`的缩写形式。

```vue
// 渲染文本
<!-- 完整语法 -->
<div v-text="text"></div>
<!-- 缩写 -->
<div>{{text}}</div>

// 绑定html属性
<!-- 完整语法 -->
<div v-bind:title="title"></div>
<!-- 缩写 -->
<div :title="title"></div>
```
使用`v-on`可以绑定事件，一般使用`@[key]`的缩写形式。
例如点击div时执行一个方法。
```vue
// 绑定事件
<!-- 完整语法 -->
<div v-on:click="clickFunc"></div>
<!-- 缩写 -->
<div @click="clickFunc"></div>
```

### script说明

在`script`中元素有固定格式。

完整格式如下
```vue
<script>
export default {
  name: 'demo',					// 文件name
  components: {},				// 注册组件
  props: {},					// 父级传递的参数
  data () {
    return {					// 组件内的数据
    }
  },
  watch: {},					// 监测数据变化
  computed: {},					// 计算属性
  methods: {},					// 方法
  beforeCreate () {},			// 创建前钩子
  created () {},				// 创建后钩子
  beforeMount () {},			// 挂载前钩子
  mounted () {},				// 挂载后钩子
  beforeUpdate () {},			// 更新前钩子
  updated () {},				// 更新后钩子
  beforeDestroy () {},			// 卸载前钩子
  destroyed () {}				// 卸载后钩子
}
</script>
```

### vue生命周期

![class_003_01](./assets/class_003_01.png)