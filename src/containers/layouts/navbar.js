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
            <a href='javascript:void(0)' onClick={signOut}> Log out!</a>
          </div>
        )
      case C.ANONYMOUS:
        return (
          <div>
            <div className='top_g steam_logg'><a href='http://localhost:5000/cs-gohavoc/us-central1/auth/steam' className='steam_login'><img src='assets/img/steam_logo.png' /></a></div>
            <div className='top_g steamm hide-on-med-and-down'><a href='http://localhost:5000/cs-gohavoc/us-central1/auth/steam' className='steam_login'><img src='assets/img/steam_log.png' /></a></div>
          </div>
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
      <header>
        <nav>
          <div className='nav-wrapper'>
            <a href='#!' className='brand-logo'><img src='assets/img/logo.png' alt='logo' /></a>
            <a href='#' data-activates='mobile-demo' className='button-collapse'><i className='material-icons'>menu</i></a>
            <a href='#' data-activates='slide-out' className='button-collapse'><i className='material-icons'>person</i></a>
            <a href='#' data-activates='slide-out1' className='header-button hide-on-large-only right'><i className='material-icons'>chat</i></a>
            <div className='row'>
              <ul className='left hide-on-med-and-down top_menu'>
                <li><a href='#' className=''>Crash</a></li>
                <li><a href='#' className='active_menu'>Roulette</a></li>
                <li><a href='#' className=''>Mines</a></li>
                <li><a href='#' className=''>Store</a></li>
                <li><a href='#' className=''>Jackpot</a></li>
                <li><a href='#' className=''>Withdraw</a></li>
              </ul>
              {statusTag}
              <div className='top_g sc'><a href='#' className='tiwt soc'><img src='assets/img/twit.png' /></a></div>
              <div className='top_g sc'> <a href='#' className='facebook soc'><img src='assets/img/facebook.png' /></a></div>
              <div className='top_g sc'><a href='#' className='insta soc'><img src='assets/img/insta.png' /></a></div>
            </div>
            <ul className='side-nav' id='mobile-demo'>
              <li><a href='#' className=''>Crash</a></li>
              <li><a href='#' className='active_left_menu'>Roulette</a></li>
              <li><a href='#' className=''>Mines</a></li>
              <li><a href='#' className=''>Store</a></li>
              <li><a href='#' className=''>Jackpot</a></li>
              <li><a href='#' className=''>Withdraw</a></li>
            </ul>
          </div>
        </nav>
      </header>
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
