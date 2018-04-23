import React from "react"
import Sidebar from "./sidebar/sidebar"
import GameContainer from "./game/gameContainer"
import "../CSS/index.css"

class PlayContainer extends React.Component {
  render() {
    return (
      <div className="playcontainer">
        <Sidebar />
        <GameContainer />
      </div>
    )
  }
}

export default PlayContainer
