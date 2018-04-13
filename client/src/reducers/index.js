import { combineReducers } from "redux"
import gameSettingsReducer from "./game_setting_reducer"
import levelReducer from "./level_selection"

const rootReducer = combineReducers({
  game: gameSettingsReducer
})

export default rootReducer
