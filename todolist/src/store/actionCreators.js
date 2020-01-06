import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM  } from './actionTypes'

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