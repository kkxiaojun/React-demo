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
4. Fragment占位

**父子组件通信**

1. 父组件传值给子组件用属性，子组件接收用`this.props`，子组件内部状态维护用`state`
2. 子组件使用父组件的方法，直接用属性传递方法

`state`的可能更新可能是异步的

1. react中更新状态只能用setState
2. 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
3. 用es6的写法能避免不小心改变了state的状态
```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 // props 做为第二个参数：
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

```

3. State 的更新会被合并.当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。