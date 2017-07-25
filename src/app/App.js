/*eslint no-undef: "off"*/
/*eslint react/react-in-jsx-scope: "off"*/

import Map from './Map'

import './App.css'

import config from '../config'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { tick: 0 }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        tick: prevState.tick + 1
      }))
    }, config.TICK)
  }

  render() {
    return (
      <div className="App">
        <Map tick={this.state.tick} />
      </div>
    )
  }
}

export default App
