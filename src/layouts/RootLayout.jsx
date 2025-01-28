import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
