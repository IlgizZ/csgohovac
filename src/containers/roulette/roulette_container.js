import React, { Component } from 'react'
import RouletteComponent from '../../components/roulette/roulette_component'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'

let AUTH = require('../../constants/auth.js')

class RouletteContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    return <RouletteComponent />
  }
}

function mapStateToProps (state) {
  return {
  }
}

RouletteContainer.propTypes = {
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RouletteContainer)
