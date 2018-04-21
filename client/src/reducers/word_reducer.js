export default (state = { currentWord: "", wordArray: [] }, action) => {
  switch (action.type) {
    case "PLAY_WORD":
      return { ...state, currentWord: action.payload }
    case "LOADING_WORD_ARRAY":
      return { ...state, loading: true }
    case "SET_WORD_ARRAY":
      console.log("setting word array", action.payload)
      return { ...state, wordArray: action.payload }
    case "LOADING_WORDS":
      return { ...state, loading: true }
    case "FETCH_WORDS  ":
      return { ...state, categories: action.payload, loading: false }

    default:
      return state
  }
}
