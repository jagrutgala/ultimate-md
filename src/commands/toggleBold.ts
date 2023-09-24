import * as vscode from "vscode";
import { toggleCommand } from "../helpers/toggleCommand";
import { BOLD_PATTERN } from "../helpers/wordRegEx";


export const toggleBold = (): vscode.Selection | void => {
  const startText ="**";
  const endText = "**";

  toggleCommand(startText, endText, BOLD_PATTERN).then().catch();
};
