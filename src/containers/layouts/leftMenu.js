import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth/auth_actions.js'
let C = require('../../constants/auth.js')

class LeftMenu extends Component {
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
            <li className='profile'>
              <img src='assets/img/ava.png' alt='ava' />
              <a className='dropdown-button btn prof_btn' data-beloworigin='true' href='#' data-activates='dropdown1' style={{background: 'none', padding: '0', boxShadow: 'none', height: '20px', lineHeight: '20px', marginLeft: '22px', fontWeight: '400', color: '#d3d4d5'}}>Irvine Welsh<i className='material-icons'>arrow_drop_down</i></a>
              <span className='status'>Liquid Gaming</span>
              <div className='clr' />
              <ul id='dropdown1' className='dropdown-content'>
                <li />
                <li />
              </ul>
            </li>
            <li>
              <span className='user_coins'>COINS <span>2167</span><a href='#' className='waves-effect waves-darken'><img src='assets/img/plus.png' alt='' className='' /></a></span>
            </li>
            <li className='f_coins'>
              <a href='#' className='free_coins waves-effect waves-light' style={{height: '60px', padding: '23px 0 23px 0', color: '#fff', fontWeight: '200', lineHeight: '14px', textAlign: 'center'}}>FREE COINS</a>
            </li>
          </div>
        )
      case C.ANONYMOUS:
        return true
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
    let statusTag = this.renderStatus()

    return (
      <ul id='slide-out' className='side-nav fixed sidenav_left'>
        { statusTag }
        <li className='left_menu' style={{marginTop: '32px'}}><a href='' className='active_left_menu waves-effect waves-light'>rewards</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>transactions</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>legends</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>support</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>fairness</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>tos</a></li>
        <li className='left_menu'><a href='' className='waves-effect waves-light'>faq</a></li>
        <li className='mmut'>
          <a><i className='material-icons' >volume_mute</i>MUTE</a>

          <ul className='collapsible' data-collapsible='accordion'>
            <li>
              <div className='collapsible-header'>ENG <i className='material-icons right'>arrow_drop_down</i></div>
              <div className='collapsible-body language'><a><span>RUS</span><div className='clr' /></a><div className='clr' /></div>

            </li>
          </ul>
        </li>
        <li className='social-ic'> <div className=' bott'><a href='#' className='tiwt soc'><img src='assets/img/twit.png' /></a></div>
          <div className=' bott'> <a href='#' className='facebook soc'><img src='assets/img/facebook.png' /></a></div>
          <div className=' bott'><a href='#' className='insta soc'><img src='assets/img/insta.png' /></a></div></li>
        <li />
        <li />
        <li />
      </ul>
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

LeftMenu.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
