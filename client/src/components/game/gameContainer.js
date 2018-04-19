import React from "react"
import WordDisplay from "./wordDisplay"
import Board from "../../containers/board"
import TopBar from "./topBar.js"
import "../../containers/board.css"
// container to display all aspects of game secion

class GameContainer extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Board className="board" />
      </div>
    )
  }
}

export default GameContainer
