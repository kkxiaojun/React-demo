import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './todoitem.css'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    // class 默认不绑定this
    this.handleClick = this.handleClick.bind(this)
  }
  // 可以避免组件做不需要的更新
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  // 父组件的render函数被运行时，它的子组件的render都将被执行一次
  render() {
    console.log('child render')
    const { content } = this.props
    return (
      <div className="item">
        <div className="left">{ content.key }</div>
        <div className="right" onClick={this.handleClick}>-</div>
      </div>)
  }
  handleClick() {
    // 采用es6的写法
    const { index, deleteItem } = this.props
    deleteItem(index)
  } 
}
TodoItem.propTypes = {
  content: PropTypes.object,
  index: PropTypes.number.isRequired,
  deleteItem: PropTypes.func
};
TodoItem.defaultProps = {
  index: 1
}
export default TodoItem