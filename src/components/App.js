import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1 >
          Hello world!
        </h1>
        <Link to="/developer_test">Go to quiz</Link>
        <Link to="/auth">Go to Authentication</Link>
      </div>
    )
  }
}
