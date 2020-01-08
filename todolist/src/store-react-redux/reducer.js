import { CHANGE_INPUT_VALUE } from './actionTypes'
const defaultState = [
  {
    inputValue: '123',
    list: [
      {
        key: '上班打怪',
        value: '周末愉快'
      }
    ]
  }
]
export default (state = defaultState, action) => {
  if( action.type === CHANGE_INPUT_VALUE) {
    console.log(CHANGE_INPUT_VALUE)
    return state
  }
}
