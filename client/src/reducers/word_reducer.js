export default (
  state = { currentSpanishWord: "", currentEnglishWord: "", words: [] },
  action
) => {
  switch (action.type) {
    case "PLAY_WORD":
      return { ...state, currentWord: action.payload }

    case "LOADING_WORDS":
      return { ...state, loading: true }
    case "FETCH_WORDS":
      return { ...state, words: action.payload, loading: false }
    case "SHOW_WORD":
      console.log("show word", action.payload.spanish)
      return {
        ...state,
        currentSpanishWord: action.payload.spanish,
        currentEnglishWord: action.payload.english
      }
    case "RESET_WORD":
      return {
        ...state,
        currentSpanishWord: "",
        currentEnglishWord: ""
      }

    default:
      return state
  }
}
