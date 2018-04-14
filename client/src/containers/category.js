import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { setGameCategory } from "../actions/actionCreators"
//disply category selection in button form.  highligh current selection

let catArray = ["sample", "food", "things"]

class Category extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.handleGameCategoryChange = this.handleGameCategoryChange.bind(this)
  //   console.log(this.state)
  // }

  //click handler working
  //I think fetch is working correctly
  //need to save this choice into state
  // handleGameCategoryChange(event) {
  //   fetch(`/api/cards`, { category: `event.target.value` })
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson)
  //     })
  // }
  renderCategories() {
    return this.props.category.map(cat => {
      return (
        <button
          onClick={this.handleGameCategoryChange}
          className="lined thin catButton"
          key={cat.category}
          value={cat.category}>
          {cat.category}
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
  return {
    category: state.games
  }
}
// const mapDispatchToProps = (dispatch: Function) => ({
//   handleGameCategoryChange(event) {
//     console.log(event.target.value)
//     dispatch(setGameCategory(event.target.value))
//   }
// })

export default connect(mapStateToProps)(Category)
