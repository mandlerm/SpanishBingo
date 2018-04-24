export default function(
  state = {
    loading: false,
    cards: [],
    cardNumber: 16
  },
  action
) {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        cards: action.payload.cards,

        loading: false
      }
    default:
      return state
  }
}
