import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB2VNB3Z30LMl7lS-XGbmfmT9bXG5rZOkM',
  authDomain: 'emploreum-b3df5.firebaseapp.com',
  databaseURL: 'https://emploreum-b3df5.firebaseio.com',
  projectId: 'emploreum-b3df5',
  storageBucket: 'emploreum-b3df5.appspot.com',
  messagingSenderId: '594243948757'
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
