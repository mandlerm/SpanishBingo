import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchAllWords } from "../actions/actions"

class WordList extends React.Component {
  componentDidMount() {
    this.props.fetchAllWords()
    console.log("words")
  }

  displayWords = () => {
    if (!this.props.state.words) {
      return "Loading"
    }
    console.log(this.props.state)
    return this.props.state.words.words.map(word => {
      return (
        <h2 key={word.english}>
          {word.english} - {word.spanish}{" "}
        </h2>
      )
    })
  }

  render() {
    console.log("state", this.props.state)
    return (
      <div>
        {" "}
        <h1>
          English - Spanish <br />Word List
        </h1>
        {this.displayWords()}
      </div>
    )
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
