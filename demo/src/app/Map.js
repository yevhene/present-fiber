import React from 'react'

import './Map.css'

import Car from './Car'

import { nmap } from './lib/utils'
import config from '../config'

const Map = ({ tick }) => (
  <div className="Map" style={config.BOUNDS}>
    {nmap(config.CARS, (_, i) => (
      <Car bounds={config.BOUNDS} key={i} tick={tick} />
    ))}
  </div>
)

export default Map
