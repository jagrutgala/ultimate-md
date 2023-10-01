// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { toggleHeading1, toggleHeading2, toggleHeading3, toggleHeading4, toggleHeading5, toggleHeading6 } from "./commands/toggleHeadings";
import { RegisterCommandService } from "./helpers/registerCommand";
import { toggleBold } from "./commands/toggleBold";
import { toggleBlockCode, toggleCode } from "./commands/toggleCode";
import { toggleItalic } from "./commands/toggleItalic";
import { toggleStrike } from "./commands/toggleStrike";
import { insertImage, insertLink } from "./commands/insertImage";
import { toggleBullets, toggleCheckboxes, toggleNumbers } from "./commands/toggleBullets";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ultimate-md" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const registerCommandService: RegisterCommandService = new RegisterCommandService();

  registerCommandService.registerCommand("ultimate-md.toggleHeader1", toggleHeading1);
  registerCommandService.registerCommand("ultimate-md.toggleHeader2", toggleHeading2);
  registerCommandService.registerCommand("ultimate-md.toggleHeader3", toggleHeading3);
  registerCommandService.registerCommand("ultimate-md.toggleHeader4", toggleHeading4);
  registerCommandService.registerCommand("ultimate-md.toggleHeader5", toggleHeading5);
  registerCommandService.registerCommand("ultimate-md.toggleHeader6", toggleHeading6);

  registerCommandService.registerCommand("ultimate-md.toggleBold", toggleBold);
  registerCommandService.registerCommand("ultimate-md.toggleCode", toggleCode);
  registerCommandService.registerCommand("ultimate-md.toggleBlockCode", toggleBlockCode);
  registerCommandService.registerCommand("ultimate-md.toggleItalic", toggleItalic);
  registerCommandService.registerCommand("ultimate-md.toggleStrike", toggleStrike);

  registerCommandService.registerCommand("ultimate-md.toggleBullets", toggleBullets);
  registerCommandService.registerCommand("ultimate-md.toggleNumbers", toggleNumbers);
  registerCommandService.registerCommand("ultimate-md.toggleCheckboxes", toggleCheckboxes);

  registerCommandService.registerCommand("ultimate-md.insertImage", insertImage);
  registerCommandService.registerCommand("ultimate-md.insertLink", insertLink);

  registerCommandService.commandsMap.forEach(x => {
    let disposable = vscode.commands.registerCommand(
      x.commandId,
      x.command
    );
    context.subscriptions.push(disposable);
  });

}

// This method is called when your extension is deactivated
export function deactivate() {}
