import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import { ROUTER } from "./router"
import c from "classnames"
import "./styles/index.less"
import "./app.css"

const App = () => {
  const navigate = useNavigate()

  const toEchartsList = () => {
    navigate(ROUTER.ECHARTSLIST)
  }

  const toEchartsEditor = () => {
    navigate(ROUTER.ECHARTSEDITOR)
  }

  const btnClass = { width: 200 } as React.CSSProperties

  return (
    <div className={c("wh100p fbv fbjc fbac app")}>
      <Button style={btnClass} onClick={toEchartsList}>
        echarts list
      </Button>
      <Button style={btnClass} onClick={toEchartsEditor}>
        echarts editor
      </Button>
    </div>
  )
}

export default App
