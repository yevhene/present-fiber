import React, { Component } from 'react'
import './Car.css'

import Path from './model/Path'

import config from '../config'

class Car extends Component {
  constructor(props) {
    super(props)

    const path = new Path()

    this.state = {
      time: 0,
      location: path.location(),
      path: path,
      speed: this.randomSpeed()
    }
  }

  componentWillReceiveProps(props) {
    this.setState(() => ({
      time: props.time,
      location: this.state.path.location(this.distance(props.time))
    }))
  }

  randomSpeed() {
    return Math.ceil(config.SPEED_UNIT * (Math.random() + 0.5))
  }

  distance(time) {
    return Math.ceil(this.state.speed * (time / 1000))
  }

  render() {
    return (
      <div className="Car" style={this.state.location}>
        <div className="Car-text">
          {Math.ceil(this.state.time / 1000) % 10}
        </div>
      </div>
    )
  }
}

export default Car
