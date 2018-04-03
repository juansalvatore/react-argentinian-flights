import React, { Component } from 'react'
import '../css/main.min.css'

class Content extends Component {
  constructor() {
    super()
    this.state = {
      scroll: 0,
      scrollMin: 0,
      scrollMax: -300,
    }
  }

  scrollDown = () => {
    let scroll = this.state.scroll - 100
    console.log(this.state.stopScrolling)
    if (this.state.scrollMax !== this.state.scroll) {
      this.setState({
        scroll,
      })
    }
  }

  scrollUp = () => {
    let scroll = this.state.scroll + 100
    console.log(this.state.scrollMin, this.state.scroll)
    if (this.state.scrollMin !== this.state.scroll) {
      this.setState({
        scroll,
      })
    }
  }

  componentDidMount() {
    console.log(this.nativeMap)
  }

  render() {
    return (
      <div className="content-container">
        <div className="scroll" style={{ top: this.state.scroll + 'vh' }}>
          <div className="content">
            <p style={{ width: 700, textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div id="map" style={{ height: '100vh' }}>
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              src="https://datosgobar.carto.com/u/modernizacion/builder/52ce2639-ee1c-413b-92b8-afbada02414f/embed"
            />
          </div>
          <div className="content">
            <p style={{ width: 700, textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div id="map" style={{ height: '100vh' }}>
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              src="https://datosgobar.carto.com/u/modernizacion/builder/52ce2639-ee1c-413b-92b8-afbada02414f/embed"
            />
          </div>
        </div>
        <div className="buttons-container">
          <button
            onClick={this.scrollUp}
            className="button"
            style={{
              opacity: this.state.scrollMin !== this.state.scroll ? 1 : 0,
            }}
          >
            <img
              style={{ height: 20, transform: 'rotate(180deg)' }}
              src={require('../assets/down.svg')}
              alt="scroll up"
            />
          </button>
          <button
            onClick={this.scrollDown}
            className="button"
            style={{
              marginLeft: 10,
              opacity: this.state.scrollMax !== this.state.scroll ? 1 : 0,
            }}
          >
            <img
              style={{ height: 20 }}
              src={require('../assets/down.svg')}
              alt="scroll down"
            />
          </button>
        </div>
      </div>
    )
  }
}

export { Content }
