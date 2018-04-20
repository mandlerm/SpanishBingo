export default function(
  state = { loading: false, cards: [], score: 0, cardNumber: 16 },
  action
) {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        score: 0,
        cards: action.payload.cards,
        loading: false
      }
    default:
      return state
  }
}
