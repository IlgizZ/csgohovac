import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth/auth_actions.js'
let C = require('../../constants/auth.js')

class Navbar extends Component {
  render () {
    let { user, signOut } = this.props

    switch (user.status) {
      case C.SIGNED_IN:
        return (
          <div>
            <p> Hello! {user.displayName} </p>
            <img src={user.photoURL} />
            <a href="javascript:void(0)" onClick={signOut}> Log out!</a>
          </div>
        )
      case C.ANONYMOUS:
        return (
          <a href='http://localhost:5000/cs-gohavoc/us-central1/auth/steam?ref=uid1'> log in via steam </a>
        )
      case C.ERROR:
        return (
          <p>Error!</p>
        )
      default:
        return (
          <p>LOADING...</p>
        )
    }
  }
}

function mapStateToProps ({ user }) {
  return {
    user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      signOut: signOut
    },
    dispatch
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
