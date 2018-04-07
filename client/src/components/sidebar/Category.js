import React from "react"
import "./Category.css"
//disply category selection in button form.  highligh current selection

let catArray = ["sample", "food", "things"]

const Category = props => {
  //<h3>this.props.name<h3/>

  return (
    <span className="category">
      {catArray.map(cat => <button className="catButton"> Button </button>)}
    </span>
  )
  // return
  // <div className="board">
  //   {boardArray.map(card => Card(card))}</div>
}

export default Category
