---
title: react教程006-react高级
date: 2021-06-30
categories:
 - react教程
tags:
 - 教程
 - react
---

# context
当我们需要一个全局的数据时，简单的做法可以使用`context`来实现。
```jsx
import React, { Component, createContext } from 'react';

const UserName = createContext('张三')

class Comp1 extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>你好{this.context}</div>
    );
  }
};
Comp1.contextType = UserName

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <UserName.Provider value="李四">
        <Comp1 />
      </UserName.Provider>
    );
  }
};

export default App;
```

## refs
一般情况下，我们只需要关注数据的变化，不需要关注dom元素。当有特殊需求的时候，需要获取dom元素，这种情况下我们可以使用`refs`。

```jsx
import React, { Component, createRef } from 'react';

const UserName = createContext('张三')

class Comp1 extends Component {
  constructor(props) {
    super(props)
    
  }
  render () {
    return (
      <div ref={this.props.selfRef}>你好</div>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.formRef = createRef();
  }
  handleClick (event) {
    console.log(event)
    console.log(this.formRef.current)
  }
  render () {
    return (
      <UserName.Provider value="李四">
        <Comp1 selfRef={this.formRef} />
        <button
          onClick={() => this.handleClick()}
        >
          点击
        </button>
      </UserName.Provider>
    );
  }
};

export default App;
```