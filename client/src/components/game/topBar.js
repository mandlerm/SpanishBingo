import React from "react"
import "./topBar.css"
import { Icon } from "react-fa"
import Word from "./wordDisplay"
import Timer from "../../containers/timer"
import Score from "../../containers/score"

//component to disply current word with link for play audio

const TopBar = props => {
  return (
    <div className="bar">
      <Word />
      <Timer />
      <Score />
    </div>
  )
}

export default TopBar
