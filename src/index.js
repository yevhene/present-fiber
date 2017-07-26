/*eslint no-undef: "off"*/
/*eslint react/react-in-jsx-scope: "off"*/

import './index.css'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOMFiber.render(<App />, document.getElementById('root'))
registerServiceWorker()
