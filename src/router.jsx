import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
    ],
  },
])
