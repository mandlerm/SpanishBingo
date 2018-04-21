import React from "react"

class Welcome extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1>Welcome to Spanish Squares</h1>
        <h3>Where learning Spanish is a game</h3>
        <p className="desc">
          Choose a category. <br />
          <br />
          Choose a difficulty level. <br />
          <br />
          After that...well, click and see.
        </p>

        <h5 className="postscript">
          (Coming soon...new categories & score keeping)
        </h5>
      </div>
    )
  }
}

export default Welcome
