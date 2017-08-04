import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './App.css'

import Map from './Map'

import config from '../config'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tick: 0,
      isFiberEnabled: false
    }
  }

  tick = () => {
    this.setState((prevState) => ({
      tick: prevState.tick + 1
    }))
  }

  handleTick = () => {
    if (this.state.isFiberEnabled) {
      ReactDOM.unstable_deferredUpdates(this.tick)
    } else {
      this.tick()
    }
  }

  toggleFiber = () => {
    this.setState((prevState) => ({
      isFiberEnabled: !prevState.isFiberEnabled
    }))
  }

  title() {
    if (this.state.isFiberEnabled) {
      return 'Fiber'
    } else {
      return 'Stack'
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(this.handleTick, config.TICK)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    return (
      <div className="App">
        <label className="App-toggle">
          <input
            type="checkbox"
            value={this.state.isFiberEnabled}
            onChange={this.toggleFiber}
          />
          {this.title()}
        </label>
        <hr />
        <Map tick={this.state.tick} />
      </div>
    )
  }
}

export default App
