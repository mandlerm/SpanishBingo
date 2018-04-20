import React from "react"
// import { Link } from "react-router"
import { NavLink } from "react-router-dom"
import "../App.css"

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white"
}

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">
      <NavLink
        to="/"
        style={link}
        activeStyle={{
          background: "darkblue"
        }}>
        Welcome to Spanish Bingo
      </NavLink>
    </h1>
    <p className="App-intro">
      Built with React/Redux on top of a Rails backend
    </p>
  </header>
)

export default Header
