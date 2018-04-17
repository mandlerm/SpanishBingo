import React from "react"
import { connect } from "react-redux"
// import "./timer.css"
import { bindActionCreators } from "redux"
// import Countdown from "react-countdown-now"
import { timerCountdown } from "../actions/actions"
import "./timer.css"
import ReactInterval from "react-interval"
// import { fetchLevels, setLevel } from "../actions/actions"
//toggle levels
//https://www.npmjs.com/package/react-interval
class Timer extends React.Component {
  render() {
    let enabled = true
    if (this.props.level === 0) {
      enabled = false
      console.log("timer done")
      return <h1>GAME OVER</h1>
    }
    return (
      <div className="timer">
        Timer: <br />
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => this.props.timerCountdown()}
        />
        {this.props.level}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state in timer", state)
  return {
    level: state.timer.timer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ timerCountdown }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
