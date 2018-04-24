import React from "react"
import "../../CSS/index.css"
import Word from "./wordDisplay"
import NewGame from "../../containers/newGame"

// import Timer from "../../containers/timer"
// import Score from "../../containers/score"

//component to disply current word with link for play audio

const TopBar = props => {
  return (
    <div className="bar">
      <Word />
      <NewGame id="newGameButton" />
    </div>
  )
}

export default TopBar
