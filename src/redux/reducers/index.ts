//@ts-ignore
import * as Redux from 'redux'

const demo = (state={}, action) => {
  switch (action.type) {
    case 'addTodo':
      return { ...state, flag: true }
    case 'deleteTodo':
      return { ...state, flag: false }
    default:
      return state
  }
}
const model = (state={name:'111'}, action) => {
  switch (action.type) {
    case 'getModel':
      return { ...state }
    case 'setModel':
      state.name = action.payload;
      return { ...state }
    default:
      return state
  }
}
const rootReducer = Redux.combineReducers({
  demo,
  model,
})
const updateReducer = (news) => {
  return news;
}
export default rootReducer
