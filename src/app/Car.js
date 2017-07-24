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
      tick: 0,
      targetTick: 0,
      speed: Math.floor(Math.random() * config.UNIT)
    }
  }

  componentWillReceiveProps(props) {
    this.setState(() => ({
      tick: props.tick
    }), () => {
      if (this.state.tick >= this.state.targetTick) {
        this.changeLocation()
      }
    })
  }

  random(bound) {
    return Math.floor(
      (Math.random() * bound) / config.UNIT
    ) * config.UNIT
  }

  ticks(length) {
    return Math.floor(Math.abs(length) / this.state.speed)
  }

  changeLocation() {
    const newStyle = {...this.state.style}
    let ticks = 0
    if (Math.random() > 0.5) {
      newStyle.top = this.random(this.props.bounds.height)
      ticks = this.ticks(this.state.style.top - newStyle.top)
    } else {
      newStyle.left = this.random(this.props.bounds.width)
      ticks = this.ticks(this.state.style.left - newStyle.left)
    }
    newStyle.transitionDuration = `${ticks * config.TICK / 1000}s`
    this.setState((state) => ({
      style: newStyle, targetTick: state.tick + ticks
    }))
  }

  render() {
    return (
      <div className="Car" style={this.state.style} />
    )
  }
}

export default Car
