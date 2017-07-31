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
      fiberEnabled: false
    }
  }

  tick = () => {
    this.setState((prevState) => ({
      tick: prevState.tick + 1
    }))
  }

  handleTick = () => {
    if (this.state.fiberEnabled) {
      ReactDOM.unstable_deferredUpdates(this.tick)
    } else {
      this.tick()
    }
  }

  toggleFiber = () => {
    this.setState((prevState) => ({
      fiberEnabled: !prevState.fiberEnabled
    }))
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
            value={this.state.fiberEnabled}
            onChange={this.toggleFiber}
          />
          Fiber
        </label>
        <hr />
        <Map tick={this.state.tick} />
      </div>
    )
  }
}

export default App
