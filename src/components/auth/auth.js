import React, { Component } from 'react'
import * as firebase from 'firebase'

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingState: 'NOT'
    }
  }

  componentWillMount () {
    const queryString = require('query-string')
    const params = queryString.parse(this.props.location.search)
    const token = params.token
    if (!token)
      return

    this.setState({
      loadingState: 'LOADING'
    })

    firebase.auth().signInWithCustomToken(token)
      .then(user => {
        this.setState({
          loadingState: 'Loged'
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({loadingState: 'Error'})
      })
  }

  render () {
    switch (this.state.loadingState) {
      case 'LOADING':
        return (
          <p>LOADING ...</p>
        )
      default:
        return (
          <p>ERROR!</p>
        )
    }
  }
}

export default Auth
