import { SET_GAME_CATEGORY } from "./actions"
import { SET_GAME_LEVEL } from "./actions"
import { SET_CATEGORY_OPTIONS } from "./actions"

export function setCategoryOptions(cat) {
  return {
    type: SET_CATEGORY_OPTIONS,
    payload: cat
  }
}
export function setGameCategory(gameCategory) {
  return {
    type: SET_GAME_CATEGORY,
    payload: gameCategory
  }
}

export function setGameLevel(gameLevel) {
  return {
    type: SET_GAME_LEVEL,
    payload: gameLevel
  }
}
