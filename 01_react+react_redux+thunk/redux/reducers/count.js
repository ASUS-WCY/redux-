import {
  INCREMENT,
  DECREMENT,
} from "../constant"

// 设置初始值
const initState = 0

// 导出一个函数 参数一为初始值 参数二为行为
export default function countReducer (preState = initState, action) {

  // 解构赋值获取 action 中的 type 和 data
  const {
    type,
    data
  } = action
  switch (type) {

    case INCREMENT: // 加法
      return preState + data;

    case DECREMENT: // 减法
      return preState - data;

      // switch选择进入default时 一般表示reducer初始化
    default:
      return preState
  }
}