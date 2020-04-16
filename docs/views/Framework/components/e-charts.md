---
title: e-charts组件使用说明
date: 2020-04-14
categories:
 - 组件
tags:
 - vue
 - Echarts
 - component
---

# e-charts
本组件为`Echarts`及`vue-echarts`组件的二次封装，简化传递参数。
封装部分基础图表类型，分别为柱状图、饼图、折线图、雷达图、天津地图。
覆盖不到的类型使用`e-chart`组件，支持`Echarts`全部配置。
该组件使用按需加载的方式引用。

## 实例
```vue
<template>
  <div>
    <e-bar :xAxisData="xAxisData"
           :seriesData="seriesData"
           refs="cBar"
           :text="text"
           :subText="subText"></e-bar>
    <e-line :xAxisData="xAxisData"
            :seriesData="seriesData"
            refs="cLine"
            :text="text"
            :subText="subText"></e-line>
    <e-pie :seriesData="pieData"
           refs="cPie"
           :text="text"
           :subText="subText"></e-pie>
    <e-radar :indicator="indicatorData"
             :seriesData="radarData"
             refs="cRadar"
             :text="text"
             :subText="subText"></e-radar>
    <div style="height:800px;">
      <e-map :visualMap="visualMap"
             :mapData="mapData"
             refs="cMap"
             :text="text"
             :subText="subText"></e-map>
    </div>
    <div style="height:800px;">
      <e-graph :seriesLinks="graphData.links"
               :seriesData="graphData.data"
               :categories="graphData.categories"
               refs="cGraph"
               :text="text"
               :subText="subText"></e-graph>
    </div>
  </div>
</template>

<script>
import { Ebar, Eline, Epie, Eradar, Emap, Egraph } from '@/components/e-charts'
export default {
  name: 'charts',
  components: {
    'e-bar': Ebar,
    'e-line': Eline,
    'e-pie': Epie,
    'e-radar': Eradar,
    'e-map': Emap,
    'e-graph': Egraph
  },
  props: {},
  data () {
    return {
      xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      seriesData: [120, 200, 150, 80, 70, 110, 130],
      text: 'text',
      subText: 'subText',
      // 饼图数据
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 274, name: '联盟广告' },
        { value: 235, name: '视频广告' },
        { value: 400, name: '搜索引擎' }
      ],
      // 雷达数据
      indicatorData: [
        { name: '力量' },
        { name: '智力' },
        { name: '体质' },
        { name: '敏捷' },
        { name: '精神' },
        { name: '幸运' }
      ],
      radarData: [{
        value: [120, 200, 150, 80, 70, 110],
        name: 'demo'
      }],
      // 地图数据
      visualMap: {
        min: 800,
        max: 50000,
        text: ['最高', '最低'],
        realtime: false,
        calculable: true,
        inRange: {
          // color: ['darkBlue', 'lightBLue']
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      mapData: [
        { name: '蓟州区', value: 20057.34 },
        { name: '宝坻区', value: 15477.48 },
        { name: '武清区', value: 31686.1 },
        { name: '宁河区', value: 6992.6 },
        { name: '北辰区', value: 44045.49 },
        { name: '滨海新区', value: 40689.64 },
        { name: '东丽区', value: 37659.78 },
        { name: '西青区', value: 45180.97 },
        { name: '津南区', value: 55204.26 },
        { name: '静海区', value: 21900.9 },
      ],
      // 关系图数据
      graphData
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>

```

## 柱状图

### props

属性|说明|类型|默认值
---|---|---|---|---
xAxisData|x轴坐标|Array|[]
seriesData|数据|Array|[]
text|标题|String|''
subText|小标题|String|''

## 折线图

### props

属性|说明|类型|默认值
---|---|---|---|---
xAxisData|x轴坐标|Array|[]
seriesData|数据|Array|[]
text|标题|String|''
subText|小标题|String|''

## 饼图

### props

属性|说明|类型|默认值
---|---|---|---|---
seriesData|数据|Array|[]
text|标题|String|''
subText|小标题|String|''

## 雷达图

### props

属性|说明|类型|默认值
---|---|---|---|---
indicator|维度数据|Array|[]
seriesData|数据|Array|[]
text|标题|String|''
subText|小标题|String|''

## 天津地图

### props

属性|说明|类型|默认值
---|---|---|---|---
visualMap|热力指数|Object|{}
mapData|数据|Array|[]
text|标题|String|''
subText|小标题|String|''

## 关系图

### props

属性|说明|类型|默认值
---|---|---|---|---
seriesLinks|关系数据|Array|[]
seriesData|对象数据|Array|[]
categories|类目数据|Array|[]

## 原生图表

### props

属性|说明|类型|默认值
---|---|---|---|---
option|配置|Object|{}

## 参考资料
[Echarts官方实例](https://www.echartsjs.com/examples/zh/index.html)
[Echarts配置说明](https://www.echartsjs.com/zh/option.html)

