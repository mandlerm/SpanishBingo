import React from "react"
import { connect } from "react-redux"
// import "./timer.css"
import { bindActionCreators } from "redux"
// import Countdown from "react-countdown-now"
import { timerCountdown, stopTimer } from "../actions/actions"
import "./timer.css"
import ReactInterval from "react-interval"
// import { fetchLevels, setLevel } from "../actions/actions"
//toggle levels
//https://www.npmjs.com/package/react-interval
const KeepCounting = props => {
  console.log("props", props.props.level)
  if (props.props.level === 0) {
    let enabled = false
    props.props.stopTimer()
    return <h1>GAME OVER</h1>
  } else {
    return (
      <ReactInterval
        timeout={1000}
        enabled={props.props.start}
        callback={() => props.props.timerCountdown()}
      />
    )
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        Timer: <br />
        <KeepCounting props={this.props} />
        {this.props.level}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state in timer", state)
  return {
    level: state.timer.timer,
    start: state.timer.start
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ timerCountdown, stopTimer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
