import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth/auth_actions.js'
let C = require('../../constants/auth.js')

class Chat extends Component {
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
      <ul id='slide-out1' className='side-nav fixed right-aligned chatnav' >
        <div className='chat-body'>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>

            </div>
            <div className='clr' />
          </div>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>
            </div>
            <div className='clr' />
          </div>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>
            </div>
            <div className='clr' />
          </div>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>
            </div>
            <div className='clr' />
          </div>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>
            </div>
            <div className='clr' />
          </div>
          <div className='message-body-chat'>
            <div className='left-bb'>
              <img src='http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg' alt='ava' />
            </div>
            <div className='right-bb'>
              <div className='message-top'><span className='profile-name'>Ice cube</span><span className='mss-time'>10.46</span></div>
              <div className='messages'><p>Ice Cube  Guests To Perform N.W.A Tracks At BET E</p></div>
            </div>
            <div className='clr' />
          </div>

        </div>

        <div className='input-form'>

          <form className='fform'>
            <textarea className='materialize-textarea text-input' placeholder='Enter your message' />
          </form>
          <button><i className='material-icons'>send</i></button>
          <div className='smiles'><i className='material-icons'>tag_faces</i></div>
        </div>
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

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
