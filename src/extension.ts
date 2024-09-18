import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "osrunipy.sendTextToIPyTerm",
    () => {
      const activeEditor = vscode.window.activeTextEditor;

      if (activeEditor) {
        const terminal = vscode.window.activeTerminal;
        const fileName = activeEditor.document.fileName;
        terminal?.sendText(`run ${fileName}`);
        // vscode.window.showInformationMessage(`Current file: ${fileName}`);
      } else {
        vscode.window.showInformationMessage("No file - no execute 🫥");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
