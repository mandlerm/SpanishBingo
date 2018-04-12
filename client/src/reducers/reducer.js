import { SET_GAME_CATEGORY } from "../actions/actions"

const DEFAULT_STATE = {
  category: "sample"
}

const setGameCategory = (state, action) => {
  return Object.assign({}, state, { gameCategory: action.payload })
}

// dispatch function
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_GAME_CATEGORY:
      return setGameCategory(state, action)
    default:
      return state
  }
}

export default rootReducer
