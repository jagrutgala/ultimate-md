// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { toggleHeading1, toggleHeading2, toggleHeading3, toggleHeading4, toggleHeading5, toggleHeading6 } from "./commands/toggleHeadings";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ultimate-md" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "ultimate-md.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from ultimate-md!");
    }
  );
  context.subscriptions.push(disposable);

  let disposableToggleHeading1 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader1",
    toggleHeading1
  );
  context.subscriptions.push(disposableToggleHeading1);

  let disposableToggleHeading2 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader2",
    toggleHeading2
  );
  context.subscriptions.push(disposableToggleHeading2);

  let disposableToggleHeading3 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader3",
    toggleHeading3
  );
  context.subscriptions.push(disposableToggleHeading3);

  let disposableToggleHeading4 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader4",
    toggleHeading4
  );
  context.subscriptions.push(disposableToggleHeading4);

  let disposableToggleHeading5 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader5",
    toggleHeading5
  );
  context.subscriptions.push(disposableToggleHeading5);

  let disposableToggleHeading6 = vscode.commands.registerCommand(
    "ultimate-md.toggleHeader6",
    toggleHeading6
  );
  context.subscriptions.push(disposableToggleHeading6);

}

// This method is called when your extension is deactivated
export function deactivate() {}
