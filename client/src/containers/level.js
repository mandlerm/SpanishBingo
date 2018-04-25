import React from "react"
import { connect } from "react-redux"
import "../CSS/index.css"
import { bindActionCreators } from "redux"
import { fetchLevels, setLevel, resetWord } from "../actions/actions"
//toggle levels

class Level extends React.Component {
  componentDidMount() {
    this.props.fetchLevels()
  }

  changeLevel = level => {
    this.props.setLevel(level)
    this.props.resetWord()
  }

  renderLevels = () => {
    if (!this.props.level) {
      return "Loading"
    }

    return this.props.level.map(level => {
      return (
        <button
          onClick={e => this.changeLevel(level.level)}
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
  return bindActionCreators({ fetchLevels, setLevel, resetWord }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Level)
