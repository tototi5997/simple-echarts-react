import App from "./App"
import { createHashRouter } from "react-router-dom"
import { EchartsEditor, EchartsList } from "./pages"

export enum ROUTER {
  ECHARTSLIST = "/home/charts-list",

  ECHARTSEDITOR = "/home/charts-editor",
}

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ROUTER.ECHARTSLIST,
    element: <EchartsList />,
  },
  {
    path: ROUTER.ECHARTSEDITOR,
    element: <EchartsEditor />,
  },
])
