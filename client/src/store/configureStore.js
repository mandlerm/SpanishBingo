import { createStore, applyMiddleware, compose } from "redux"
import { browserHistory } from "react-router"
import reducer from "../reducers/index"
import thunk from "redux-thunk"

import rootReducer from "../reducers/index"

export default function configureStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}
