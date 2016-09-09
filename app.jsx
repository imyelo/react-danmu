import React from 'react'
import keycode from 'yields-keycode'
import randomColor from 'randomcolor'
import Danmu from './danmu'
import './app.less'

const App = React.createClass({
  componentDidMount() {
    window.danmu = this.refs.danmu
  },
  getInitialState() {
    return {
      current: '',
      messages: []
    }
  },
  handleKeyPress(e) {
    if (e.which === keycode('enter')) {
      e.preventDefault()
      this.setState({
        current: '',
        messages: this.state.messages.concat({
          content: e.target.value,
          y: Math.random() * 100,
          color: randomColor({ luminosity: 'light' })
        })
      })
    }
  },
  handleChange(e) {
    this.setState({
      current: e.target.value
    })
  },
  render() {
    const { current, messages } = this.state
    return (<div className="view-playground-danmu">
      <Danmu width={640} height={480} messages={ messages } />
      <input
        className="input"
        type="text"
        value={ current }
        placeholder="say something"
        onKeyPress={ this.handleKeyPress }
        onChange={ this.handleChange }
        autoFocus
        />
    </div>)
  }
})

export default App
