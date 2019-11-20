import React from 'react'

const GameStats = props => {
  return (
    <div>
      <p>Right: {props.right}</p>
      <p>Wrong: {props.wrong}</p>
    </div>
  )
}

export default GameStats