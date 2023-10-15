import * as vscode from "vscode";
import { toggleCommandLineCallback } from "../helpers/toggleCommand";
import { BULLET_PATTERN, NUMBER_PATTERN, CHECKBOX_PATTERN } from "../helpers/wordRegEx";
import { EditCallbackOptions } from "../helpers/editCallback";

export const toggleBullets = (): void => {
  const startText = "-";
  const endText = "";

  const toggleBulletReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
    let newText = "";
    const trimmedText = lineText.trim()
    if (trimmedText.startsWith(startText) && trimmedText.endsWith(endText)) {
      const regMatch = lineText.match(new RegExp("(\s*)-(.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${taskContent}`;
      }
    } else {
      const regMatch = lineText.match(new RegExp("(\s*)(.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${startText} ${taskContent.trim()}${endText}`;
      }
    }
    editorBuilder.replace(selection, newText);
  }

  toggleCommandLineCallback(startText, endText, BULLET_PATTERN, toggleBulletReplace).then().catch();
};

export const toggleNumbers = (): void => {
  const startText = "1.";
  const endText = "";

  const toggleNumberReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
    let newText = "";
    const trimmedText = lineText.trim()
    if (trimmedText.startsWith(startText) && trimmedText.endsWith(endText)) {
      const regMatch = lineText.match(new RegExp("(\s*)[0-9]+[.](.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${taskContent}`;
      }
    } else {
      const regMatch = lineText.match(new RegExp("(\s*)(.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${startText} ${taskContent.trim()}${endText}`;
      }
    }

    editorBuilder.replace(selection, newText);
  }

  toggleCommandLineCallback(startText, endText, NUMBER_PATTERN, toggleNumberReplace).then().catch();
};

export const toggleCheckboxes = (): void => {
  const startText = "- [ ]";
  const endText = "";

  const toggleCheckboxReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
    let newText = "";
    const trimmedText = lineText.trim()
    if (trimmedText.startsWith(startText) && trimmedText.endsWith(endText)) {
      const regMatch = lineText.match(new RegExp("(\s*)- [[].\](.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${taskContent}`;
      }
    } else {
      const regMatch = lineText.match(new RegExp("(\s*)(.*)"));
      if (regMatch) {
        const leadingSpace = regMatch[1];
        const taskContent = regMatch[2];
        newText = `${leadingSpace}${startText} ${taskContent.trim()}${endText}`;
      }
    }

    editorBuilder.replace(selection, newText);
  }

  toggleCommandLineCallback(startText, endText, CHECKBOX_PATTERN, toggleCheckboxReplace).then().catch();
};

export const toggleTask = (): void => {

  const startText = "- [ ]";
  const endText = "";

  const toggleTaskReplace = ({ editorBuilder, startText, endText, selection, lineText }: EditCallbackOptions ) => {
    let newText = "";
    const regMatch = lineText.match(new RegExp("(\s*)- [[](x| )\](.*)"));
    if (regMatch) {
      const leadingSpace = regMatch[1];
      const isComplete = regMatch[2];
      const taskContent = regMatch[3];
      newText = `${leadingSpace}- [${isComplete == "x" ? " ": "x"}] ${taskContent}`;
    }

    editorBuilder.replace(selection, newText);
  }

  toggleCommandLineCallback(startText, endText, CHECKBOX_PATTERN, toggleTaskReplace)
  .then()
  .catch();
}
