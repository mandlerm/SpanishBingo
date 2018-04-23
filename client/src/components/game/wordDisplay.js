import React from "react"
import "../../CSS/index.css"
import { connect } from "react-redux"

//component to disply current word with link for play audio

class Word extends React.Component {
  // props.word

  //make a border around the box with some shading/style
  render() {
    return (
      <div className="word_div">
        <form className="word_box">
          <input className="word" value={this.props.spanish} />
          <input className="word" value={this.props.english} />
        </form>
        <br />
        <div id="caption">
          <span>Spanish </span>
          <span> English</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    spanish: state.words.currentSpanishWord,
    english: state.words.currentEnglishWord
  }
}
export default connect(mapStateToProps, null)(Word)
