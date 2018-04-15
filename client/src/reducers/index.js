import { combineReducers } from "redux"
import categoryReducer from "./category_reducer"
import levelReducer from "./level_reducer"

//import each reducer (need one reducer for each piece of data/state)
//reducers hold all the state update logic
//1. game category  2. game level  3. game cards  4. active word  5. score  6. time

const rootReducer = combineReducers({
  category: categoryReducer,
  level: levelReducer
})

export default rootReducer
