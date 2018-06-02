import * as firebase from 'firebase'
let C = require('../../constants/roulet.js')

export function bet (color) {
  return function (dispatch, getState) {
    const { uid, balance } = getState().user.uid
    const minBet = 1000

    if (balance < minBet) {
      dispatch({ type: C.LOW_BALANCE })
    }

    firebase.database().ref('users/' + uid).update({
      bet: color
    }).then(() => {
      dispatch({ type: C.BET })
    })
  }
}
