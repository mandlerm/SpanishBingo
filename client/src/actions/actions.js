export const SET_GAME_CATEGORY = "SET_GAME_CATEGORY"
export const SET_GAME_LEVEL = "SET_GAME_LEVEL"
export const SET_CATEGORY = "SET_CATEGORY"

export function setCategoryOptions(category) {
  return {
    type: "SET_CATEGORY",
    payload: category
  }
}
