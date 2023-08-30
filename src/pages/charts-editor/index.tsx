import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import s from "./index.module.less"
import c from "classnames"

// echarts 组件编辑器
const EchartsEditor = () => {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate("/")
  }

  return (
    <div className={c(s.echartsEditor, "p10")}>
      <Button onClick={backToHome}>back</Button>
      <p>echarts components editor</p>
    </div>
  )
}

export default EchartsEditor
