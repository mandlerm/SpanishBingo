import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import reducer from "./reducers/reducer"
import "./App.css"
import Welcome from "./components/welcome"
import PlayContainer from "./components/PlayContainer"
import WelcomeContainer from "./components/WelcomeContainer"
import WordList from "./components/WordList"
import Header from "./components/header"
import ItemList from "./components/WordList"
// import configureStore from "./store/configureStore"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = configureStore()

//start - fetch initial options - category, gameLevel
//store.dispatch(getCategories())
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
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={WelcomeContainer} />
              <Route exact path="/wordlist" component={WordList} />
              <Route path="/:game" component={PlayContainer} />
              <Route component={Welcome} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
