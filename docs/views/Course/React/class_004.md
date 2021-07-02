---
title: react教程004-react基础
date: 2021-06-30
categories:
 - react教程
tags:
 - 教程
 - react
---

## 数据 & 渲染
开发中最基础的需求，即根据获取的数据渲染对应的内容，而直接显示获取的内容又是最基础的部分。
首先我们创建一个基础组件。
添加初始化数据并渲染该数据。


```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello word'
    }
  }
  render () {
    return (
      <div>{this.state.text}</div>
    );
  }
};

export default App;
```

## 条件渲染
根据不同的条件渲染不同的内容，有两种常用的方式。分别为三元表达式和与运算。

### 三元表达式
三元表达式适用于简单的条件渲染，例如单纯的文本节点。
```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello word',
      type: true
    }
  }
  render () {
    return (
      <div>{this.state.type ? this.state.text : ''}</div>
    );
  }
};

export default App;
```

### 与运算
与运算适用于较复杂的组件或dom的条件渲染，例如根据用户登录状态，是否显示完整的内容。
```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello word',
      type: true
    }
  }
  render () {
    return (
      <div>
        {this.state.type &&
          <div>this.state.text</div>
        }
      </div>
    );
  }
};

export default App;
```

## 列表循环
循环渲染算是业务开发的基础内容，我们推荐使用`map`的方式进行循环输出。
```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        id: 1,
        name: '张三'
      },{
        id: 2,
        name: '李四'
      },{
        id: 3,
        name: '王五'
      }]
    }
  }
  render () {
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            return (
              <div key={item.id}>{item.name}</div>
            )
          })
        }
      </div>
    );
  }
};

export default App;
```