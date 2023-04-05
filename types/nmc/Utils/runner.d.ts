import { StoryManager, Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMCRunnerUtils {
  /**
   * 对话管理器
   * ```typescript
   * const { 旁白 } = StoryManager;
   * 旁白("测试文本")
   * 旁白`测试文本`
   * ```
   * tag 标签 {@link StoryManager}.
   */
  StoryManager: StoryManager;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunJS(src: string, funcName: string): Result;

  /**
   * 运行指定的 JavaScript 命令
   *
   * @param src JavaScript 文件名称
   * @param funcName 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunJavaScript(src: string, funcName: string): Result;
  /**
   *
   * @param tianfuID 天赋ID
   * @param remove 是否移除
   */
  ChangeSelectTianFu(tianfuID: number, remove: boolean): Result;
  ChangeTianFuBuff(tianfuID: number, remove: boolean): Result;
  SetAllRemoveEquip(): Result;
  SetIntGroup(group: string, key: string, value: number): Result;
  SetStrGroup(group: string, key: string, value: string): Result;
  SetNewTask(newTask: number): Result;
  SetRecordShengPing(shengPingId: number, ...args: string[]): Result;
  SetRemoveEquip(...type: EquipSlotType[]): Result;
  SetShengWang(
    num: number,
    type: EShengWang,
    id: number,
    show?: boolean
  ): Result;
  SetShengWangDecrease(num: number, id: number, show?: boolean): Result;
  SetShengWangIncrease(num: number, id: number, show?: boolean): Result;
  SetTaskIndexFinish(taskID: number, index: number): Result;
  SetTaskNext(taskID: number): Result;
  SetTaskNext(mapIndex: number, sceneName: string, ...npcId: number[]): Result;
  SetUIBlackMask(): Result;
  ShowGaoshi(sceneName: string): Result;
  ShowLianDanPanel(type: number): Result;
  ShowLianQiPanel(type: number): Result;
  ShowMenPaiShop(sceneName: string, isMoney: boolean, ratio: number): Result;
  ShowMenPaiShop(itemID: string, price: number, limit: number): Result;
  ShowOpenPanel(panelType: number, type: number): Result;
}
