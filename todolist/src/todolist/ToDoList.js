import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import axios from 'axios'
import store from '../store/index'
import { getInputChangeAction, deleteToDoItem, addToDoItem } from '../store/actionCreators'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    // store
    console.log('store:', store.getState())
    // 当props或者state发生改变，render函数会重新执行
    this.state = store.getState()
    // 在 JavaScript 中，class 的方法默认不会绑定 this。
    this.btnInputValue = this.btnInputValue.bind(this)
    this.btnAdd = this.btnAdd.bind(this)
    this.btnDelete = this.btnDelete.bind(this)
    this.btnKeyPress = this.btnKeyPress.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    // 更新store
    store.subscribe(this.handleStoreChange)
  }
  render() {
    console.log('render')
    return (
      <Fragment>
        {/* header */}
        <header>
          <div className="header-left">
            <span className="title">ToDoList</span>
          </div>
          <div className="header-right">
            <input placeholder="添加ToDo" value={ this.state.inputValue } onKeyPress={this.btnKeyPress} onChange = { this.btnInputValue } />
            {/* <button onClick={ this.btnAdd }>提交</button> */}
          </div>
        </header>
        {/* 列表 */}
        <section >
          { this.getTodoItem() }
        </section>
      </Fragment>
    )
  }
  getTodoItem() {
    if (this.state.list && this.state.list.length) {
      return this.state.list.map((item, index) => {
        return (
          <TodoItem 
          content={item} 
          index={index} 
          key={index}
          deleteItem={this.btnDelete} />
        )
      })
    } else {
      return ''
    }
  }
  btnInputValue(event) {
    const value = event.target.value
    // setState的更新可能是异步的，采用es6的箭头函数
    // this.setState(() => ({ inputValue: value }))
    // action
    const action = getInputChangeAction(value)
    store.dispatch(action)
  }
  btnAdd(e) {
    // setState的更新可能是异步的，采用es6的箭头函数
    this.setState((prevState) => ({
      list: [ { key: prevState.inputValue, value: prevState.inputValue }, ...prevState.list],
      inputValue: ''
    }))
    // action
    const action = addToDoItem()
    store.dispatch(action)
  }
  btnDelete(index) {
    // action delete
    const action = deleteToDoItem(index)
    store.dispatch(action)
    // setState的更新可能是异步的，采用es6的箭头函数
    // this.setState((prevState) => {
    //   const list = [...prevState.list]
    //   list.splice(index,1)
    //   return { list }
    // })
  }
  btnKeyPress(e) {
    // 判断键盘事件是否为enter
    if(e.nativeEvent.keyCode === 13) {
      this.btnAdd(e)
    }
  }
  // store发生变化
  handleStoreChange() {
    console.log('store:', store.getState())
    this.setState(store.getState())
  }
  // 发送ajax请求
  componentDidMount() {
    axios.get('/api/todolist')
    .then(res => {
      console.log(res)
    })
    .catch(() => {
      console.log('error')
    })
  }
}

export default ToDoList