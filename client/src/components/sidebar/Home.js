import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./Home.css"

//clears game board and returns to 'home screen' with welcome and instructions

const Home = props => {
  return (
    <div className="home">
      <Router>
        <button className="home">
          <Link to="/">RETURN HOME </Link>
        </button>
      </Router>
      <Router>
        <button className="lists">
          <Link to="/words">See all words </Link>
        </button>
      </Router>
    </div>
  )
}

export default Home
