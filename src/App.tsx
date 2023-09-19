import { useNavigate } from "react-router-dom"
import { ROUTER } from "./router"
import MonacoEditor from "./components/monaco-editor"
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

  const onChange = (code: string) => {
    console.log(code)
  }

  return (
    <div>
      <button onClick={toEchartsList}>echarts list</button>
      <button onClick={toEchartsEditor}>echarts editor</button>
      <MonacoEditor onBulr={onChange}/>
    </div>
  )
}

export default App
