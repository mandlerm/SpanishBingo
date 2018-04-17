export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const LOADING_CATEGORIES = "LOADING_CATEGORIES"
export const FETCH_LEVELS = "FETCH_LEVELS"
export const LOADING_LEVELS = "LOADING_LEVELS"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_LEVEL = "SET_LEVEL"
export const SET_BOARD = "SET_BOARD"
export const COUNTDOWN = "COUNTDOWN"
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

export function setCategory(gameChoice) {
  console.log("cateogory name", gameChoice)
  return dispatch => {
    return fetch(`/api/cards?q=sample`)
      .then(response => response.json())
      .then(cards => {
        dispatch({ type: SET_CATEGORY, payload: cards })
      })
  }
}

export function setLevel(levelChoice) {
  console.log("level choice", levelChoice)
  let setup = {}
  switch (levelChoice) {
    case "Easy":
      setup = { cardCount: 9, time: 60 }
      break
    case "Not quite as easy":
      setup = { cardCount: 16, time: 60 }
      break
    case "Fast":
      setup = { cardCount: 16, time: 30 }
      break
  }
  return { type: SET_LEVEL, payload: setup }
}

export function currentGameBoard(board) {
  console.log("board ", board)
  return { type: SET_BOARD, payload: board }
}

export function timerCountdown(timer) {
  console.log("calling timer")
  return { type: COUNTDOWN, timer }
}
