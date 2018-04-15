import React from "react"
import { connect } from "react-redux"
import "./category.css"
import { bindActionCreators } from "redux"
import { setCategoryOptions } from "../actions/actions"

class Category extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.handleGameCategoryChange = this.handleGameCategoryChange.bind(this)
  //   console.log(this.state)
  // }

  //click handler working
  //I think fetch is working correctly
  //need to save this choice into state
  handleGameCategoryChange(event) {
    console.log("i'm choosing a topic")
  }
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
      console.log(cat)
      return (
        <button
          onClick={() => this.props.setCategoryOptions(cat)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCategoryOptions: setCategoryOptions },
    dispatch
  )
}

// const mapDispatchToProps = (dispatch: Function) => ({
//   handleGameCategoryChange(event) {
//     console.log(event.target.value)
//     dispatch(setGameCategory(event.target.value))
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Category)
