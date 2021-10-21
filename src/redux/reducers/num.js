import {
  INCREMENT
} from "../constant";

export default function incrementReducer(preState = 0, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    default:
      return preState
  }
}