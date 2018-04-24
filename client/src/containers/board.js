import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "./card"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"
import shuffle from "../helpers"
import "../CSS/index.css"

class Board extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("props", nextProps.state.words)
    console.log("state", nextState)

    //only rerender IF NewGame is selected.  or if Category or Level are selected.
    //how to test for this?!?
    // if (
    //   this.props.state.words.currentEnglishWord &&
    //   this.props.state.words.currentEnglishWord != nextState.currentEnglishWord
    // ) {
    //   return false
    // } else return true
    return true
  }
  //
  // handleClick = event => {
  //   let audio = new Audio(event.audio)
  //   console.log(event)
  //   audio.play()
  //   this.props.showWord(event)
  // }

  shuffle = board => {
    console.log("shuffling")
    return board.sort(function(a, b) {
      return 0.5 - Math.random()
    })
  }

  startGame() {
    console.log("game is starting")
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
