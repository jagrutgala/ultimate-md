import * as vscode from "vscode";

export interface EditCallbackOptions {
  editorBuilder: vscode.TextEditorEdit;
  startText: string;
  endText: string;
  selection: vscode.Selection;
  lineText: string;
}
export type EditCallback = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => void;

export const trimReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
  const trimmedText = lineText.trim();
  if (trimmedText.startsWith(startText) && trimmedText.endsWith(endText)) {
    editorBuilder.replace(selection, trimmedText.substring(startText.length, trimmedText.length - endText.length));
  } else {
    editorBuilder.replace(selection, startText + trimmedText + endText);
  }
}

export const normalReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
  if (lineText.startsWith(startText) && lineText.endsWith(endText)) {
    editorBuilder.replace(selection, lineText.substring(startText.length, lineText.length - endText.length));
  } else {
    editorBuilder.replace(selection, startText + lineText + endText);
  }
}
