import {
  delay,
  put,
  take,
  takeEvery
} from 'redux-saga/effects'
import {
  INCREMENT,
  INCREMENT_ASYNC
} from '../constant'

function* IncrementAsync() {
  const action = yield take(INCREMENT_ASYNC)

  // 模拟异步操作 延迟1000毫秒
  yield delay(1000)

  // 这里的type因为和下面的不一致 所以不会一直触发监听 造成死循环
  yield put({
    type: INCREMENT,
    data: action.data
  })
}

// 监听每一次type为INCREMENT_ASYNC的action 并触发IncrementAsync生成器 
export default function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, IncrementAsync)
}