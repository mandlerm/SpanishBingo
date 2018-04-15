import React from "react"
import { connect } from "react-redux"
import "./level.css"
import { bindActionCreators } from "redux"
import { fetchLevels } from "../actions/actions"
//toggle levels

class Level extends React.Component {
  componentDidMount() {
    this.props.fetchLevels()
  }

  renderLevels() {
    if (!this.props.level) {
      return "Loading"
    }
    return this.props.level.map(level => {
      return (
        <button
          onClick={this.handleLevelChange}
          className="lined thin catButton"
          key={level.level}
          value={level.level}>
          {level.level}
        </button>
      )
    })
  }

  render() {
    return (
      <div className="level">
        <h1 className="heading">Select a level</h1>
        {this.renderLevels()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    level: state.level.levels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLevels: fetchLevels }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Level)
