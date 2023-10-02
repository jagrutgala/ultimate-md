import * as vscode from "vscode";
import { toggleCommandBlock, toggleCommandLine } from "../helpers/toggleCommand";
import { BULLET_PATTERN, NUMBER_PATTERN, CHECKBOX_PATTERN } from "../helpers/wordRegEx";

export const toggleBullets = (): vscode.Selection | void => {
  const startText = "- ";
  const endText = "";

  toggleCommandLine(startText, endText, BULLET_PATTERN, true).then().catch();
};

export const toggleNumbers = (): vscode.Selection | void => {
  const startText = "1. ";
  const endText = "";

  toggleCommandLine(startText, endText, NUMBER_PATTERN, true).then().catch();
};

export const toggleCheckboxes = (): vscode.Selection | void => {
  const startText = "- [ ]";
  const endText = "";

  toggleCommandLine(startText, endText, CHECKBOX_PATTERN, true).then().catch();
};
