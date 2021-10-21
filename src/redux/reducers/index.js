// reducer的入口文件
import { combineReducers } from "redux";
import infoReducer from './info'
import numReducer from './num'

// 将 count 和 info 的reducer导入并结合后导出
export default combineReducers({
  infoReducer,
  numReducer
})
