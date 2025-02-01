import { useState } from "react"
import { TicTacToeBoard } from "../components/TicTacToeBoard"

export function TicTacToePage() {
  const [boardSize, setBoardSize] = useState(3)

  return (
    <>
      <h1>Tic-tac-toe</h1>
      <TicTacToeBoard size={10} />
    </>
  )
}
