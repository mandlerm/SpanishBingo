import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/game/card"
import { currentGameBoard } from "../actions/actions"

class Board extends React.Component {
  // componentDidMount() {
  //   console.log("state", this.props.state)
  //   let numberofCards = this.props.state.level.cardNumber
  //   let timer = this.props.state.level.time
  //
  //   let shuffledGameArray = this.props.state.cards.cards.sort(function(a, b) {
  //     return 0.5 - Math.random()
  //   })
  //
  //   this.props.currentGameBoard(shuffledGameArray.slice(0, numberofCards))
  //   console.log(this.props.state.game.board)
  // }

  render() {
    console.log("board", this.props.state.cards.board)
    if (!this.props.state.cards.board) {
      return "loading"
    }
    return (
      <div className="board">
        {this.props.state.cards.board.map(card => Card(card))}
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
