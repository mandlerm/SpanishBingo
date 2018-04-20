export default (state = { timer: 0, start: true, pause: true }, action) => {
  switch (action.type) {
    case "START":
      return { ...state, timer: action.payload, pause: false }
    case "STOP_TIMER":
      return { ...state, start: false, pause: true }
    case "RESET_TIMER":
      return { ...state, timer: 0, pause: true }
    default:
      return state
  }
}
