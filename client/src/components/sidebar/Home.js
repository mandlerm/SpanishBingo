import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "../../CSS/index.css"

//clears game board and returns to 'home screen' with welcome and instructions

const Home = props => {
  return (
    <div className="home">
      <button className="home">
        <Link to="/">RETURN HOME </Link>
      </button>

      <button className="lists">
        <Link to="/wordlist">See all words </Link>
      </button>
    </div>
  )
}

export default Home
