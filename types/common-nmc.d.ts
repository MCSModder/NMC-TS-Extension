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
/**
 * 对话管理器类型
 * ```typescript
 * const { 旁白 } = StoryManager;
 * 旁白("测试文本")
 * 旁白`测试文本`
 * ```
 */
export type StoryManager = {
  [name in string]: {
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
    (template: TemplateStringsArray, ...param: any[]): Result;
    /**
     * StoryManager 标签 {@link StoryManager}.
     * ```typescript
     * const { 旁白 } = StoryManager;
     * 旁白`测试文本`
     * ```
     * @param template 模板字符串数组
     */
    (template: TemplateStringsArray): Result;
  };
};
type Utils = {
  createOption(...args: Array<string>): string[];
};
export interface NMC {
  Utils: Utils;
}
declare global {
  declare const NMC: NMC;
  declare const NextMoreCommand: NMC;
}
