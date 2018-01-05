import { combineReducers } from 'redux'
import QuizReducer from './quiz_reducer.js'
import AuthReducer from './auth/auth_reducer.js'

const rootReducer = combineReducers({
  quiz: QuizReducer,
  user: AuthReducer
})

export default rootReducer
