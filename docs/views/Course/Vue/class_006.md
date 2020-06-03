---
title: vue教程006-条件和循环
date: 2020-05-27
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 条件渲染

条件渲染是前端开发常用的元素显示和隐藏的处理方式，通过控制变量的布尔值控制dom的显示和隐藏，或根据变量的不同值显示不同的dom。

### v-if

用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```vue
<template>
  <div v-if="type === 1">一</div>
  <div v-else-if="type === 2">二</div>
  <div v-else>三</div>
</template>
<script>
export default {
  data () {
    return {
      type: 2
    }
  }
}
</script>
```

### v-show

只是简单地切换元素的`display`属性

```vue
<template>
  <div v-show="type">内容</div>
</template>
<script>
export default {
  data () {
    return {
      type: true
    }
  }
}
</script>
```

## 循环

`vue`中使用`v-for`来循环数据渲染dom，需要配合`key`属性进行渲染优化。

```vue
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item.name }}
      {{ item.age }}
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '张三',
          age: '18'
        },
        {
          name: '李四',
          age: '19'
        }
      ]
    }
  }
}
</script>
```