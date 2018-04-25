export function shuffle(board) {
  return board.sort(function(a, b) {
    return 0.5 - Math.random()
  })
}
