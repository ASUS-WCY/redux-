// saga的入口文件
import { all } from 'redux-saga/effects'
import num from './num'
import info from './info'

// 将count和info的saga导入 结合后导出
export default function* rootSaga() {
  yield all([
    num(),
    info()
  ])
}

