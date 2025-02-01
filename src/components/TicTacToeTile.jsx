import { useContext, useState } from "react"
import { TicTacToeContext } from "./TicTacToeBoard"

export function TicTacToeTile({ value, onSquareClick }) {
  return (
    <div onClick={onSquareClick} className="tictactoe-tile">
      {value}
    </div>
  )
}
