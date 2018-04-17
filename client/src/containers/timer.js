import React from "react"
import { connect } from "react-redux"
// import "./timer.css"
import { bindActionCreators } from "redux"
import Countdown from "react-countdown-now"
// import { fetchLevels, setLevel } from "../actions/actions"
//toggle levels
const Completionist = () => <span>Need to figure this out</span>

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    )
  }
}

class Timer extends React.Component {
  renderTimer() {
    let timer = this.props.level * 1000

    return (
      <Countdown
        className="clock"
        date={Date.now() + timer}
        intervalDelay={500}
        precision={0}
        renderer={renderer}
      />
    )
  }

  render() {
    // console.log("state", this.props.state)
    return (
      <div className="timer">
        Timer: <br />
        {this.renderTimer()}
      </div>
    )
  }
}
//
function mapStateToProps(state) {
  return {
    level: state.level.time
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchLevels, setLevel }, dispatch)
// }
//
export default connect(mapStateToProps)(Timer)
