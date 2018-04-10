import { SET_GAME_CATEGORY } from "./actions"

export function setGameCategory(gameCategory) {
  return { type: SET_GAME_CATEGORY, payload: gameCategory }
}
