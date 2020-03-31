# 页面结构说明

## 目录
```javascript
│  page.vue		// 页面文件
│  index.js		// 页面导出文件
└─components	// 页面组件文件夹

```

## page.vue

```vue
<template>
  <div>page</div>
</template>

<script>
export default {
  name: 'page',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
</style>
```

## index.js
```javascript
import page from './page.vue'
export default page
```

## components
根据页面逻辑自行处理

## 参考资料

[vue官方文档](https://cn.vuejs.org/v2/guide/)