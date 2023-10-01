import * as vscode from "vscode";
import { toggleCommand, toggleCommandBlock } from "../helpers/toggleCommand";
import { CODE_PATTERN } from "../helpers/wordRegEx";

export const toggleCode = (): vscode.Selection | void => {
  const startText = "`";
  const endText = "`";

  toggleCommand(startText, endText, CODE_PATTERN).then().catch();
};

export const toggleBlockCode = (): vscode.Selection | void => {
  const startText = "```";
  const endText = "```";

  toggleCommand(startText, endText, CODE_PATTERN).then().catch();
};
