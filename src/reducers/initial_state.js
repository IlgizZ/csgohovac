import test from '../constants/poll'

module.exports = {
  quiz: {
    currentQuestion: test['0'].title,
    currentAnswers: test['0'].answers,
    currentAnswer: '',
    successor: null,
    answers: [],
    questions: test
  }
}
