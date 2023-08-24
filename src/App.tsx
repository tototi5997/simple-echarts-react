import "./app.css"
import { useNavigate } from "react-router-dom"
import { ROUTER } from "./router"

const App = () => {
  const navigate = useNavigate()

  const toEchartsList = () => {
    navigate(ROUTER.ECHARTSLIST)
  }

  const toEchartsEditor = () => {
    navigate(ROUTER.ECHARTSEDITOR)
  }

  return (
    <div>
      <button onClick={toEchartsList}>echarts list</button>
      <button onClick={toEchartsEditor}>echarts editor</button>
    </div>
  )
}

export default App
