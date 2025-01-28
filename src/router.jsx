import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { ToyBox } from "./pages/ToyBox"
import { TicTacToePage } from "./pages/TicTacToePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      {
        path: "toybox",
        children: [
          { index: true, element: <ToyBox /> },
          { path: "tic-tac-toe", element: <TicTacToePage /> },
        ],
      },
    ],
  },
])
