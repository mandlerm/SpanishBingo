export default (
  state = { loading: false, levels: [], cardNumber: 16 },
  action
) => {
  switch (action.type) {
    case "LOADING_LEVELS":
      return { ...state, loading: true }
    case "FETCH_LEVELS":
      return { ...state, levels: action.payload, loading: false }
    case "SET_LEVEL":
      return { ...state, cardNumber: 9, loading: false }
    default:
      return state
  }
}
