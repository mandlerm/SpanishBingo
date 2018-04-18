import { combineReducers } from "redux"
import categoryReducer from "./category_reducer"
import levelReducer from "./level_reducer"
import setCategoryReducer from "./set_category_reducer"
import setGameReducer from "./set_game_reducer"
import timerReducer from "./timer_reducer"
import scoreReducer from "./score_reducer"
//import each reducer (need one reducer for each piece of data/state)
//reducers hold all the state update logic
//1. game category  2. game level  3. game cards  4. active word  5. score  6. time

const rootReducer = combineReducers({
  category: categoryReducer,
  level: levelReducer,
  cards: setCategoryReducer,
  game: setGameReducer,
  timer: timerReducer,
  score: scoreReducer
})

export default rootReducer
