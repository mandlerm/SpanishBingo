import React from "react"
import "./Level.css"
//toggle levels

let levels = ["easy", "medium", "hard"]

const Level = props => {
  return (
    <div class="level-btn-group">
      {levels.map(level => <button>{level}</button>)}
    </div>
  )
}

export default Level
