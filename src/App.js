import React, { Component } from 'react'
import './css/App.css'
import { Navbar, Content } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    )
  }
}

export default App
