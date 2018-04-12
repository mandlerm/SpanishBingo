import { SET_GAME_CATEGORY } from "./actions"
import { SET_GAME_LEVEL } from "./actions"

export function setGameCategory(gameCategory) {
  const action = { type: SET_GAME_CATEGORY, payload: gameCategory }
  console.log("action in SET_GAME_CATEGORY", action)
  return action
}

export function setGameLevel(gameLevel) {
  const action = { type: SET_GAME_LEVEL, payload: gameLevel }
  console.log("action in SET_GAME_LEVEL", action)
  return action
}
