export default (
  state = {
    currentSpanishWord: "",
    currentEnglishWord: "",
    stillPlaying: false,
    words: []
  },
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
      return {
        ...state,
        currentSpanishWord: action.payload.spanish,
        currentEnglishWord: action.payload.english,
        stillPlaying: false
      }
    case "RESET_WORD":
      return {
        ...state,
        currentSpanishWord: "",
        currentEnglishWord: "",
        stillPlaying: false
      }

    default:
      return state
  }
}
