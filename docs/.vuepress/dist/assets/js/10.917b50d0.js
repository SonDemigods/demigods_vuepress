(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{169:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"工具说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 工具说明")]),t._v(" "),s("h2",{attrs:{id:"数组方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("forEach")]),t._v(" "),s("td",[t._v("arr,fn")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("arr：目标数组，fn(item,i,arr)：执行函数（当前项，index,原数组）循环数组执行方法")])]),t._v(" "),s("tr",[s("td",[t._v("getIntersection")]),t._v(" "),s("td",[t._v("arr1,arr2")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("返回两个数组的交集, 两个数组的元素为数值或字符串")])]),t._v(" "),s("tr",[s("td",[t._v("getUnion")]),t._v(" "),s("td",[t._v("arr1,arr2")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("返回两个数组的并集, 两个数组的元素为数值或字符串")])]),t._v(" "),s("tr",[s("td",[t._v("hasOneOf")]),t._v(" "),s("td",[t._v("targetarr,arr")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("判断要查询的数组是否至少有一个元素包含在目标数组中")])]),t._v(" "),s("tr",[s("td",[t._v("oneOf")]),t._v(" "),s("td",[t._v("value,validList")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("判断要查询的字符串或数值是否包含验证的列表内")])])])]),t._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import {\n  forEach,\n  getIntersection,\n  getUnion,\n  hasOneOf,\n  oneOf\n} from '@/lib/util'\n\nforEach(arr, fn)\ngetIntersection(arr1, arr2)\ngetUnion(arr1, arr2)\nhasOneOf(targetarr, arr)\noneOf(value, validList)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"对象方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("hasKey")]),t._v(" "),s("td",[t._v("obj,key")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性如果没有传入key这个参数，则判断obj对象是否有键值对")])]),t._v(" "),s("tr",[s("td",[t._v("objEqual")]),t._v(" "),s("td",[t._v("obj1,obj2")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("判断两个对象是否相等，这两个对象的值只能是数字或字符串")])])])]),t._v(" "),s("h3",{attrs:{id:"实例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import {\n  hasKey,\n  objEqual\n} from '@/lib/util'\n\nhasKey(obj, key)\nobjEqual(obj1, obj2)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"时间方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 时间方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("isMillisecond")]),t._v(" "),s("td",[t._v("timeStamp")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("判断时间戳格式是否是毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("isEarly")]),t._v(" "),s("td",[t._v("timeStamp,currentTime")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("前者的时间戳是否早于后者时间戳")])]),t._v(" "),s("tr",[s("td",[t._v("getDate")]),t._v(" "),s("td",[t._v("timeStamp,startType")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("时间戳转字符串，startType：year，包含年度")])]),t._v(" "),s("tr",[s("td",[t._v("getRelativeTime")]),t._v(" "),s("td",[t._v("timeStamp")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("计算相对时间")])]),t._v(" "),s("tr",[s("td",[t._v("date2str")]),t._v(" "),s("td",[t._v("date")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("时间对象转字符串")])]),t._v(" "),s("tr",[s("td",[t._v("str2date")]),t._v(" "),s("td",[t._v("str")]),t._v(" "),s("td",[t._v("res")]),t._v(" "),s("td",[t._v("字符串转时间对象")])])])]),t._v(" "),s("h3",{attrs:{id:"实例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import {\n  isMillisecond,\n  isEarly,\n  getDate,\n  getRelativeTime,\n  date2str,\n  str2date\n} from '@/lib/util'\n\nisMillisecond(timeStamp)\nisEarly(timeStamp,currentTime)\ngetDate(timeStamp,startType)\ngetRelativeTime(timeStamp)\ndate2str(date)\nstr2date(str)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])])])}],!1,null,null,null);a.default=r.exports}}]);