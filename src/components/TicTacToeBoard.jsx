import { useState } from "react"
import { TicTacToeRow } from "./TicTacToeRow"
import { createBoard } from "../js/tictactoe"
export function TicTacToeBoard({ initialSize = 3 }) {
  const [size, setSize] = useState(initialSize)
  const board = createBoard(size)

  return (
    <div className="tictactoe-board">
      {board.map((row) => (
        <TicTacToeRow key={row.id} tiles={row.tiles} />
      ))}
    </div>
  )
}
