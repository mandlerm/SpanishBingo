export default (state = { timer: 60, start: true }, action) => {
  console.log("checking timer")
  switch (action.type) {
    case "COUNTDOWN":
      console.log("current time", state)
      return { ...state, timer: state.timer - 1 }
    case "STOP_TIMER":
      return { ...state, start: false }
    default:
      return state
  }
}
