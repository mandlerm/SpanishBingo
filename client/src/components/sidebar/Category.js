import React from "react"
import { connect } from "react-redux"
import "./Category.css"
import { setGameCategory } from "../../actionCreators"
//disply category selection in button form.  highligh current selection

let catArray = ["sample", "food", "things"]

const Category = props => {
  //<h3>this.props.name<h3/>

  return (
    <span className="category">
      <h1 className="heading">Choose a category</h1>
      {catArray.map(cat => (
        <button
          className="lined thin catButton"
          onClick={props.handleGameCategoryChange}
          key={cat.id}>
          {" "}
          {cat}{" "}
        </button>
      ))}
    </span>
  )
}

const mapStateToProps = state => ({ gameCategory: state.gameCategory })
const mapDispatchToProps = (dispatch: Function) => ({
  handleGameCategoryChange(event) {
    console.log(event.target.value)
    dispatch(setGameCategory(event.target.value))
  }
})
export default connect(mapStateToProps)(Category)
