import { useEffect, useRef } from "react"
import * as MEditor from "monaco-editor"
import { defaultOpts } from "./config"
import { debounce } from "lodash-es"
import c from "classnames"
import s from "./index.module.less"

interface IMonacoEditor {
  onChange?: (codeStr: string) => void
  onBulr?: (codeStr: string) => void
}
const MonacoEditor: React.FC<IMonacoEditor> = (props) => {
  const { onChange, onBulr } = props
  const editor = useRef<MEditor.editor.IStandaloneCodeEditor>()
  const editorContainer = useRef(null)

  useEffect(() => {
    if (editorContainer.current) {
      editor.current = MEditor.editor.create(
        editorContainer.current,
        Object.assign(defaultOpts, {
          language: "javascript",
          theme: "vs-dark",
        })
      )

      editor.current.onDidChangeModelContent(() => debounceChangeHandler())
      editor.current.onDidBlurEditorText(() => blurHandler())
    }

    return () => {
      editor.current?.dispose()
    }
  }, [])

  const debounceChangeHandler = debounce(() => {
    if (editor.current) {
      onChange?.(editor.current.getValue())
    }
  }, 300)

  const blurHandler = () => {
    if (editor.current) {
      onBulr?.(editor.current.getValue())
    }
  }

  return <div className={c(s.editor)} ref={editorContainer} />
}

export default MonacoEditor
