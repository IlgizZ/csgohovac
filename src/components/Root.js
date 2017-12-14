import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import configureRoutes from '../routes'
import { Provider } from 'react-redux'

class Root extends Component {
  render () {
    const routes = configureRoutes()
    const { store, history } = this.props
    return (
      <div className='bodyClass'>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            {routes}
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}
// https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
