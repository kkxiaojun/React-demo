import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    // 当props或者state发生改变，render函数会重新执行
    this.state = { 
      mapList: [
        {
          key: '上班打怪',
          value: '周末愉快'
        }
      ],
      inputValue: '' 
    }
    // 在 JavaScript 中，class 的方法默认不会绑定 this。
    this.btnInputValue = this.btnInputValue.bind(this)
    this.btnAdd = this.btnAdd.bind(this)
    this.btnDelete = this.btnDelete.bind(this)
    this.btnKeyPress = this.btnKeyPress.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* header */}
        <header>
          <div className="header-left">
            <span className="title">ToDoList</span>
          </div>
          <div className="header-right">
            <input placeholder="添加ToDo" value={ this.state.inputValue } onKeyPress={this.btnKeyPress} onChange = { this.btnInputValue } />
            <button onClick={ this.btnAdd }>提交</button>
          </div>
        </header>
        {/* 列表 */}
        <section>
          { this.getTodoItem() }
        </section>
      </Fragment>
    )
  }
  getTodoItem() {
    return this.state.mapList.map((item, index) => {
      return (
        <TodoItem 
        content={item} 
        index={index} 
        key={index}
        deleteItem={this.btnDelete} />
      )
    })
  }
  btnInputValue(event) {
    const value = event.target.value
    // setState的更新可能是异步的，采用es6的箭头函数
    this.setState(() => ({ inputValue: value }))
  }
  btnAdd(e) {
    // setState的更新可能是异步的，采用es6的箭头函数
    this.setState((prevState) => ({
      mapList: [ { key: prevState.inputValue, value: prevState.inputValue }, ...prevState.mapList],
      inputValue: ''
    }))
  }
  btnDelete(index) {
    // setState的更新可能是异步的，采用es6的箭头函数
    this.setState((prevState) => {
      const mapList = [...prevState.mapList]
      mapList.splice(index,1)
      return { mapList }
    })
  }
  btnKeyPress(e) {
    // 判断键盘事件是否为enter
    if(e.nativeEvent.keyCode === 13) {
      this.btnAdd(e)
    }
  }
}

export default ToDoList