export default (state = { currentWord: "", wordArray: [] }, action) => {
  switch (action.type) {
    case "PLAY_WORD":
      return { ...state, currentWord: action.payload }
    case "LOADING_WORD_ARRAY":
      return { ...state, loading: true }
    case "SET_WORD_ARRAY":
      console.log("setting word array")
      return { ...state, wordArray: action.payload }

    default:
      return state
  }
}
case "LOADING_CATEGORIES":
  return { ...state, loading: true }
case "FETCH_CATEGORIES":
  return { ...state, categories: action.payload, loading: false }
