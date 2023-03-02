// import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
