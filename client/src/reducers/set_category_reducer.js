export default function(
  state = { loading: false, cards: [], cardNumber: 16 },
  action
) {
  switch (action.type) {
    case "SET_CATEGORY":
      console.log("inside set cat: ", action.payload)
      return {
        ...state,
        cards: action.payload,
        // level: action.payload,
        // board: action.payload,
        loading: false
      }
    default:
      return state
  }
}
