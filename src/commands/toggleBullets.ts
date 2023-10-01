import * as vscode from "vscode";
import { toggleCommandBlock } from "../helpers/toggleCommand";
import { BULLET_PATTERN, NUMBER_PATTERN, CHECKBOX_PATTERN, LEADINGWHITESPACE_PATTERN } from "../helpers/wordRegEx";

export const toggleBullets = (): vscode.Selection | void => {
  const startText = "- ";
  const endText = "";

  toggleCommandBlock("", "", LEADINGWHITESPACE_PATTERN)
    .then(() => {
      toggleCommandBlock(startText, endText, BULLET_PATTERN).then().catch();
    })
    .catch(() => {
      vscode.window.showInformationMessage("Error in toggleBullets")
    });
};

export const toggleNumbers = (): vscode.Selection | void => {
  const startText = "1. ";
  const endText = "";

  toggleCommandBlock("", "", LEADINGWHITESPACE_PATTERN)
    .then(() => {
      toggleCommandBlock(startText, endText, BULLET_PATTERN).then().catch();
    })
    .catch(() => {
      vscode.window.showInformationMessage("Error in toggleNumbers")
    });};

export const toggleCheckboxes = (): vscode.Selection | void => {
  const startText = "- [ ]";
  const endText = "";

  toggleCommandBlock("", "", LEADINGWHITESPACE_PATTERN)
    .then(() => {
      toggleCommandBlock(startText, endText, BULLET_PATTERN).then().catch();
    })
    .catch(() => {
      vscode.window.showInformationMessage("Error in toggleCheckboxes")
    });
};
