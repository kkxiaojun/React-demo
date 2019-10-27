import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      mapList: [],
      inputValue: '' 
    }
    // 在 JavaScript 中，class 的方法默认不会绑定 this。
    // this.btnInputValue = this.btnInputValue.bind(this)
    // this.btnAdd = this.btnAdd.bind(this)
  }
  render() {
    let listItem = this.state.mapList.map((item, index) => {
      return <li key={index} dangerouslySetInnerHTML={{__html: item.value}} onClick={ this.btnDelete.bind(this, index) }></li>
    })
    return (
      <Fragment>
        <div className="container">
          <input value={ this.state.inputValue } onChange = { this.btnInputValue.bind(this) } />
          <button onClick={this.btnAdd.bind(this)}>提交</button>
        </div>
        {/* 列表 */}
        <ul>
          { listItem }
        </ul>
      </Fragment>
    )
  }
  btnInputValue(event) {
    this.setState({ inputValue: event.target.value })
  }
  btnAdd(e) {
    this.setState({
      mapList: [ { key: this.state.inputValue, value: this.state.inputValue }, ...this.state.mapList],
      inputValue: ''
    })
  }
  btnDelete(e,index) {
    let list = [...this.state.mapList]
    list.splice(index,1)
    console.log('list:', list)
    this.setState({
      mapList: list
    })
  }
}

export default ToDoList