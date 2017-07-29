import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMFiber from 'react-dom'
import './index.css'
import Map from './app/Map'
import registerServiceWorker from './registerServiceWorker'

const start = new Date().getTime()
function update() {
  ReactDOM.render(
    <Map time={new Date().getTime() - start} />,
    document.getElementById('root')
  )
  requestAnimationFrame(update)
}
requestAnimationFrame(update)

registerServiceWorker()
