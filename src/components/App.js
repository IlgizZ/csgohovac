import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import MainStartPage from './start_page/main_start_page_component'

export default class App extends Component {
  render () {
    return (
      <div className='bodyClass'>
        <MainStartPage />
      </div>
    )
  }
}
