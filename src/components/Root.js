import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import configureRoutes from '../routes'
import { Provider } from 'react-redux'

class Root extends Component {
  render () {
    const { store, history } = this.props
    const routes = configureRoutes(store)
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>

          {routes}
        </ConnectedRouter>
      </Provider>
    )
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
