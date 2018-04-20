export default (state = { currentWord={}, wordArray=[] }, action) => {
  switch (action.type) {
    case "PLAY_WORD":
      return { ...state, currentWord: action.payload }
    case "SET_WORD_ARRAY":
      return { ...state, wordArray: action.payload }

    default:
      return state
  }
}
