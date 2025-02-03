import { createContext, useEffect, useRef, useState } from "react"
import { TicTacToeTile } from "./TicTacToeTile"
export const TicTacToeContext = createContext()

const PLAYER_ONE_VALUE = 1
const PLAYER_TWO_VALUE = -1

function createScoreSheet(size) {
  // game scores are tallied per row & column
  // scores for player one are given +1
  // while player two is given -1
  const rowScores = Array(size).fill(0)
  const columnScores = Array(size).fill(0)
  // diagonal from top left to bottom right
  const diagonalOne = 0
  // diagonal from bottom left to top right
  const diagonalTwo = 0
  return { rowScores, columnScores, diagonalOne, diagonalTwo }
}

function isDiagonalOne(row, col) {
  return row === col
}

function isDiagonalTwo(row, col, boardSize) {
  return row === boardSize - 1 - col
}

function markScore(row, col, player, scoreSheet, size) {
  const value = player === 1 ? PLAYER_ONE_VALUE : PLAYER_TWO_VALUE
  console.log(`adding ${value} to row ${row} and col ${col}`)

  scoreSheet.rowScores[row] += value
  scoreSheet.columnScores[col] += value
  if (isDiagonalOne(row, col)) scoreSheet.diagonalOne += value
  if (isDiagonalTwo(row, col, size)) scoreSheet.diagonalTwo += value
  console.log("score from markScore: ", scoreSheet)
}

function getWinner(row, col, scoreSheet, boardSize) {
  console.log(`Finding winner from row ${row} col ${col}`)
  console.log("scoreSheet for winner: ", scoreSheet)
  console.log(`boardSize: ${boardSize}`)

  console.log("scoreSheet.diagonalOne: ", scoreSheet.diagonalOne)
  console.log("boardSize: ", boardSize)

  console.log("test: ", scoreSheet.diagonalOne === boardSize)

  if (
    scoreSheet.rowScores[row] === boardSize ||
    scoreSheet.columnScores[col] === boardSize ||
    scoreSheet.diagonalOne === boardSize ||
    scoreSheet.diagonalTwo === boardSize
  )
    return 1

  if (
    scoreSheet.rowScores[row] === -boardSize ||
    scoreSheet.columnScores[col] === -boardSize ||
    scoreSheet.diagonalOne === -boardSize ||
    scoreSheet.diagonalTwo === -boardSize
  )
    return 2

  return 0
}

export function TicTacToeBoard({ size }) {
  const [board, setBoard] = useState(null)

  const [xIsNext, setXisNext] = useState(true)
  const [winner, setWinner] = useState(0)

  const [scoreSheet, setScoreSheet] = useState(null)

  function initialize() {
    const newBoard = []
    for (let index = 0; index < size; index++) {
      const row = []
      for (let j = 0; j < size; j++) {
        row.push(null)
      }
      newBoard.push(row)
    }
    setBoard(newBoard)
    setXisNext(true)
    setWinner(0)
    setScoreSheet(createScoreSheet(size))
  }

  useEffect(() => {
    initialize()
  }, [size])
  // const [board, setBoard] = useState(() => {
  //   const newBoard = []
  //   for (let index = 0; index < size; index++) {
  //     newBoard.push(Array(size).fill(null))
  //   }
  //   return newBoard
  // })

  // const [xIsNext, setXisNext] = useState(true)
  // const [winner, setWinner] = useState(0)

  // const [scoreSheet, setScoreSheet] = useState(createScoreSheet(size))

  function handleClick(row, column) {
    if (board[row][column] || winner > 0) return
    const newBoard = structuredClone(board)
    if (xIsNext) {
      newBoard[row][column] = "X"
    } else {
      newBoard[row][column] = "O"
    }
    const newScoreSheet = structuredClone(scoreSheet)
    markScore(row, column, xIsNext ? 1 : 2, newScoreSheet, size)
    const newWinner = getWinner(row, column, newScoreSheet, size)
    console.log("newWinner: ", newWinner)

    setWinner(newWinner)
    setScoreSheet(newScoreSheet)
    setXisNext(!xIsNext)
    setBoard(newBoard)
  }

  return (
    <>
      <h1>{winner > 0 && `The winner is: ${winner === 1 ? "X" : "O"}`}</h1>
      <h2>{`${xIsNext ? "X" : "O"}'s turn`}</h2>
      <div className="tictactoe-board">
        {board &&
          board.map((tiles, rowIndex) => (
            <div key={rowIndex} className="tictactoe-row">
              {tiles.map((tileValue, columnIndex) => (
                <TicTacToeTile
                  key={`r${rowIndex}c${columnIndex}`}
                  value={tileValue}
                  onSquareClick={() => handleClick(rowIndex, columnIndex)}
                />
              ))}
            </div>
          ))}
      </div>
    </>
  )
}
