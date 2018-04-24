import React from "react"
import { connect } from "react-redux"
import "../CSS/index.css"

import { bindActionCreators } from "redux"
import { setCategory, resetWord } from "../actions/actions"
//toggle levels

class NewGame extends React.Component {
  resetGame = () => {
    console.log("reset")
    this.props.setCategory()
    this.props.resetWord()
  }

  render() {
    return (
      <button className="newGame" onClick={this.resetGame}>
        NEW GAME
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCategory, resetWord }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewGame)
