export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const LOADING_CATEGORIES = "LOADING_CATEGORIES"
export const FETCH_LEVELS = "FETCH_LEVELS"
export const LOADING_LEVELS = "LOADING_LEVELS"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_LEVEL = "SET_LEVEL"
export const DISPLAY_GAME = "DISPLAY_GAME"
export const CLICK_CARD = "CLICK_CARD"

export function fetchCategories() {
  return dispatch => {
    dispatch({ type: LOADING_CATEGORIES })
    return fetch(`/api/games`)
      .then(response => response.json())
      .then(categories => {
        dispatch({ type: FETCH_CATEGORIES, payload: categories })
      })
  }
}

export function fetchLevels() {
  return dispatch => {
    dispatch({ type: LOADING_LEVELS })
    return fetch(`/api/level`)
      .then(response => response.json())
      .then(levels => {
        dispatch({ type: FETCH_LEVELS, payload: levels })
      })
  }
}
