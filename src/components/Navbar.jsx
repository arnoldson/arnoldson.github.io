import { Link } from "react-router-dom"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { useEffect, useState } from "react"

export function Navbar() {
  const onMobileChange = (e) => {
    setIsMobile(e.matches)
  }

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 768px)")
    setIsMobile(mobileMq.matches)
    mobileMq.addEventListener("change", onMobileChange)
    return () => {
      mobileMq.removeEventListener("change", onMobileChange)
    }
  }, [])

  return (
    <nav className="nav">
      <span className="nav-title">Arnold Son</span>
      <button
        className="menu-button"
        onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
      >
        {isMenuCollapsed ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
      </button>

      <ul
        className={`link-list ${
          isMobile && isMenuCollapsed ? "collapsed" : ""
        }`}
      >
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
        {/* <li>
          <Link className="nav-link" to="toybox">
            Toy Box
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
