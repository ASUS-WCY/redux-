import axios from 'axios'
import {
  takeEvery,
  call,
  put,
} from "@redux-saga/core/effects";
import {
  GET_INFO
} from "../constant";

// 设置axios的默认请求地址
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

function* getInfo() {
  const res = yield call(axios.get, '/users')
  yield put({

    // 利用saga中间件处理异步请求 并把处理后的action发送给reducer去
    // put的type要和 reducer的type一致要不然无法触发
    // put的type不能和 watchGetInfo中takeEvery的type一致 否则监听会被一致触发
    type: "GETINFO",
    data: {
      data: res.data
    }
  })
}

// 监听action触发的生成器
export default function* watchGetInfo() {
  
  // 监听每一次action的触发 并且触发getInfo生成器
  yield takeEvery(GET_INFO, getInfo)
}