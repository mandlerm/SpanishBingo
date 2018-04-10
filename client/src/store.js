import { createStore, compose } from "redux"
import { browserHistory } from "react-router"
import reducer from "./reducers/reducers"

const store = createStore(reducer)

export default store
