import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/game/card"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"
import ReduxPromise from "redux-promise"

//***** How do I update state with current board????***********//
class Board extends React.Component {
  shuffle = board => {
    console.log("shuffling")
    return board.sort(function(a, b) {
      return 0.5 - Math.random()
    })
  }

  startGame() {
    console.log("game is starting")
  }

  setUpAudio(leveledBoard) {
    // let shuffle = this.shuffle
    console.log("audio setup", this.shuffle)
    let wordArray = this.shuffle(leveledBoard)
    console.log("shuffle", wordArray)
    // this.props.setWordArray(wordArray)
    return wordArray

    // let wordArray = new Promise() {
    //   shuffle())
    // })

    // wordArray.then(array => {
    //   console.log(array)
    // })
    //
    // console.log("arra", wordArray)
    // wordArray.then(array => {
    //   console.log("arrays", array)
    //   this.props.setWordArray(array)
    // })
    //   .then(() => {
    //     setTimeout(this.startGame, 5000)
    //   })

    //
    // }).then(function(wordArray) {
    //   console.log("shuffle2", wordArray)
    //   this.props.setWordArray(wordArray)
    //   console.log(this.props.state, "state")
    // })
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

    let wordArray = this.setUpAudio(leveledBoard)
    // this.props.setWordArray(wordArray)
    // console.log("state", this.props, this.props.state)
    console.log("render board", leveledBoard, wordArray)
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
