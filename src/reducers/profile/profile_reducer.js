var C = require('../../constants/profile.js')
var initialState = require('./initial_state.js')

module.exports = function (currentstate = initialState, action) {
  switch (action.type) {
    case C.INIT:
      return {
        ...currentstate,
        steamid: action.steamid,
        wager: action.wager,
        tradeLink: action.tradeLink,
        balance: action.balance,
        status: C.LOADED
      }
    case C.UPDATE_LINK:
      return {
        ...currentstate,
        tradeLink: action.tradeLink
      }

    default:
      return currentstate
  }
}
