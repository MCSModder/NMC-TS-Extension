/**
 * 封装自定义返回结果
 */
type Result = Promise<void>;

/**
 * 对话管理器类型
 */
type StoryManager = {
  [propName: string]: (
    template: TemplateStringsArray | string,
    ...param: any[]
  ) => Result;
}

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展
 */
export interface NMCRunner {
  /**
   * 对话管理器
   */
  StoryManager: StoryManager;
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