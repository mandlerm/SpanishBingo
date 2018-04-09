import React from "react"
import GameContainer from "./game/GameContainer"
import Sidebar from "./sidebar/Sidebar"
import "./screen.css"

class ScreenContainer extends React.Component {
  render() {
    return (
      <div className="screencontainer">
        <Sidebar />
        <GameContainer />
      </div>
    )
  }
}

export default ScreenContainer
