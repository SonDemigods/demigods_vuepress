---
title: vue教程005-class和style绑定
date: 2020-05-27
categories:
 - vue教程
tags:
 - 教程
 - vue
---

## class和style绑定

`class`和`style`在大部分情况下是确定的。有时会根据状态的不同显示不同的样式，这种情况就需要动态的添加或删除相应的`class`和`style`的属性。`vue`中对`class`和`style`的绑定做了专门的处理，主要有对象和数组两种方式。

### 对象绑定

使用对象的进行绑定，控制对象中`key`对应的布尔值即可。

```vue
<template>
  <div :class="{ active: isActive }"
       :style="{ color: color }"></div>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      color: '#ffffff'
    }
  }
}
</script>
```

```vue
<template>
  <div :class="classObject"
       :style="styleObject"></div>
</template>
<script>
export default {
  data () {
    return {
      classObject: {
        active: true,
        'text-danger': false
      },
      styleObject: {
        color: '#ffffff',
        fontSize: '16px'
      }
    }
  }
}
</script>
```

### 数组绑定

可以以数组的形式进行绑定，`class`为字符串数组，`style`为对象数组。

```vue
<template>
  <div :class="[activeClass, errorClass]"
       :style="[baseStyle, styleObject]"></div>
</template>
<script>
export default {
  data () {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
      baseStyle: {
        color: '#000000'
      },
      styleObject: {
        color: '#ffffff',
        fontSize: '16px'
      }
    }
  }
}
</script>
```
