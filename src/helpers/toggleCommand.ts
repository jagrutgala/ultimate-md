import * as vscode from "vscode";
import { isSelectionEmpty } from "../helpers/isSelectionEmpty";

export const toggleCommand = async (startText: string, endText: string): Promise<void | boolean> => {
  return new Promise(async (resolve, reject) => {
    let editor = vscode.window.activeTextEditor;
    if (editor === undefined || editor === null) {
      return;
    }
    let selections = editor.selections;
    let isSuccess: boolean = false;
    try {
      isSuccess = await editor.edit((editorBuilder) => {
        selections.forEach((v) => {
          if (editor) {
            const range = new vscode.Range(v.start, v.end);
            const text = editor.document.getText(range);
            const selection = new vscode.Selection(v.start, v.end);
            editorBuilder.replace(selection, startText + text + endText);
          }
        });
      });
    } catch (error) {
      isSuccess = false;
    }
    if (isSuccess) {
      resolve(isSuccess);
    } else {
      reject(isSuccess);
    }

  });
}
