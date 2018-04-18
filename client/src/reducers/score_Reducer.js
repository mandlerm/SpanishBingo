export default (state = { score: 0 }, action) => {
  switch (action.type) {
    case "ADD_POINT":
      return { ...state, score: state.score }
    case "RESET_SCORE":
      return { ...state, score: 0 }

    default:
      return state
  }
}
