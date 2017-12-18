import { push } from 'react-router-redux'
import * as firebase from 'firebase'
var C = require('../../constants/quiz_constants.js')

export function changeAnswer (currentAnswer, successor) {
  return {
    type: C.CHANGE_ANSWER,
    currentAnswer,
    successor
  }
}
export function init () {
  return {
    type: C.INIT
  }
}
export function answer () {
  return (dispatch, getState) => {
    var { nextQuestion } = getState().quiz

    if (nextQuestion === 'end') {
      dispatch({
        type: C.END_QUIZ,
        question: 'Thank you!'
      })

      firebase.database().ref().child('answers').push(getState().quiz.answers)
      console.log(getState().quiz.answers)

      setTimeout(function () {
        dispatch(push('/'))
      }, 2000)
    } else {
      let { answers, title, successor } = getState().quiz.questions[nextQuestion]

      dispatch({
        type: C.ADD_ANSWER,
        answers,
        question: title,
        successor
      })
    }
  }
}
