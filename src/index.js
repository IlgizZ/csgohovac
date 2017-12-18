import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAUdnQxVMicvu2SgA50Mm0hF_yasmwvFdk',
  authDomain: 'cs-gohavoc.firebaseapp.com',
  databaseURL: 'https://cs-gohavoc.firebaseio.com',
  projectId: 'cs-gohavoc',
  storageBucket: 'cs-gohavoc.appspot.com',
  messagingSenderId: '364685679261'
}
firebase.initializeApp(config)

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

// NOTE: хот реплейсмент при появлении новых верхних элементов в дереве редаксa
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
