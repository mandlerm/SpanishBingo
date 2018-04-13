import { combineReducers } from "redux"
import gameSettingsReducer from "./game_setting_reducer"
import levelReducer from "./level_selection"
//import each reducer (need one reducer for each piece of data/state)
//1. game category  2. game level  3. game cards  4. active word  5. score  6. time

const rootReducer = combineReducers({
  game: gameSettingsReducer
  level: levelReducer
})

export default rootReducer
