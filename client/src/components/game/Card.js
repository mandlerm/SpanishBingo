import React from "react"
import "./card.css"
import { shape, string } from "prop-types"
//individual cards

const Card = props => {
  //<h3>this.props.name<h3/>

  return (
    <h1 className="card" key={props.id}>
      card
    </h1>
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
