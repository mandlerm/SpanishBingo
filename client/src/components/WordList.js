import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { currentGameBoard, playWord, setWordArray } from "../actions/actions"

class WordList extends React.Component {
  render() {
    return <h1>I will be a list of words for each category</h1>
  }
}

//
// function mapStateToProps(state) {
//   return {
//     state: state
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { currentGameBoard, playWord, setWordArray },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(WordList)
