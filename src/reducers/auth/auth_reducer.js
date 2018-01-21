var C = require('../../constants/auth.js')
var initialState = require('./initial_state.js')

module.exports = function (currentstate = initialState, action) {
  switch (action.type) {
    case C.AWAITING:
      return {
        status: C.AWAITING
      }
    case C.SIGN_IN:
      return {
        ...currentstate,
        status: C.SIGNED_IN,
        photoURL: action.user.photoURL,
        displayName: action.user.displayName,
        uid: action.user.uid
      }
    case C.LOGOUT:
      return {
        status: C.ANONYMOUS
      }
    default:
      return currentstate
  }
}
