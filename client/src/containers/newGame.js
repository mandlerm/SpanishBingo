import React from "react"
import { connect } from "react-redux"
import "../CSS/newGame.css"
import Card from "./card"
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

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCategory, resetScore }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewGame)
