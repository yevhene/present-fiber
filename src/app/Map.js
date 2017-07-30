import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Map.css'

import Car from './Car'

import { nmap } from './lib/utils'
import config from '../config'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = { tick: 0 }
  }

  tick() {
    if (config.FIBER) {
      ReactDOM.unstable_deferredUpdates(() =>
        this.setState((prevState) => ({
          tick: prevState.tick + 1
        }))
      )
    } else {
      this.setState((prevState) => ({
        tick: prevState.tick + 1
      }))
    }
  }

  componentDidMount() {
    setInterval(() => this.tick(), config.TICK)
  }

  render() {
    return (
      <div className="Map" style={config.BOUNDS}>
        {nmap(config.CARS, (_, i) => (
          <Car bounds={config.BOUNDS} key={i} tick={this.state.tick} />
        ))}
      </div>
    )
  }
}

export default Map
