import React from "react"

//retrieve game options
//for each game option, render out game card with that option className
//display game options as cards

class GameCards extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

  //testing api call

  list = fetch(`/api/food?q=${query}`, {
  accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  }
  console.log(list)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    this.props.handleGameClick(e.target.name)
  }
  render() {
    const createButton = (data, index) => {
      return (
        <button
          className="gameButton"
          key={index}
          name={data}
          onClick={this.handleClick}>
          {data}
        </button>
      )
    }
    return <div> {this.props.data.map(createButton)} </div>
  }
}

export default GameCards
