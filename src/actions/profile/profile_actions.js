import * as firebase from 'firebase'
var C = require('../../constants/profile.js')

export function initProfile () {
  return function (dispatch, getState) {
    var uid = getState().user.uid

    firebase.database().ref('profiles/' + uid).once('value').then(snapshot => {
      var profile = snapshot.val()
      var steamid, balance, wager, tradeLink

      steamid = profile.steam.steamid
      balance = profile.balance
      wager = profile.wager_balance
      tradeLink = profile.tradeLink
      
      dispatch({
        type: C.INIT,
        steamid,
        wager,
        balance,
        tradeLink
      })
    })
  }
}
