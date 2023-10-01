import * as vscode from "vscode";
import { toggleCommand } from "../helpers/toggleCommand";
import { STRIKE_PATTERN } from "../helpers/wordRegEx";

export const toggleStrike = (): vscode.Selection | void => {
  const startText = "~~";
  const endText = "~~";

  toggleCommand(startText, endText, STRIKE_PATTERN).then().catch();
};
