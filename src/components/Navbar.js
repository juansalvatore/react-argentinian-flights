import React, { Component } from 'react'
import '../css/main.min.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img
          className="logo"
          src={require('../assets/logo2.png')}
          alt="ministerio-modernizacion"
        />
      </div>
    )
  }
}

export { Navbar }
