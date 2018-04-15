export default function(state = { loading: false, cards: [] }, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, cards: action.payload, loading: false }
    default:
      return state
  }
}
