export default function(state = { loading: false, board: [] }, action) {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload, loading: false }
    default:
      return state
  }
}
