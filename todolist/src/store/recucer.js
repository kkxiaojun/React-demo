import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM  } from './actionTypes'

const defaultState = {
  inputValue: '123',
  list: [
    {
      key: '上班打怪',
      value: '周末愉快'
    }
  ]
}

// reducer可以接收state，但是不能修改state
export default (state = defaultState, action) => {
  console.log('state:', state, action)
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({ key: newState.inputValue, value: newState.inputValue})
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}