import { combineReducers } from 'redux'
import QuizReducer from './quiz_reducer.js'
import AuthReducer from './auth/auth_reducer.js'
import ProfileReducer from './profile/profile_reducer.js'

const rootReducer = combineReducers({
  quiz: QuizReducer,
  user: AuthReducer,
  profile: ProfileReducer
})

export default rootReducer
