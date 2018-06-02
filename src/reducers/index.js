import { combineReducers } from 'redux'
import AuthReducer from './auth/auth_reducer.js'
import ProfileReducer from './profile/profile_reducer.js'

const rootReducer = combineReducers({
  user: AuthReducer,
  profile: ProfileReducer
})

export default rootReducer
