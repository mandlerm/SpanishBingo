import React from "react"
import { connect } from "react-redux"
import "./score.css"
// import "./timer.css"
import { bindActionCreators } from "redux"
import { addPoint, resetScore } from "../actions/actions"

class Score extends React.Component {
  render() {
    console.log("SCORE REDUCER", this.props)
    return (
      <div className="score">
        Score:
        <span className="number"> {this.props.score.score}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPoint, resetScore }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
