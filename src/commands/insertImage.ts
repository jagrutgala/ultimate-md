import * as vscode from "vscode";
import { insertCommand } from "../helpers/toggleCommand";

export const insertImage = (): vscode.Selection | void => {
  const startText = "![";
  const endText = "]()";

  insertCommand(startText, endText).then().catch();
};

export const insertLink = (): vscode.Selection | void => {
  const startText = "[";
  const endText = "]()";

  insertCommand(startText, endText).then().catch();
};
