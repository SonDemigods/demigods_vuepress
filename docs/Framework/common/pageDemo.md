# 页面接口调用实例

## 目录
```javascript
│  page.vue		// 页面文件
│  index.js		// 页面导出文件
└─components	// 页面组件文件夹

```

## page.vue

```vue
<template>
  <div>
    <el-button type="primary"
               @click="searchHandle">查询</el-button>
    <el-button type="success"
               @click="addHandle">新增</el-button>
    <el-button type="warning"
               @click="editHandle">修改</el-button>
    <el-button type="danger"
               @click="deleteHandle">删除</el-button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    searchHandle () {
      const url = '/info?page=1&pageSize=10&keyword='
      this.$http.get(url).then(res => {
        console.log(res)
        console.log('查询成功！')
      })
    },
    addHandle () {
      const url = '/info'
      const data = {
        id: null,
        title: '123',
        pic: '123',
        type: 1
      }
      this.$http.post(url, data, false).then(res => {
        console.log(res)
        console.log('新增成功！')
      })
    },
    editHandle () {
      const url = '/info'
      const data = {
        id: 1,
        title: '123',
        pic: '123',
        type: 1
      }
      this.$http.put(url, data, false).then(res => {
        console.log(res)
        console.log('修改成功！')
      })
    },
    deleteHandle () {
      const url = '/info'
      const id = 1
      this.$http.delete(url, id, false).then(res => {
        console.log(res)
        console.log('删除成功！')
      })
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
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