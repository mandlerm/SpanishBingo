import React from "react"
import Sidebar from "./sidebar/Sidebar"
import GameContainer from "./game/GameContainer"
import "./play.css"

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
