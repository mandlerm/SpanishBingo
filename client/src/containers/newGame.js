import React from "react"
import { connect } from "react-redux"
import "../CSS/index.css"

import { bindActionCreators } from "redux"
import { setCategory, resetScore } from "../actions/actions"
//toggle levels

class NewGame extends React.Component {
  render() {
    return (
      <button className="newGame" onClick={this.props.setCategory}>
        NEW GAME
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCategory, resetScore }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewGame)
