import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import QuizContainer from './containers/quiz_container'
import PaperComponent from './components/start_page/paper_component'
const configureRoutes = () => {
  return (
    <div className='bodyClass'>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/developer_test' component={QuizContainer} />
        <Route exact path='/white_paper' component={PaperComponent} />
      </Switch>
    </div>
  )
}
export default configureRoutes
