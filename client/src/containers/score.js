import React from "react"
import { connect } from "react-redux"
// import "./timer.css"
import { bindActionCreators } from "redux"
// import { fetchLevels, setLevel } from "../actions/actions"
//toggle levels

export default class Score extends React.Component {
  render() {
    return <div className="score">I am the score</div>
  }
}
//
// function mapStateToProps(state) {
//   return {
//     level: state.level.levels
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchLevels, setLevel }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Level)
