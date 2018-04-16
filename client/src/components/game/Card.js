import React from "react"
import "./card.css"
import { shape, string } from "prop-types"
//individual cards

const Card = props => {
  //<h3>this.props.name<h3/>
  console.log(props)
  return (
    <img
      src={props.image}
      alt={props.english}
      className="card"
      key={props.id}
      width="100%"
      height="100%"
    />
  )
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
