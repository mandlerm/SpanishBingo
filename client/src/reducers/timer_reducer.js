export default (state = { timer: 0, start: true, pause: true }, action) => {
  console.log("timer reducer payload", action.payload)
  switch (action.type) {
    case "START":
      console.log("STARTING", action.payload)
      return { ...state, timer: action.payload, pause: false }
    case "STOP_TIMER":
      return { ...state, start: false, pause: true }
    case "RESET_TIMER":
      console.log("RESET")
      return { ...state, timer: 0, pause: true }
    default:
      return state
  }
}
