import React from 'react'

const CarCluster = ({ cars }) => {
  if (cars.length === 0) {
    return null
  }

  if (cars.length === 1) {
    return cars[0]
  }

  const index = Math.floor(cars.length / 2)
  const leftChildren = cars.slice(0, index)
  const rightChildren = cars.slice(index)

  return (
    <div>
      <CarCluster cars={leftChildren} />
      <CarCluster cars={rightChildren} />
    </div>
  )
}

export default CarCluster
