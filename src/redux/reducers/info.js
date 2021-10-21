export default function getInfoReducer(preState = {}, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case "GETINFO":
      return Object.assign({}, preState, data)
    default:
      return preState
  }
}