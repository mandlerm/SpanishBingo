import React from "react"
import "./Level.css"
//toggle levels

let levels = ["easy", "medium", "hard"]

const Level = props => {
  return (
    <div className="level">
      <h1 className="heading">Select a level</h1>
      {levels.map(level => <button>{level}</button>)}
    </div>
  )
}

export default Level
