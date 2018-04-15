import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { bindActionCreators } from "redux"
import { fetchCategories } from "../actions/actions"

class Category extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  renderCategories() {
    if (!this.props.category) {
      return "Loading"
    }
    return this.props.category.map(cat => {
      return (
        <button
          onClick={() => this.props.listGameCategories(cat)}
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
    category: state.category.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
