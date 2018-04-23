export default function(
  state = {
    loading: false,
    cards: [],
    cardNumber: 16,

    currentSpanishWord: "",
    currentEnglishWord: ""
  },
  action
) {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        cards: action.payload.cards,
        currentSpanishWord: "",
        currentEnglishWord: "",
        loading: false
      }
    default:
      return state
  }
}
