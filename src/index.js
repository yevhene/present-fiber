import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMFiber from 'react-dom'
import './index.css'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOMFiber.render(<App />, document.getElementById('root'))
registerServiceWorker()
