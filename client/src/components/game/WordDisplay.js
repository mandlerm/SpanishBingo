import React from "react"

//component to disply current word with link for play audio

const Word = props => {
  // props.word
  let word = "this is the word box"

  //make a border around the box with some shading/style

  return <text class="word">{word}</text>
}

export default Word
