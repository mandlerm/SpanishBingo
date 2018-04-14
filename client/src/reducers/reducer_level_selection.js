// export default function levelReducer(state = { level: "medium" }, action) {
//   switch (action.type) {
//     case SET_GAME_LEVEL:
//       return setGameLevel(state, action)
//     default:
//       return state
//   }
// }

export default function() {
  return [{ level: "easy" }, { level: "hard" }, { level: "super fast" }]
}
