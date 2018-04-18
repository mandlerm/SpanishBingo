import React from "react"
import "./card.css"
import { shape, string } from "prop-types"
//individual cards

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  //<h3>this.props.name<h3/>
  handleClick = event => {
    let audio = new Audio(event.audio)
    audio.play()
  }

  render() {
    return (
      <figure className="card" key={this.props.display.id}>
        <img
          src={this.props.display.image}
          alt={this.props.display.english}
          width="100%"
          height="100%"
          onClick={e => {
            this.handleClick(this.props.display)
          }}
        />
      </figure>
    )
  }
}

Card.propTypes = {
  card: shape({
    english: string,
    spanish: string,
    audio: string,
    image: string,
    category: string
  })
}
export default Card
