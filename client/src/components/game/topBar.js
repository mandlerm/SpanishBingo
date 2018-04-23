import React from "react"
import "./topBar.css"
import { Icon } from "react-fa"
import Word from "./wordDisplay"
import NewGame from "../../containers/newGame"
// import Timer from "../../containers/timer"
// import Score from "../../containers/score"

//component to disply current word with link for play audio

const TopBar = props => {
  return (
    <div className="bar">
      <Word />
      <NewGame />
    </div>
  )
}

export default TopBar
