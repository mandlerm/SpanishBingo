import React from "react"
import Sidebar from "./sidebar/Sidebar"
import Welcome from "./welcome.js"
import "./welcome.css"

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
