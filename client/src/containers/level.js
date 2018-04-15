import React from "react"
import { connect } from "react-redux"
import "./level.css"
//toggle levels

class Level extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.handleLevelChange = this.handleLevelChange.bind(this)
  // }

  handleLevelChange(event) {
    //if easy is selected, only display 9 cards
    console.log("Im selecting a level")
  }

  renderLevels() {
    if (!this.props.levels) {
      return "Loading"
    }
    console.log(this.props)
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
    level: state.levels
  }
}
// const mapDispatchToProps = (dispatch: Function) => ({
//   handleGameCategoryChange(event) {
//     console.log(event.target.value)
//     dispatch(setGameCategory(event.target.value))
//   }
// })

export default connect(mapStateToProps)(Level)
