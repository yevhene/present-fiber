import React from 'react'

import Car from './Car'
import CarCluster from './CarCluster'

import { nmap } from './lib/utils'

import './Map.css'

import config from '../config'

const Map = ({ time }) => (
  <div className="Map" style={config.BOUNDS}>
    <CarCluster
      cars={nmap(config.CARS, (_, i) => (
        <Car bounds={config.BOUNDS} key={i} time={time}>
          {Math.floor(time % 1000) % 10}
        </Car>
      ))}
    />
  </div>
)

export default Map
