import React from 'react'
import "./GameStats.scss"

const GameStats = props => {
  return (
    <div className="game-stat">
      <p>Right: {props.right}</p>
      <p>Wrong: {props.wrong}</p>
    </div>
  )
}

export default GameStats