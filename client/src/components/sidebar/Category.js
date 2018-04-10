import React from "react"
import { connect } from "react-redux"
import "./Category.css"
import { setGameCategory } from "../../actionCreators"
//disply category selection in button form.  highligh current selection

let catArray = ["sample", "food", "things"]

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.handleGameCategoryChange = this.handleGameCategoryChange.bind(this)
  }

  //click handler working
  //I think fetch is working correctly
  //need to save this choice into state
  handleGameCategoryChange(event) {
    fetch(`/api/cards`, { category: `event.target.value` })
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
      })
  }

  render() {
    return (
      <div className="category">
        <h1 className="heading">Choose a category</h1>
        {catArray.map(cat => (
          <button
            onClick={this.handleGameCategoryChange}
            className="lined thin catButton"
            key={cat.id}
            value={cat}>
            {cat}
          </button>
        ))}
      </div>
    )
  }
}

// const mapStateToProps = state => ({ gameCategory: state.gameCategory })
// const mapDispatchToProps = (dispatch: Function) => ({
//   handleGameCategoryChange(event) {
//     console.log(event.target.value)
//     dispatch(setGameCategory(event.target.value))
//   }
// })
// export default connect(mapStateToProps)(Category)

export default Category
