export default function(state = null, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload
  }
  return state
}
