export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const LIST_GAME_LEVELS = "LIST_GAME_LEVELS"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_LEVEL = "SET_LEVEL"
export const DISPLAY_GAME = "DISPLAY_GAME"
export const CLICK_CARD = "CLICK_CARD"

export function fetchCategories() {
  return dispatch => {
    dispatch({ type: "LOADING_CATEGORIES" })
    return fetch(`/api/games`)
      .then(response => response.json())
      .then(categories => {
        console.log(categories)
        dispatch({ type: "FETCH_CATEGORIES", payload: categories })
      })
  }
}

export function loadingCategories() {
  {
    type: "LOADING_CATEGORIES"
  }
}
