// todo: refactor as object

const PLAYER_ONE_VALUE = 1
const PLAYER_TWO_VALUE = -1

export function createGame(size) {
  const board = createBoard(size)
  const scoreSheet = createScoreSheet(size)
  return { board, scoreSheet }
}

function createBoard(size) {
  const board = []
  for (let index = 0; index < size; index++) {
    const row = {
      id: `row${index}`,
      tiles: [],
    }
    board.push(row)
  }
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < size; j++) {
      const tile = {
        id: `r${i}c${j}`,
        row: i,
        column: j,
      }
      row.tiles.push(tile)
    }
  }

  return board
}

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

export function markScore(row, col, player, scoreSheet) {
  const value = player === 1 ? PLAYER_ONE_VALUE : PLAYER_TWO_VALUE
  scoreSheet.rowScores[row] += value
  scoreSheet.columnScores[col] += value
  if (isDiagonalOne) scoreSheet.diagonalOne += value
  if (isDiagonalTwo) scoreSheet.diagonalTwo += value
}

export function getWinner(row, col, scoreSheet, boardSize) {
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
