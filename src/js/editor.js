window.onload = function codemirroreditor() {
  window.editor = CodeMirror.fromTextArea(
    document.getElementById("codeeditor"),
    {
      // mode: "text/x-sqlite",
      // indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      autofocus: true,
      extraKeys: { Tab: "autocomplete" },
    }
  );
  window.editor.setValue(`def solution():
    return None`);
};