import { Link } from "react-router-dom"

export function ToyBox() {
  return (
    <>
      <h1>Toy Box</h1>
      <ul>
        <li>
          <Link to="tic-tac-toe">Tic-tac-toe</Link>
        </li>
      </ul>
    </>
  )
}
