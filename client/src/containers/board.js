import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/game/card"
import { currentGameBoard } from "../actions/actions"

class Board extends React.Component {
  render() {
    console.log("board", this.props.state.cards.board)
    if (!this.props.state.cards.board) {
      return "loading"
    }
    //shuffles order of cards each time
    let shuffledGameArray = this.props.state.cards.board.sort(function(a, b) {
      return 0.5 - Math.random()
    })

    //going to return 9 cards for easy game, 16 cards for standard game.
    let leveledBoard = shuffledGameArray.slice(
      0,
      this.props.state.level.cardNumber
    )

    return (
      <div className="board">
        {leveledBoard.map(card => <Card display={card} />)}
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
  return bindActionCreators({ currentGameBoard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
