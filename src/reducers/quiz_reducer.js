var C = require('../constants/quiz_constants.js')
var initialState = require('./initial_state.js')

module.exports = function (currentstate = initialState.quiz, action) {
  switch (action.type) {
    case C.ADD_ANSWER:
      return {
        ...currentstate,
        answers: [...currentstate.answers, currentstate.currentAnswer],
        currentAnswers: action.answers,
        currentQuestion: action.question,
        currentAnswer: '',
        successor: action.successor
      }
    case C.END_QUIZ:
      return {
        answers: [...currentstate.answers, currentstate.currentAnswer],
        currentAnswers: [],
        currentQuestion: action.question
      }
    case C.CHANGE_ANSWER:
      return {
        ...currentstate,
        currentAnswer: action.currentAnswer,
        nextQuestion: action.successor
      }
    case C.INIT:
      return initialState.quiz
    default:
      return currentstate
  }
}
