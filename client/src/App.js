import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
// import store from "./index.js"
import "./App.css"
import Welcome from "./components/welcome"
import PlayContainer from "./components/playContainer"
import WelcomeContainer from "./components/welcomeContainer"
import WordList from "./components/wordList"
import Header from "./components/header"
import ItemList from "./components/wordList"
// import configureStore from "./store/configureStore"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = configureStore()

//start - fetch initial options - category, gameLevel
//store.dispatch(getCategories())
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { categories: [], levels: [] }

    // fetch(`/api/games`)
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(categories) {
    //     console.log(categories)
    //     this.setState({ categories: categories })
    //     console.log(this.state)
    //   })
  }
  // componentDidMount() {
  //   let gameList
  //   let level
  //
  //   fetch(`/api/games`, { category: `event.target.value` }).then(response => {
  //     store.dispatch({
  //       type: "SET_CATEGORY_OPTIONS",
  //       users: response.json()
  //     })
  //   })

  //:id, :name
  // fetch(`/api/games`, { category: `event.target.value` })
  //   .then(function(response) {
  //     return response.json()
  //   })
  //   .then(function(myJson) {
  //     console.log(myJson)
  //     gameList = myJson
  //     console.log(gameList)
  //   })

  //:id, :level
  //   fetch(`/api/level`, { category: `event.target.value` })
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson)
  //       level = myJson
  //       console.log(level)
  //     })
  // }
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
// const mapStateToProps = (state) => {
//   return { items: state.items };
// };
//
// export default connect(mapStateToProps)(App);
