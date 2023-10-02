import * as vscode from "vscode";

export const mdLangId = "markdown";

export const changeLangToMd = (): vscode.Selection | void => {
  const editor = vscode.window.activeTextEditor;
  if (editor == undefined || editor == null) {
    return;
  }

  vscode.languages.setTextDocumentLanguage(editor.document, mdLangId);
};
