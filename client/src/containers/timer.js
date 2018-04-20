import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { timerCountdown, stopTimer, resetTimer } from "../actions/actions"
import "./timer.css"
import ReactCountdownClock from "react-countdown-clock"
//https://github.com/pughpugh/react-countdown-clock

// need to delay time until game board is loaded
class Timer extends React.Component {
  componentWillUnmount() {}

  gameOver = () => {
    alert("Game Over")
  }
  render() {
    return (
      <div className="timer">
        Timer: <br />
        <ReactCountdownClock
          className="clock"
          seconds={this.props.timer}
          color="#000"
          alpha={0.9}
          size={100}
          paused={this.props.pause}
          onComplete={() => this.gameOver()}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    time: state.timer.timer,
    start: state.timer.start,
    pause: state.timer.pause
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ timerCountdown, stopTimer, resetTimer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
