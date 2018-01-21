import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth/auth_actions.js'
let C = require('../../constants/auth.js')

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.renderStatus = this.renderStatus.bind(this)
  }

  renderStatus () {
    let { user, signOut } = this.props
    switch (user.status) {
      case C.SIGNED_IN:
        return (
          <div>
            <Link to='/profile'>
              <p> Hello! {user.displayName} </p>
            </Link>
            <img src={user.photoURL} />
            <a href='javascript:void(0)' onClick={signOut}> Log out!</a>
          </div>
        )
      case C.ANONYMOUS:
        return (
          <a href='http://localhost:5000/cs-gohavoc/us-central1/auth/steam'> log in via steam </a>
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
  render () {
    var statusTag = this.renderStatus()

    return (
      <div>
        <Link to='/'>
          <p> Logo! </p>
        </Link>
        {statusTag}
      </div>
    )
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
