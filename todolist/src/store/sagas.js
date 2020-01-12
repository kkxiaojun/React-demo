// saga能接收到action

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { api } from './api'
import axios from 'axios'

function* getInitList(action) {
  try {
    const res = yield axios.get('./list.json')
    // 生成新的action
    const action = ''
    // 代替dispatch
    yield put(action)
  } catch (error) {
    console.log('网络请求失败')
  }
}

// generator fuction，接收action
function* mySaga() {
  // 捕捉类型
  yield takeEvery('USER_FETCH_REQUESTED', getInitList)
}

export default mySaga