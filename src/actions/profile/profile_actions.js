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

export function changeTradeLink (link) {
  return function (dispatch, getState) {
    if (validateLink(link)) {
      var uid = getState().user.uid
      firebase.database().ref('profiles/' + uid).update(
        { tradeLink: link }
      ).then(data => {
        console.log(data)
        dispatch({
          type: C.UPDATE_LINK,
          tradeLink: link
        })
        console.log('saved')
      })
    }
  }
}

function validateLink (link) {
  return true
}
