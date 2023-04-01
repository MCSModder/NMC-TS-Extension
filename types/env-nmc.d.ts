import { Result } from "./common-nmc";
export interface NMCEnv {
  curDialogID(): Result<string>;
  curDialogIndex(): Result<number>;
  fightTags(): Result<string[]>;
  customData(): Result<Dictionary<unknown>>;
}
