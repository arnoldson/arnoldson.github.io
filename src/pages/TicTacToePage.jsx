import { TicTacToeBoard } from "../components/TicTacToeBoard"

export function TicTacToePage() {
  return (
    <>
      <h1>Tic-tac-toe</h1>
      <TicTacToeBoard initialSize={3} />
    </>
  )
}
