import { BaseEnv } from "./env-base";
export enum EJuLingZhen {
  下品 = 1,
  中品,
  上品,
}

export enum EFightBuffType {
  玩家,
  敌方,
}

/**
 * 封装自定义返回结果
 */
export type Result = Promise<void>;

/**
 * 封装自定义返回结果
 */
export type Result<T> = Promise<T>;

export interface Say {
  /**
   * StoryManager 标签 {@link StoryManager}.
   * ```typescript
   * const { 旁白 } = StoryManager;
   * 旁白("测试文本")
   * ```
   * @param text 模板字符串数组
   */
  (text: string): Result;

  /**
   * StoryManager 标签 {@link StoryManager}.
   * ```typescript
   * const { 旁白 } = StoryManager;
   * 旁白`测试文本`
   * ```
   * @param template 模板字符串数组
   * @param param
   */
  (template: TemplateStringsArray, ...param: unknown[]): Result;

  /**
   * StoryManager 标签 {@link StoryManager}.
   * ```typescript
   * const { 旁白 } = StoryManager;
   * 旁白`测试文本`
   * ```
   * @param template 模板字符串数组
   */
  (template: TemplateStringsArray): Result;
}

/**
 * 对话管理器类型
 * ```typescript
 * const { 旁白 } = StoryManager;
 * 旁白("测试文本")
 * 旁白`测试文本`
 * ```
 */
export type StoryManager = {
  [name in string]: Say;
};

interface DialogTriggerOption {
  once: boolean;
  default: boolean;
  condition: string;
  id: string;
  type: string;
  priority: number;
  triggerEvent: string;
}

interface DialogTriggerData {
  Once: boolean;
  Default: boolean;
  Condition: string;
  ID: string;
  Type: string;
  Priority: number;
  TriggerEvent: string;
}

export enum NpcDeathType {
  无,
  寿元已尽,
  被玩家打死,
  游历时意外身亡,
  被妖兽反杀,
  被其它Npc截杀,
  做宗门任务死了,
  做主城任务死了,
  炼丹被炸死,
  炼器被炸死,
  不明原因死亡,
  截杀时被反杀,
  飞升失败,
}

export enum EquipSlotType {
  灵舟 = 1,
  武器1 = 2,
  武器2 = 3,
  衣服 = 4,
  饰品 = 5,
}

export enum EShengWang {
  Increase,
  Decrease,
}

type Utils = {
  createOption(...args: Array<string>): string[];
  startDialogEvent(dialogEvent: string, env: BaseEnv): void;
  startTestDialogEvent(commandText: string, env: BaseEnv): void;
  runJS(src: string, funcName: string, env: BaseEnv): void;
  setDialogTrigger(option: Partial<DialogTriggerOption>): DialogTriggerData;
  setDialogTriggerList(
    ...options: Partial<DialogTriggerOption>[]
  ): DialogTriggerData[];
};

export interface NMC {
  Utils: Utils;
}
declare global {
  declare const NMC: NMC;
  declare const NextMoreCommand: NMC;
}
