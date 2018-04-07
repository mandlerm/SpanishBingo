import React from "react"
import Category from "./Category"
import Level from "./Level"
// container to hold all sidebar items

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Category />
        <Level />
      </div>
    )
  }
}

export default Sidebar
