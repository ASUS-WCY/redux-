import {
  ADD_PERSON
} from "../constant"

// 人员信息初始信息为空数组
const initState = []

export default function personReducer(preState = initState, action) {
  const {
    type,
    data
  } = action

  switch (type) {
    case ADD_PERSON:

      // 动态添加成员 返回一个新的数组 而不是同一块内存空间里的数组
      return [data, ...preState]

    default:
      return preState
  }
}