import React from "react"
import WordDisplay from "./wordDisplay"
import Board from "./board"
import "./board.css"
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
