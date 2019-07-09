# 页面编写规则说明
## 目录
### page
页面目录
#### page.vue
页面vue文件
#### index.js
页面导出
#### components
页面内组件

## page.vue

```
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
```
import page from './page.vue'
export default page
```

## components
根据页面逻辑自行处理