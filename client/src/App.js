import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import GameContainer from "./components/game/GameContainer"
import Sidebar from "./components/sidebar/Sidebar"
import Welcome from "./components/welcome"
import ScreenContainer from "./components/Screen"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Spanish Bingo </h1>
        </header>
        <p className="App-intro">
          Built with React/Redux on top of a Rails backend
        </p>
        <ScreenContainer />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/:game" component={GameContainer} />
            <Route component={Welcome} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
