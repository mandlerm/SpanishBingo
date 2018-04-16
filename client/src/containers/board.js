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
    return (
      <div className="board">
        {this.props.state.cards.board.map(card => <Card display={card} />)}
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
