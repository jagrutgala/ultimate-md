import * as vscode from "vscode";

export const toggleCommand = async (startText: string, endText: string, pattern: RegExp): Promise<void | boolean> => {
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
            const isEmpty = v.isEmpty;
            let selection = v;
            let range: vscode.Range | undefined = undefined;
            if (isEmpty) {
              range = editor.document.getWordRangeAtPosition(v.start, pattern);
            }

            if (range == undefined && range == null) {
              if (isEmpty) {
                range = new vscode.Range(v.start, v.end);
              } else {
                range = new vscode.Range(v.start, v.end);
              }
            }
            selection = new vscode.Selection(range.start, range.end);
            const text = editor.document.getText(range);
            if (text.startsWith(startText) && text.endsWith(endText)) {
              editorBuilder.replace(selection, text.substring(startText.length, text.length - endText.length));
            } else {
              editorBuilder.replace(selection, startText + text + endText);
            }
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
};

export const toggleCommandBlock = async (
  startText: string,
  endText: string,
  pattern: RegExp
): Promise<void | boolean> => {
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
            const isEmpty = v.isEmpty;
            let selection = v;
            let range: vscode.Range | undefined = undefined;
            if (isEmpty) {
              range = editor.document.getWordRangeAtPosition(v.start, pattern);
            }

            if (range == undefined && range == null) {
              if (isEmpty) {
                range = new vscode.Range(new vscode.Position(v.active.line, 0), v.end);
              } else {
                range = new vscode.Range(v.start, v.end);
              }
            }
            selection = new vscode.Selection(range.start, range.end);
            const text = editor.document.getText(range);
            if (text.startsWith(startText) && text.endsWith(endText)) {
              editorBuilder.replace(selection, text.substring(startText.length, text.length - endText.length));
            } else {
              editorBuilder.replace(selection, startText + text + endText);
            }
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
};

export const insertCommand = async (startText: string, endText: string, pattern: RegExp): Promise<void | boolean> => {
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
            const isEmpty = v.isEmpty;
            let selection = v;
            let range: vscode.Range | undefined = undefined;
            if (isEmpty) {
              range = editor.document.getWordRangeAtPosition(v.start, pattern);
            }

            if (range == undefined && range == null) {
              if (isEmpty) {
                range = new vscode.Range(v.start, v.end);
              } else {
                range = new vscode.Range(v.start, v.end);
              }
            }
            selection = new vscode.Selection(range.start, range.end);
            const text = editor.document.getText(range);
            if (text.startsWith(startText) && text.endsWith(endText)) {
              editorBuilder.replace(selection, text.substring(startText.length, text.length - endText.length));
            } else {
              editorBuilder.replace(selection, startText + text + endText);
            }
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
};
