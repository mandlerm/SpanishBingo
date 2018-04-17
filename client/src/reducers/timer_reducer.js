export default (state = { timer: 60 }, action) => {
  console.log("checking timer")
  switch (action.type) {
    case "COUNTDOWN":
      console.log("current time", state)
      return { ...state, timer: state.timer - 1 }

    default:
      return state
  }
}
