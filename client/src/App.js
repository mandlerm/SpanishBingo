import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./App.css"
import Welcome from "./components/welcome"
import PlayContainer from "./components/PlayContainer"
import WelcomeContainer from "./components/WelcomeContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Spanish Bingo </h1>
          <p className="App-intro">
            Built with React/Redux on top of a Rails backend
          </p>
        </header>

        <BrowserRouter>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={WelcomeContainer} />
              <Route path="/:game" component={PlayContainer} />
              <Route component={Welcome} />
            </Switch>
          </Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
