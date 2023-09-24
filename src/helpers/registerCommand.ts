export interface CommandMap {
  commandId: string;
  command: (...args: any[]) => any;
}

export class RegisterCommandService {
  private _commandsMap: CommandMap[];

  constructor() {
    this._commandsMap = [];
  }
  registerCommand (commandId: string, command: (...args: any[]) => any) {
    this._commandsMap.push({ commandId, command });
  }

  get commandsMap () {
    return [...this._commandsMap];
  }
}

