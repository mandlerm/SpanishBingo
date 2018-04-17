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

class Timer extends React.Component {
  render() {
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
// const Completionist = () => <span>Need to figure this out</span>
//
//
// //do i need to call an action when timer is up??!!???
// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//
//     return <Completionist />
//   } else {
//     // Render a countdown
//     return (
//       <span>
//         {hours}:{minutes}:{seconds}
//       </span>
//     )
//   }
// }
//
// class Timer extends React.Component {
//   renderTimer() {
//     let timer = this.props.level * 1000
//
//     return (
//       <Countdown
//         className="clock"
//         date={Date.now() + 5000}
//         intervalDelay={500}
//         precision={0}
//         renderer={renderer}
//       />
//     )
//   }
//
//   render() {
//     // console.log("state", this.props.state)
//     return (
//       <div className="timer">
//         Timer: <br />
//         {this.renderTimer()}
//       </div>
//     )
//   }
// }
//
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
