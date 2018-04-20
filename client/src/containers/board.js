import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/game/card"
import { currentGameBoard, playWord, setWordArray } from "../actions/actions"

//***** How do I update state with current board????***********//
class Board extends React.Component {
  getRandom() {
    return this.props.state.cards.cards.sort(function(a, b) {
      return 0.5 - Math.random()
    })
  }
  // componentDidMount() {
  //   this.getRandom().then(function(wordArray) {
  //     this.props.setWordArray(wordArray)
  //   })
  //   setTimeout(this.startGame, 5000)
  // }
  //
  // startGame() {
  //   console.log("game is starting")
  // }

  renderBoard() {
    if (!this.props.state.cards.cards) {
      return "loading"
    }
    let shuffledGameArray = this.getRandom()

    //going to return 9 cards for easy game, 16 cards for standard game.
    let leveledBoard = shuffledGameArray.slice(
      0,
      this.props.state.level.cardNumber
    )
    // this.props.currentGameBoard(leveledBoard)

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
