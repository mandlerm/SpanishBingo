import React from "react"
import WordDisplay from "./WordDisplay"
import Board from "./Board"
import "./Board.css"
// container to display all aspects of game secion

class GameContainer extends React.Component {
  render() {
    return (
      <div>
        <WordDisplay />
        <Board className="board" />
      </div>
    )
  }
}

export default GameContainer