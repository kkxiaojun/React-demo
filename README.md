# todoList
## 注意点
`react.js`细节
1. 尽量不要用index做key（为什么）
> key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。如果<font color=red>列表项目的顺序可能会变化</font>，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
2. 方法需要绑定this（为什么）
> 在 JavaScript 中，class 的方法默认不会绑定 this。
3. state只能用setState改变
4. 对于数组的新增可以使用展开运算符`[...this.state.mapList, a, b]`


`JSPX`细节

1. 样式应该用`className`代替`class`
2. `dangerouslySetInnerHTML`不会被转义。`JSX`默认是转义的。
3. `for`应该用`htmlFor`代替

## redux
1. store. 存储数据
2. action. 动作
3. reducer 处理逻辑，处理数据

`store`
```javascript
const store = {
  list: []
}
```

`action`
```javascript
const action = {
  type: 'change_value',
  value: 1
}
store.dispatch(action)
```

`reducer`
```javascript
(previousState, action) => newState

subscribe() // 监听每次修改的情况
```
**组件**
1. UI组件。纯渲染组件，不做逻辑擦操作。
2. 容器组件。处理数据和逻辑。
3. 无状态组件。类似纯函数。

## react-thunk
发送异步请求，获取数据`axios`

过程：
1. 引入`redux-thunk`中间件
2. 在`actionCreators`中创建返回值是函数的`action`
3. 在`componentDidMount`生命周期中发送`action`，`action`是函数
4. 在`action`中，发送异步请求，接收返回数据，再调用action改变store

`actionCreators`
```javascript
export const getToDoList = () => {
  return (dispatch) => {
    axios.get('./list.json').then(res => {
      console.log(res.data)
      const action = getInputChangeAction(res.data)
      dispatch(action)
    })
  }
}
```
## react-saga


## react-redux
`connect`用于从 UI 组件生成容器组件
```javascript
import { connect } from 'react-redux'
const VisibleTodoList = connect()(TodoList);
```

1. 输入逻辑：数据state通过`mapStateToProps`传输。
2. 输出逻辑：用户发出的动作如何变为action，通过`mapDispatchToProps`传输。
```javascript
import { connect } from 'react-redux'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```

`mapStateToProps`可以从state算出 todos 的值
```javascript
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
```
`mapDispatchToProps`用来建立 UI 组件的参数到store.dispatch方法的映射

```javascript
const mapDispatchToProps = {
  onClick: (filter) => {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
}
```

`<Provider>`
connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
1. 方法一。state对象作为参数，传入容器组件，但是层级深很麻烦。
2. 方法二。React-Redux 提供Provider组件，可以让容器组件拿到state。

```javascript

```