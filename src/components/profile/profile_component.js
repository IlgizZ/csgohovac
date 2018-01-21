import React, { Component } from 'react'

export default class ProfileComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {tradeLink: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({tradeLink: event.target.value})
  }

  render () {
    var { steamid, balance, wager } = this.props
    return (
      <div>
        <h1 >
          Summary
        </h1>
        <div>
          Your SteamID64: {steamid}
          Your balance: {balance}
          Your wager: {wager}
        </div>
        <p>current link: {this.props.tradeLink || 'Not added yet'}</p>
        <input type='text' value={this.state.tradeLink} onChange={this.handleChange} placeholder='input your tradelink here' />
        <button onClick={() => { this.props.submit(this.state.tradeLink) }}>Change</button>
      </div>
    )
  }
}
