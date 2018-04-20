import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/game/card"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"

//***** How do I update state with current board????***********//
class Board extends React.Component {
  shuffle = () => {
    console.log("shuffling")
    return this.props.state.cards.cards.sort(function(a, b) {
      return 0.5 - Math.random()
    })
  }

  startGame() {
    console.log("game is starting")
  }

  setUpAudio() {
    let shuffle = this.shuffle
    let wordArray = shuffle()
    // let wordArray = new Promise() {
    //   shuffle())
    // })

    wordArray.then(array => {
      console.log(array)
    })
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
    let shuffledGameArray = this.shuffle()

    //going to return 9 cards for easy game, 16 cards for standard game.
    let leveledBoard = shuffledGameArray.slice(
      0,
      this.props.state.level.cardNumber
    )

    this.setUpAudio()

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
