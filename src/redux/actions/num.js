// count 组件的 action
import {
  INCREMENT,
  INCREMENT_ASYNC
} from "../constant";

export const increment = data => ({
  type: INCREMENT,
  data
})

export const incrementAsync = data => ({
  type: INCREMENT_ASYNC,
  data
})