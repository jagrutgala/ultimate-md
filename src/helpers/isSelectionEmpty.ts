import * as vscode from "vscode";


export function isSelectionEmpty(): boolean {
  let editor = vscode.window.activeTextEditor;
  if (editor == undefined || editor == null) {
    return true;
  }
  const selections = editor.selections;
  return selections.length > 0 ? selections.every(v => v.isEmpty): true;
}
