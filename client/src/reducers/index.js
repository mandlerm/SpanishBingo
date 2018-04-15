import { combineReducers } from "redux"
import setupReducer from "./setup_reducer"

//import each reducer (need one reducer for each piece of data/state)
//reducers hold all the state update logic
//1. game category  2. game level  3. game cards  4. active word  5. score  6. time

const rootReducer = combineReducers({
  setup: setupReducer
})

export default rootReducer
