import * as MEditor from "monaco-editor"

export const defaultOpts: MEditor.editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true, // 自动布局
  contextmenu: false, // 启用上下文菜单
  fixedOverflowWidgets: true,
  fontFamily: 'Menlo-Regular, Monaco, Menlo, Consolas, "Ubuntu Mono", monospace', // 字体样式
  formatOnPaste: true,
  formatOnType: true,
  insertSpaces: true,
  lineDecorationsWidth: 7,
  lineHeight: 15,
  lineNumbersMinChars: 3,
  minimap: {
    enabled: true,
  },
  quickSuggestions: true,
  readOnly: false,
  roundedSelection: false, // 选区是否有圆角
  scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
  scrollbar: {
    verticalScrollbarSize: 6,
    horizontalScrollbarSize: 6,
    alwaysConsumeMouseWheel: false,
    arrowSize: 0,
  },
  snippetSuggestions: "none",
  tabSize: 2,
  theme: "vs-dark",
  wordBasedSuggestions: false,
  wordWrap: "on",
  cursorStyle: "line", // "Block"|"BlockOutline"|"Line"|"LineThin"|"Underline"|"UnderlineThin" 光标样式
  selectOnLineNumbers: true,
  autoIndent: "advanced", // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
  glyphMargin: false,
  renderLineHighlight: "line", // 当前行突出显示方式
  renderWhitespace: "none",
  scrollBeyondLastColumn: 2,
}
