export const FETCH_CATEGORIES = "FETCH_CATEGORIES"
export const LOADING_CATEGORIES = "LOADING_CATEGORIES"
export const FETCH_LEVELS = "FETCH_LEVELS"
export const LOADING_LEVELS = "LOADING_LEVELS"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_LEVEL = "SET_LEVEL"
export const SET_BOARD = "SET_BOARD"
export const COUNTDOWN = "COUNTDOWN"
export const STOP_TIMER = "STOP_TIMER"
export const DISPLAY_GAME = "DISPLAY_GAME"
export const CLICK_CARD = "CLICK_CARD"
export const START = "START"
export const RESET = "RESET"
export const RESET_TIMER = "RESET_TIMER"
export const ADD_POINT = "ADD_POINT"
export const RESET_SCORE = "RESET_SCORE"
export const PLAY_WORD = "PLAY_WORD"
export const SET_WORD_ARRAY = "SET_WORD_ARRAY"
export const LOADING_WORD_ARRAY = "LOADING_WORD_ARRAY"

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
  return dispatch => {
    return fetch(`/api/cards?q=sample`)
      .then(response => response.json())
      .then(cards => {
        dispatch({ type: SET_CATEGORY, payload: { cards } })
      })
  }
}

export function setLevel(levelChoice) {
  let setup = {}
  switch (levelChoice) {
    case "Easy":
      setup = { cardCount: 9 }
      break
    case "Not quite as easy":
      setup = { cardCount: 16 }
      break
    default:
      setup = { cardCount: 16 }
      break
  }
  return { type: SET_LEVEL, payload: setup }
}

export function currentGameBoard(board) {
  return { type: SET_BOARD, payload: board }
}

export function startTimer(timer) {
  return { type: START, payload: timer }
}

export function timerCountdown(timer) {
  return { type: COUNTDOWN, timer }
}

export function stopTimer(start) {
  return { type: STOP_TIMER, start }
}

export function resetTimer() {
  return { type: RESET_TIMER }
}

export function addPoint() {
  return { type: ADD_POINT }
}

export function resetScore() {
  return { type: RESET_SCORE }
}

export function playWord() {
  return { type: PLAY_WORD }
}

export function setWordArray(words) {
  return { type: SET_WORD_ARRAY, payload: words }

  // dispatch => {
  //   dispatch({ type: LOADING_WORD_ARRAY })
  //   return fetch(`/api/level`)
  //     .then(response => response.json())
  //     .then(levels => {
  //       dispatch({ type: SET_WORD_ARRAY, payload: words })
  //     })
  // }
}
