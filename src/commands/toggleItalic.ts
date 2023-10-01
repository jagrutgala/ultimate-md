import * as vscode from "vscode";
import { toggleCommand } from "../helpers/toggleCommand";
import { ITALIC_PATTERN } from "../helpers/wordRegEx";

export const toggleItalic = (): vscode.Selection | void => {
  const startText = "_";
  const endText = "_";

  toggleCommand(startText, endText, ITALIC_PATTERN).then().catch();
};
