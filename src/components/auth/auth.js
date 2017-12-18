import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingState: 'NOT'
    }
    this.signOut = this.signOut.bind(this)
  }

  signOut () {
    this.setState({
      loadingState: 'LOADING'
    })
    firebase.auth().signOut().then(() => {
      this.setState({
        loadingState: 'NOT'
      })
    }).catch(error => {
      console.log(error)
      this.setState({loadingState: 'Error'})
    })
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
          loadingState: 'Loged',
          username: user.displayName
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({loadingState: 'Error'})
      })
  }

  render () {
    switch (this.state.loadingState) {
      case 'NOT':
        return (
          <a href='http://localhost:5000/cs-gohavoc/us-central1/auth/steam'> log in via steam </a>
        )
      case 'Loged':
        return (
          <div>
            <p> Hello! {this.state.username} </p>
            <p onClick={this.signOut}> Log out! </p>
          </div>
        )
      case 'Error':
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

Auth.propTypes = {

}

export default Auth
