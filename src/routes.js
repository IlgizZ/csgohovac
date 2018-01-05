import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import QuizContainer from './containers/quiz/quiz_container'
import Auth from './components/auth/auth'
import Navbar from './containers/layouts/navbar.js'

const configureRoutes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/developer_test' component={QuizContainer} />
        <Route exact path='/auth' component={Auth} />
      </Switch>
    </div>
  )
}
export default configureRoutes
