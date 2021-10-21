import {
  INCREMENT,
  DECREMENT,
} from "../constant";

export const Increment = data => ({
  type: INCREMENT,
  data
})

export const Decrement = data => ({
  type: DECREMENT,
  data
})

export const IncrementAsync = (data, time) => {
  // 当action为函数形式时 store会自动传递一个dispatch作为参数进去
  return dispatch => (
    setTimeout(() => {
      dispatch(Increment(data))
    }, time)
  )
}