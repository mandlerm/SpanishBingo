import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { bindActionCreators } from "redux"
import {
  fetchCategories,
  setCategory,
  startTimer,
  resetTimer
} from "../actions/actions"

class Category extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  handleClick = (cards, timer) => {
    console.log("inside handle click", cards, timer)
    this.props.resetTimer()
    this.props.setCategory(cards)
    setTimeout(() => {
      this.props.startTimer(timer)
    }, 2000)
    // this.props.startTimer(timer)

    // this.props.setCategory(cat.db_name)
    // this.props.startTimer(this.props.timer)
  }

  renderCategories() {
    if (!this.props.category) {
      return "Loading"
    }
    return this.props.category.map(cat => {
      console.log("props in render cat", this.props, this.props.timer)
      let timer = this.props.timer
      return (
        <button
          onClick={e => this.handleClick(cat.db_name, timer, e)}
          className="lined thin catButton"
          key={cat.name}
          value={cat.name}>
          {cat.name}
        </button>
      )
    })
  }

  render() {
    return (
      <div className="category">
        <h1 className="heading">Select a category</h1>
        {this.renderCategories()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    category: state.category.categories,
    timer: state.timer.timer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCategories, setCategory, startTimer, resetTimer },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
