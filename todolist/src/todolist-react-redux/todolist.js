import React, { Component } from 'react'
import { Provider } from 'react-redux'

class Todolist extends Component {
  render() {
    return (
      <Provider>
        <div>
          <input />
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </Provider>
    )
  }
}

export default Todolist