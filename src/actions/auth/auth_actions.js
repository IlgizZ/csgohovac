import * as firebase from 'firebase'
import { push } from 'react-router-redux'
let C = require('../../constants/auth.js')

export function startListeningToAuth () {
  return function (dispatch, getState) {
    dispatch({type: C.AWAITING})

    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user)
      if (user) {
        dispatch({type: C.SIGN_IN, user})
        dispatch(push('/'))
      } else {
        dispatch({type: C.LOGOUT})
        dispatch(push('/'))
      }
    })
  }
}

export function signOut () {
  return function (dispatch, getState) {
    dispatch({type: C.AWAITING})

    firebase.auth().signOut().then(() => {
      // handeled by onAuthStateChanged
    }).catch(error => {
      console.log(error)
      dispatch({type: C.ERROR})
    })
  }
}
