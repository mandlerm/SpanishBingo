import { combineReducers } from "redux"
import GameSettingsReducer from "./reducer_game_category"
import LevelReducer from "./reducer_level_selection"
//import each reducer (need one reducer for each piece of data/state)
//reducers hold all the state update logic
//1. game category  2. game level  3. game cards  4. active word  5. score  6. time

const rootReducer = combineReducers({
  games: GameSettingsReducer,
  levels: LevelReducer
  // level: levelReducer
})

export default rootReducer
