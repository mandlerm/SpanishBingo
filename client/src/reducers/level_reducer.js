export default (
  state = { loading: false, levels: [], cardNumber: 16, time: 60 },
  action
) => {
  switch (action.type) {
    case "LOADING_LEVELS":
      return { ...state, loading: true }
    case "FETCH_LEVELS":
      return { ...state, levels: action.payload, loading: false }
    case "SET_LEVEL":
      return {
        ...state,
        cardNumber: action.payload.cardCount,
        time: action.payload.time,
        loading: false
      }
    default:
      return state
  }
}
