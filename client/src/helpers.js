export function shuffle(board) {
  console.log("shuffling")
  return board.sort(function(a, b) {
    return 0.5 - Math.random()
  })
}
