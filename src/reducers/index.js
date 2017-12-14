import { combineReducers } from 'redux'
import QuizReducer from './quiz_reducer.js'

const rootReducer = combineReducers({
  quiz: QuizReducer
})

export default rootReducer
