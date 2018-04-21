import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchAllWords } from "../actions/actions"

class WordList extends React.Component {
  componentDidMount() {
    this.props.fetchAllWords()
  }

  displayWords = () => {
    if (!this.props.state.words) {
      return "Loading"
    }
    return this.props.state.words.words.map(word => {
      return (
        <h2>
          {word.english} - {word.spanish}{" "}
        </h2>
      )
    })
  }

  render() {
    console.log("state", this.props.state)
    return <h1>{this.displayWords()}</h1>
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllWords }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList)
