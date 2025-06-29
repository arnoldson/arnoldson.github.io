// RootLayout.jsx - Clean structure with proper centering
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </>
  )
}
