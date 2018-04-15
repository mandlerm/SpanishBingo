import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { bindActionCreators } from "redux"
import { fetchCategories } from "../actions/actions"

class Category extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderCategories() {
    if (!this.props.category) {
      console.log("no")
      return "Loading"
    }
    console.log("props", this.props.category)
    return this.props.category.map(cat => {
      return (
        <button
          // onClick={() => this.props.listGameCategories(cat)}
          className="lined thin catButton"
          key={cat.name}
          value={cat.name}>
          {cat.db_name}
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
      //
      // <div className="category">
      //   <h1 className="heading">Choose a category</h1>
      //   {catArray.map(cat => (
      //     <button
      //       onClick={this.handleGameCategoryChange}
      //       className="lined thin catButton"
      //       key={cat.id}
      //       value={cat}>
      //       {cat}
      //     </button>
      //   ))}
      // </div>
    )
  }
}

//whatever is returned from here will show up as props inside of
//the component as this.props. I can now say this.props
//this is our link between Redux and React - it lets me access STATE
function mapStateToProps(state) {
  console.log("state", state.setup.categories)
  return {
    category: state.setup.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
