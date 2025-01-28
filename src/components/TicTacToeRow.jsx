import { TicTacToeTile } from "./TicTacToeTile"

export function TicTacToeRow({ tiles }) {
  return (
    <div className="tictactoe-row">
      {tiles.map((tile) => (
        <TicTacToeTile key={tile.id} />
      ))}
    </div>
  )
}
