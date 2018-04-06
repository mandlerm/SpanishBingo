import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    fetch(`/api/games`)
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
      })

    let sample = "sample"
    console.log("cards")
    fetch(`/api/cards`, {
      category: "sample"
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
