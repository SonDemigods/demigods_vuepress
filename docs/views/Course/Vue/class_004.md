---
title: vue教程004-计算属性和侦听器
date: 2020-05-27
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## 计算属性

计算属性适用于动态数据、简单的数据运算，适合只读不写的情况。

### 计算属性实例

```vue
<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  computed: {
    message () {
      return this.msg + 'world'
    }
  }
}
</script>
```

## 侦听器

侦听器用于监控数据变化，可以在数据变化的时候执行一些方法。

### 侦听器实例

```vue
<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  watch: {
    msg (newVal, oldVal) {
      console.log(newVal)
    }
  }
}
</script>
```
