---
title: vue教程007-组件
date: 2020-05-28
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 组件基础

组件是`vue`中重要的组成部分，使用组件可以大大的简化前端开发的工作量。组件的复用可以做到相同的功能只开发一次，扩展的功能可以同步到所有使用该组件的模块。

### 创建组件

组件可以简单的理解为vue文件，和普通的vue文件没有任何区别。

我们以最简单的`btn`组件作为实例进行学习。首先我们创建组件。

```vue
<template>
  <button @click="handleClick">{{ msg }}</button>
</template>
<script>
export default {
  name: 'btn',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('on-click', msg)
    }
  }
}
</script>
```

之后在同级目录创建`index.js`文件导出组件。

```javascript
import components from './btn.vue'
export default components
```

### 使用组件

组件创建完毕后可以使用`btn`组件了。首先我们导入`btn`组件。
```javascript
import btn from '@/components/btn'
```
在页面中使用组件，需要注册组件。

```vue
<script>
import btn from '@/components/btn'
export default {
  components: {
    btn
  }
}
</script>
```
通过`:xx`来传递参数；通过`@xx`来响应事件。

```vue
<template>
  <btn :msg="msg" @on-click="handleClick"></btn>
</template>
<script>
import btn from '@/components/btn'
export default {
  name: 'page',
  components: {
    btn
  },
  data () {
    return {
      msg: '按钮'
    }
  },
  methods: {
    handleClick (msg) {
      console.log(msg)
    }
  }
}
</script>
```

## 组件进阶

### 插槽

有时候组件需要动态的渲染大量内容使用其他组件，这时候就不能写在组件中，可以把内容或组件作为类似传递参数的方式传递内容和组件，这就是组件插槽`slot`。

```vue
<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="context">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'box',
  props: {},
  data () {
    return {
    }
  },
  methods: {}
}
</script>
```

父级组件使用插槽。

```vue
<template>
  <box>
    <div v-slot="header">头部</div>
    <div>内容</div>
  </box>
</template>
<script>
import box from '@/components/box'
export default {
  name: 'page',
  components: {
    btn
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
```

### 注册方式

全局注册

```javascript
import Vue from 'vue'
import name from '@/components/name'
Vue.component('name', name)
```
