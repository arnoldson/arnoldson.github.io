import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="nav">
      <span className="nav-title">Arnold Son</span>
      <ul className="link-list">
        <li>
          <Link className="nav-link" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="toybox">
            Toy Box
          </Link>
        </li>
      </ul>
    </nav>
  )
}
