import React from "react"

class Welcome extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1>Welcome to Spanish Squares</h1>
        <h3>Where learning Spanish is a game</h3>
        <p className="desc">
          This is a M-MVP. Increased functionality is planned. <br />
          <br />
          For now, choose a category (all category selections will take you to
          Sample game - other categories coming soon) <br />
          <br />
          A standard board is 16 squares. Select "Easy" under Level for a 9
          square game. <br />
          The board will display. Click on any square to hear the word said in
          Spanish. The word will also be displayed in both Spanish and English
          in the text box.
        </p>

        <h5 className="postscript">
          (Coming soon...new categories & score keeping)
        </h5>
      </div>
    )
  }
}

export default Welcome
