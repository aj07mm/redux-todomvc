import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({ //all reducers are in one reducer?
  todos
})

export default rootReducer
