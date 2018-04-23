export default (
  state = { currentSpanishWord: "", currentEnglishWord: "" },
  action
) => {
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
    case "FETCH_WORDS":
      return { ...state, words: action.payload, loading: false }
    case "SHOW_WORD":
      return {
        ...state,
        currentSpanishWord: action.payload.spanish,
        currentEnglishWord: action.payload.english
      }

    default:
      return state
  }
}
