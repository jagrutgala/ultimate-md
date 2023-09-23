import * as vscode from "vscode";
import { toggleCommand } from "../helpers/toggleCommand";

export const toggleHeading1 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "# ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};

export const toggleHeading2 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "## ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};

export const toggleHeading3 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "### ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};

export const toggleHeading4 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "#### ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};

export const toggleHeading5 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "##### ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};

export const toggleHeading6 = (): vscode.Selection | void => {
  // const pattern = new RegExp('`' + WORD_MATCH + '*`|' + WORD_MATCH + '+');
  const startText = "###### ";
  const endText = "";

  toggleCommand(startText, endText).then().catch();
};
