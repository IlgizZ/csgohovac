import React, { Component } from 'react'
import ProfileComponent from '../../components/profile/profile_component'
import { initProfile, changeTradeLink } from '../../actions/profile/profile_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'

let AUTH = require('../../constants/auth.js')
let PROFILE = require('../../constants/profile.js')

class ProfileContainer extends Component {
  constructor (props) {
    super(props)
    this.checkUserState = this.checkUserState.bind(this)
  }

  checkUserState () {
    if (this.props.profile.status === PROFILE.LOADED)
      return
    switch (this.props.user.status) {
      case AUTH.SIGNED_IN:
        this.props.initProfile()
        break
      case AUTH.UNKNOWN:
        break
      case AUTH.AWAITING:
        break
      default:
        this.props.push('/')
    }
  }

  componentDidMount () {
    this.checkUserState()
  }

  componentWillReceiveProps (nextProps) {
    this.checkUserState()
  }

  render () {
    if (this.props.profile.status === PROFILE.NOT_LOADED)
      return <p>LOADING ... </p>
    var { steamid, balance, wager, tradeLink } = this.props.profile
    return (
      <ProfileComponent wager={wager} submit={this.props.changeTradeLink} balance={balance} steamid={steamid} tradeLink={tradeLink} />
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    profile: state.profile
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.shape({
    steamid: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    wager: PropTypes.number.isRequired
  })
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      initProfile: initProfile,
      changeTradeLink: changeTradeLink,
      push: push
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
