import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { bindActionCreators } from "redux"
import { fetchCategories, setCategory } from "../actions/actions"

class Category extends React.Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  renderCategories() {
    if (!this.props.category) {
      return "Loading"
    }
    return this.props.category.map(cat => {
      console.log(cat)
      return (
        <button
          onClick={() => this.props.setCategory(cat.db_name)}
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
  return bindActionCreators(
    { fetchCategories: fetchCategories, setCategory: setCategory },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
