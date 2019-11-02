import React, { Component } from 'react'
import './todoitem.css'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    // class 默认不绑定this
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props
    return (
      <div className="item">
        <div className="left">{ content.key }</div>
        <div className="right" onClick={this.handleClick}>-</div>
      </div>)
  }
  handleClick() {
    // 采用es6的写法
    const { content, index, deleteItem } = this.props
    deleteItem(index)
  } 
}

export default TodoItem