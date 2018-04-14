import React from "react"
import Card from "./card"
//board of cards

//retrieve game options
//for each game option, render out game card with that option className
//display game options as cards

class Board extends React.Component {
  render() {
    let boardArray = [
      "apple",
      "banana",
      "carrot",
      "drink",
      "elephants",
      "faraway",
      "grapes",
      "hot dogs",
      "ice cream",
      "juice",
      "knights",
      "lamby",
      "mice",
      "noise",
      "octopus",
      "pizza"
    ]
    return <div className="board">{boardArray.map(card => Card(card))}</div>
  }
}

export default Board
// class Board extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick = e => {
//     this.props.handleGameClick(e.target.name)
//   }
//   render() {
//     const createButton = (data, index) => {
//       return (
//         <button
//           className="gameButton"
//           key={index}
//           name={data}
//           onClick={this.handleClick}>
//           {data}
//         </button>
//       )
//     }
//     return <div> {this.props.data.map(createButton)} </div>
//   }
// }
//
// export default GameCards
