---
title: react教程007-react router dom
date: 2021-06-30
categories:
 - react教程
tags:
 - 教程
 - react
---

## react-router-dom

### 安装
`npm install -S react-router-dom`

### 使用方式
安装后需要

#### router
新建`router.js`文件，编写如下代码。
```jsx
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import List from './list';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/List" component={List}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;
```
#### 修改入口文件

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 导入刚才创建的router.js文件
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <Router /> {/*将根组件替换为Router*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

#### 页面跳转
```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  }
  handleClick (event) {
    this.props.history.push({
      pathname: '/List'
    })
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

### 参数传递
跳转页面时添加传递的参数。
```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  }
  handleClick (event) {
    this.props.history.push({
      pathname: '/List',
      state: {
        id: 1
      }
    })
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
在目标页面接收这个传递的参数。
```jsx
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        {this.props.history.location.state.id}
      </div>
    );
  }
};

export default App;
```
### 路由嵌套

```jsx
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import List from './list';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path="/" component={() => {
                return (
                  <Layout>
                    <Route path="/" component={App} />
                    <Route path="/index/abc" component={App} />
                  </Layout>
                )
              }}
              />
            <Route exact path="/List" component={List}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;
```