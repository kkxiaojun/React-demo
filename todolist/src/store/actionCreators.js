import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM  } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const deleteToDoItem = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})

export const addToDoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getToDoList = () => {
  return (dispatch) => {
    axios.get('./list.json').then(res => {
      console.log(res.data)
      const action = getInputChangeAction(res.data)
      dispatch(action)
    })
  }
}