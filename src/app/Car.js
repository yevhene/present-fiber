import React, { Component } from 'react'
import './Car.css'

import config from '../config'

class Car extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        top: this.random(this.props.bounds.height),
        left: this.random(this.props.bounds.width)
      },
      targetTick: 0
    }
  }

  componentWillReceiveProps(props) {
    if (props.tick >= this.state.targetTick) {
      this.changeLocation()
    }
  }

  random(bound) {
    return Math.floor(
      (Math.random() * bound) / config.UNIT
    ) * config.UNIT
  }

  randomTicks() {
    return Math.ceil(Math.random() * config.SPEED_K + config.SPEED_B)
  }

  changeLocation() {
    const newStyle = {...this.state.style}
    if (Math.random() > 0.5) {
      newStyle.top = this.random(this.props.bounds.height)
    } else {
      newStyle.left = this.random(this.props.bounds.width)
    }

    const ticks = this.randomTicks()
    newStyle.transitionDuration = `${ticks * config.TICK / 1000}s`

    this.setState((state) => ({
      style: newStyle,
      targetTick: this.state.targetTick + ticks
    }))
  }

  render() {
    var e = performance.now() + 0.8;
    while (performance.now() < e) {
      // Artificially long execution time.
    }

    return (
      <div className="Car" style={this.state.style}>
        <div className="Car-text">
          {this.state.targetTick - this.props.tick}
        </div>
      </div>
    )
  }
}

export default Car
