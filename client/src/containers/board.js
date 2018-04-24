import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "./card"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"

import "../CSS/index.css"

class Board extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("props", nextProps.state.words.stillPlaying)

    if (nextProps.state.words.stillPlaying === true) {
      return false
    } else return true
  }
  //
  // handleClick = event => {
  //   let audio = new Audio(event.audio)
  //   console.log(event)
  //   audio.play()
  //   this.props.showWord(event)
  // }

  shuffle = board => {
    return board.sort(function(a, b) {
      return 0.5 - Math.random()
    })
  }

  renderBoard() {
    if (!this.props.state.cards.cards) {
      return "loading"
    }
    let shuffledGameArray = this.shuffle(this.props.state.cards.cards)

    //going to return 9 cards for easy game, 16 cards for standard game.
    let leveledBoard = shuffledGameArray.slice(
      0,
      this.props.state.level.cardNumber
    )

    return leveledBoard.map(card => <Card display={card} key={card.english} />)
  }

  render() {
    return <div className="board">{this.renderBoard()}</div>
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { currentGameBoard, playWord, setWordArray },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
