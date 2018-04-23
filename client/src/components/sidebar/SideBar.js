import React from "react"
import Category from "../../containers/category"
import Level from "../../containers/level"
import Home from "./home"
import "../../CSS/index.css"

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Category />
        <Level />
        <Home />
      </div>
    )
  }
}

export default Sidebar
