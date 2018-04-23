import React from "react"
import Sidebar from "./sidebar/sidebar"
import Welcome from "./welcome.js"
import "../index.css"

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="welcomecontainer">
        <Sidebar />
        <Welcome />
      </div>
    )
  }
}

export default WelcomeContainer
