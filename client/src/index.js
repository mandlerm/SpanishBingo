import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { browserHistory } from "react-router"
import thunk from "redux-thunk"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"
import ReduxPromise from "redux-promise"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import "./index.css"

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
