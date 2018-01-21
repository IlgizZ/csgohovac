import React, { Component } from 'react'

export default class ProfileComponent extends Component {
  render () {
    var { steamid, balance, wager, tradeLink } = this.props
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
        <input type='text' value={tradeLink} onChange={() => {}} placeholder='input your tradelink here' /> <button>Save</button>
      </div>
    )
  }
}
