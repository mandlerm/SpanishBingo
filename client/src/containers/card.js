import React from "react"
import "../CSS/index.css"
import { shape, string } from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { showWord } from "../actions/actions"
//individual cards

class Card extends React.Component {
  handleClick = event => {
    let audio = new Audio(event.audio)
    audio.play()
    console.log("dispolay", event)
    this.props.showWord(event)
  }

  render() {
    return (
      <figure className="card" key={this.props.display.id}>
        <img
          src={this.props.display.image}
          alt={this.props.display.english}
          width="100%"
          height="100%"
          onClick={e => {
            this.handleClick(this.props.display)
          }}
        />
      </figure>
    )
  }
}

Card.propTypes = {
  card: shape({
    english: string,
    spanish: string,
    audio: string,
    image: string,
    category: string
  })
}

function mapStateToProps(state) {
  return {
    spanish: state.words.currentSpanishWord,
    english: state.words.currentEnglishWord
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showWord }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
