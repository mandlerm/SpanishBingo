import React from "react"
import "./Level.css"
//toggle levels

let levels = ["easy", "medium", "hard"]

class Level extends React.Component {
  constructor(props) {
    super(props)
    this.handleLevelChange = this.handleLevelChange.bind(this)
  }

  handleLevelChange(event) {
    //if easy is selected, only display 9 cards
    console.log("Im selecting a level")
  }
  render() {
    return (
      <div className="level">
        <h1 className="heading">Select a level</h1>
        {levels.map(level => (
          <button onClick={this.handleLevelChange}>{level}</button>
        ))}
      </div>
    )
  }
}

export default Level
