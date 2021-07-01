---
title: react教程005-react进阶
date: 2021-06-30
categories:
 - react教程
tags:
 - 教程
 - react
---

## 事件处理
`HTML`当中的原生事件可以绑定相应的函数，在react中也提供了相同的解决方案。我们以点击事件为例，在原生的处理中我们使用`on-click`的方式绑定点击事件。在react中，我们使用`onClick`这个方式进行绑定。

```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  }
  handleClick (event) {
    console.log(event)
  }
  render () {
    return (
      <div>
        <button
          onClick={() => this.handleClick()}
        >
          点击
        </button>
      </div>
    );
  }
};

export default App;
```

## 受控组件
在react中存在着单项数据流的特性，导致我们在输入框中的数据将不能同步到`state`的数据中，这时候就需要人为的控制数据的更新，保证`state`中的数据与实际dom的数据同步。而这种双向的数据同步，在react中称为受控组件。

```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ''
    }
  }
  changeCurrent (event) {
    const val = event.target.value;
    this.setState({ current: val })
  }
  render () {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.changeCurrent(event)}
          value={this.state.current}
        />
      </div>
    );
  }
};

export default App;
```

## 组件
组件作为react里和核心，`props`及状态管理是其中最有魅力的部分。而自由的组合各种组件更考验开发人员的基础是否扎实，思维是否更灵活。

### props
`props`作为组件的接收参数，首先是不允许改变的。我们只能使用接收的数据，而不能修改。如果需要对接收的数据进行加工处理，请使用`state`。
当然，`props`和普通js接收的参数是基本一致的，更高级的是，props可以接收`jsx`作为参数，这样可以让组件拥有极大的灵活性。为之后的组件组合提供了良好的基础。

### 状态提升
因为react的特性决定，单向数据流保证了数据和UI的一致性。如果在自己的`state`中维护这个数据将是轻松且愉快的。当多个组件都依赖于同一个数据时，这将产生复杂的数据。同步问题。所以，我们引入了状态提升这个概念。这时候我们将公共数据拿到公共的父组件中去维护。

```jsx
import React, { Component } from 'react';

class Comp1 extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>{this.props.name}</div>
    );
  }
};

class Comp2 extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>{this.props.name}</div>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三'
    }
  }
  render () {
    return (
      <div>
      	<Comp1 name={this.state.name} />
      	<Comp2 name={this.state.name} />
      </div>
    );
  }
};

export default App;
```

### 组合
当需求不确定的时候，我们总会将确定的部分先开发出来，然后等需求确定之后再去开发其功能。应对这类问题，react将使用组合的方式去处理。例如，当前页面的内容不确定是什么，需要等到运行的时候才知道，那么我们就可以将位置预留出来，等确定显示的内容时再进行处理。这种方式多用在布局组件上，而预留出来的位置，我们可以通过`props`传递`jsx`的方式处理。

```jsx
import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>{this.props.content}</div>
    );
  }
};

class Comp1 extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>内容</div>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三'
    }
  }
  render () {
    return (
      <div>
      	<Layout content={<Comp1 />} />
      </div>
    );
  }
};

export default App;
```