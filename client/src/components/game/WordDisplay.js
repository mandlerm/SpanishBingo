import React from "react"
import "./WordDisplay.css"

//component to disply current word with link for play audio

const Word = props => {
  // props.word
  let word = "this is the word box"

  //make a border around the box with some shading/style

  return (
    <div className="word">
      <caption class="word">{word}</caption>
    </div>
  )
}

export default Word
