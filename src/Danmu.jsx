import React, { PropTypes } from 'react'
import classname from 'classname'
import randomColor from 'randomcolor'

const READY = 'READY'
const PLAYING = 'PLAYING'
const OVER = 'OVER'

const DEFAULT_DURATION = 2800
const DEFAULT_FONT_SIZE = 24

const Message = React.createClass({
  propTypes: {
    content: PropTypes.string,
    screen: PropTypes.object,
    speed: PropTypes.number,
    y: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string
  },
  getDefaultProps() {
    return {
      speed: 1,
      y: 0,
      size: 1,
      color: '#fff'
    }
  },
  getInitialState() {
    return {
      status: READY
    }
  },
  componentDidMount() {
    const delay = 100
    setTimeout(() => {
      this.setState({
        status: PLAYING
      })
    }, delay)
    setTimeout(() => {
      this.setState({
        status: OVER
      })
    }, delay + this.getDuration())
  },
  getDuration () {
    const { speed } = this.props
    return DEFAULT_DURATION / speed
  },
  render() {
    const { content, screen, y, size, color } = this.props
    const { status } = this.state
    const fontSize = DEFAULT_FONT_SIZE * size

    const style = {
      transitionDuration: this.getDuration() + 'ms',
      top: ((screen.height - fontSize) * y / 100) + 'px',
      fontSize,
      color,
    }

    return (<div className={ classname('danmu-message', status.toLowerCase()) } style={ style }>{ content }</div>)
  }
})

const Danmu = React.createClass({
  propTypes: {
    width: PropTypes.number,
    height: PropTypes.number,
    messages: PropTypes.array
  },
  getDefaultProps() {
    return {
      width: 640,
      height: 480
    }
  },
  getInitialState() {
    return {
      messages: []
    }
  },
  say(message) {
    message = typeof message === 'string' ? { content: message } : message
    this.setState({
      messages: this.state.messages.concat(message)
    })
  },
  render() {
    const { width, height } = this.props
    const messages = this.props.messages.concat(this.state.messages)
    const screen = {
      width,
      height
    }

    return (<div className="danmu">
      <div className="danmu-screen" style={ screen }>
        {
          messages.map((message, index) => {
            return <Message key={ index } { ...{ screen } } { ...message } />
          })
        }
      </div>
    </div>)
  }
})

export default Danmu
