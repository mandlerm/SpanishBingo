import React from "react"
import "./wordDisplay.css"
import { Icon } from "react-fa"

//component to disply current word with link for play audio

const Word = props => {
  // props.word
  let word = "this is the word box"

  //make a border around the box with some shading/style

  return (
    <div>
      <form className="word">
        <input className="word" value={word} />
        <Icon name="microphone" size="3x" className="mic" />
      </form>
    </div>
  )
}

export default Word
