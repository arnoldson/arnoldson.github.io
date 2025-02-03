import { useEffect, useState } from "react"
import { TicTacToeBoard } from "../components/TicTacToeBoard"

export function TicTacToePage() {
  const [boardSize, setBoardSize] = useState(3)

  return (
    <>
      <h1>Tic-tac-toe</h1>
      <label htmlFor="size">Set board size:</label>
      <input
        type="text"
        value={boardSize}
        onChange={(e) => setBoardSize(parseInt(e.target.value))}
      />
      <TicTacToeBoard size={boardSize} />
    </>
  )
}
