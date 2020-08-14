---
title: vue教程008-混入
date: 2020-06-18
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 混入

不同的页面或者组件拥有相同的代码片段，这种情况下就可以提取出公共的部分，使用时在加载进页面或组件中，这种方式就类似于函数的封装。

### 混入文件

简单来说，提取的公共部分写在混入文件中。混入内容本质上和vue中`script`标签中的内容一致。但不应该含有`name`等确定唯一性的字段。

```javascript
export default {
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
```


### 使用混入

混入文件创建完毕后可以使用了。首先我们导入混入文件。
```javascript
import xxx from './xxx.mixins.js'
```

在`mixins`中以数组的方式使用导入的文件。

```vue
<template>
  <div></div>
</template>
<script>
import xxx from './xxx.mixins.js'
export default {
  name: 'page',
  mixins: [xxx],
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>
```
