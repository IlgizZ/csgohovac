import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Roulette from './containers/roulette/roulette_container'
import QuizContainer from './containers/quiz/quiz_container'
import ProfileContainer from './containers/profile/profile_container'
import Auth from './components/auth/auth'
import Navbar from './containers/layouts/navbar.js'
import LeftMenu from './containers/layouts/leftMenu.js'
import Chat from './containers/layouts/chat.js'

const configureRoutes = (store) => {
  var C = require('./constants/auth.js')
  return (
    <div>
      <Navbar />
      <LeftMenu />
      <Chat />
      <Switch>
        <Route exact path="/profile" render={() => (
          !loggedIn ? (
            <Redirect to="/"/>
          ) : (
            <Profile/>
          )
        )}/>
        <Route exact path='/' component={Roulette} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/developer_test' component={QuizContainer} />
        <Route exact path='/profile' component={ProfileContainer} />
      </Switch>
    </div>
  )
}
export default configureRoutes
