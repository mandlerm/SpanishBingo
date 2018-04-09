import React from "react"
import "./Category.css"
//disply category selection in button form.  highligh current selection

let catArray = ["sample", "food", "things"]

const Category = props => {
  //<h3>this.props.name<h3/>

  return (
    <span className="category">
      <h1 className="heading">Choose a category</h1>
      {catArray.map(cat => (
        <button className="lined thin catButton"> {cat} </button>
      ))}
    </span>
  )
}

export default Category
