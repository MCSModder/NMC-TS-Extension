import { Result } from "./common-nmc";

/**
 * 运行时脚本 - NMC 扩展
 */
export interface NMCEnv {
  curDialogID(): Result<string>;
  curDialogIndex(): Result<number>;
  fightTags(): Result<string[]>;
  customData(): Result<Dictionary<unknown>>;
}
