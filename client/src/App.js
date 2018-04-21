import React, { Component } from "react"
import {
  BrowserRouter,
  Route,
  Router,
  IndexRoute,
  Switch
} from "react-router-dom"
// import store from "./index.js"
import "./App.css"
import Welcome from "./components/welcome"
import PlayContainer from "./components/playContainer"
import WelcomeContainer from "./components/welcomeContainer"
import WordList from "./components/wordList"
import Header from "./components/header"

// import configureStore from "./store/configureStore"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = configureStore()

//start - fetch initial options - category, gameLevel
//store.dispatch(getCategories())
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={WelcomeContainer} />
              <Route exact path="/wordlist" component={WordList} />
              <Route path="/play" component={PlayContainer} />
              <Route component={Welcome} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
