import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import QuizContainer from './containers/quiz/quiz_container'
import Profile from './components/profile/profile_component'
import Auth from './components/auth/auth'
import Navbar from './containers/layouts/navbar.js'

const configureRoutes = (store) => {
  var C = require('./constants/auth.js')
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/profile" render={() => (
          !loggedIn ? (
            <Redirect to="/"/>
          ) : (
            <Profile/>
          )
        )}/>
        <Route exact path='/' component={App} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/developer_test' component={QuizContainer} />
      </Switch>
    </div>
  )
}
export default configureRoutes
