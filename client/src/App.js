import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./App.css"
import Welcome from "./components/welcome"
import PlayContainer from "./components/PlayContainer"
import WelcomeContainer from "./components/WelcomeContainer"
import WordList from "./components/WordList"
import Header from "./components/header"

class App extends Component {
  componentDidMount() {
    let gameList
    let level

    //:id, :name
    fetch(`/api/games`, { category: `event.target.value` })
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
        gameList = myJson
        console.log(gameList)
      })

    //:id, :level
    fetch(`/api/level`, { category: `event.target.value` })
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
        level = myJson
        console.log(level)
      })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={WelcomeContainer} />
                <Route exact path="/wordlist" component={WordList} />
                <Route path="/:game" component={PlayContainer} />
                <Route component={Welcome} />
              </Switch>
            </div>
          </Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
