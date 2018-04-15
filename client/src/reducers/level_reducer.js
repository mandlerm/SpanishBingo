export default (state = { loading: false, levels: [] }, action) => {
  switch (action.type) {
    case "LOADING_LEVELS":
      return { ...state, loading: true }
    case "FETCH_LEVELS":
      console.log("payload", action.payload)
      return { ...state, levels: action.payload, loading: false }

    default:
      return state
  }
}
