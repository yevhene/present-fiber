import config from '../../config'

class Path {
  constructor() {
    this.length = 0
    this.points = []
    this.components = []

    this.generateComponents()
  }

  random(bound) {
    return Math.floor(
      (Math.random() * bound) / config.UNIT
    ) * config.UNIT
  }

  generateComponents() {
    const startingPoint = {
      top: this.random(config.BOUNDS.height),
      left: this.random(config.BOUNDS.width)
    };
    this.points.push(startingPoint)

    const numberOfComponents = Math.ceil(Math.random() * 10 + 5)
    for (let i = 1; i <= numberOfComponents; ++i) {
      const lastPoint = this.points[i - 1]
      if (Math.random() > 0.5) {
        const point = {
          top: lastPoint.top,
          left: this.random(config.BOUNDS.width)
        }
        this.addComponentTo(point)
      } else {
        const point = {
          top: this.random(config.BOUNDS.height),
          left: lastPoint.left
        }
        this.addComponentTo(point)
      }
    }

    this.addComponentTo(startingPoint)
  }

  addComponentTo(point) {
    const lastPoint = this.points[this.points.length - 1]
    this.points.push(point)
    const length = Math.sqrt(
      Math.pow(lastPoint.top - point.top, 2) +
      Math.pow(lastPoint.left - point.left, 2)
    )
    this.components.push(length)
    this.length += length
  }

  location(distance) {
    let distanceLeft = distance % this.length
    for (let i = 0, len = this.components.length; i < len; ++i) {
      const component = this.components[i]
      if (distanceLeft <= component) {
        const point0 = this.points[i]
        const point1 = this.points[i + 1]

        const dh = distanceLeft * ((point1.left - point0.left) / component)
        const dv = distanceLeft * ((point1.top - point0.top) / component)

        return {
          top: point0.top + dv,
          left: point0.left + dh
        }
      } else {
        distanceLeft -= component
      }
    }
  }
}

export default Path
