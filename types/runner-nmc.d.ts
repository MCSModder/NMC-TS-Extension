/**
 * 封装自定义返回结果
 */
type Result = Promise<void>;
/**
 * 对话
 * ```typescript
 * const { 测试 } = StoryManager;
 * 旁白("测试文本")
 * 旁白`测试文本`
 * ```
 */
type Say = {
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
  (
    template: TemplateStringsArray,
    ...param: Parameters<(...s: any[]) => any>
  ): Result;
};
/**
 * 对话管理器类型
 * ```typescript
 * const { 测试 } = StoryManager;
 * 旁白("测试文本")
 * 旁白`测试文本`
 * ```
 */
type StoryManager = {
  [name in string]: Say;
};

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展
 */
export interface NMCRunner {
  /**
   * 对话管理器
   * ```typescript
   * const { 测试 } = StoryManager;
   * 旁白("测试文本")
   * 旁白`测试文本`
   * ```
   * tag 标签 {@link StoryManager}.
   */
  StoryManager: StoryManager;
  /**
   * 对话管理器
   * ```typescript
   * const { 测试 } = StoryManager;
   * 旁白("测试文本")
   * 旁白`测试文本`
   * ```
   * tag 标签 {@link StoryManager}.
   */
  对话管理器: StoryManager;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunJS: (src: string, funcName: string) => Result;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  运行JS: (src: string, funcName: string) => Result;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunJavaScript: (src: string, funcName: string) => Result;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  运行JavaScript: (src: string, funcName: string) => Result;
}
