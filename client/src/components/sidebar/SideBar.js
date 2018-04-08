import React from "react"
import Category from "./Category"
import Level from "./Level"
import Home from "./Home"
import "./Sidebar.css"
// container to hold all sidebar items

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
