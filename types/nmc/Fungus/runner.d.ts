import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMCRunnerFungus {
  /**
   * 运行官方对话对应的模块  建议配合NEXT导出数据使用
   * @param flowchartName 流程名
   * @param tagBlock 模块名
   */
  RunFungusFlowchart(flowchartName: string, tagBlock: string): Result;
  /**
   * 运行官方对话对应的模块的对话ID  建议配合NEXT导出数据使用
   * @param flowchartName 流程名
   * @param tagBlock 模块名
   * @param itemID 对话ID
   */
  RunFungusFlowchartItemId(
    flowchartName: string,
    tagBlock: string,
    itemID: number
  ): Result;
  /**
   * 运行当前官方对话的模块的对话ID
   * 需要配合NEXT的FUNGUS补丁  建议配合NEXT导出数据使用
   * @param tagBlock 模块名
   * @param itemID 对话ID
   */
  RunFungusItemId(tagBlock: string, itemID: number): Result;
  /**
   * 运行官方对话对应的模块 建议配合NEXT导出数据使用
   * @param talkID 官方对话ID
   * @param tagBlock 模块名
   */
  RunFungusTalk(talkID: number, tagBlock: string): Result;
  /**
   * 运行官方对话对应的模块的对话ID  建议配合NEXT导出数据使用
   * @param talkID
   * @param tagBlock
   * @param itemID
   */
  RunFungusTalkItemId(talkID: number, tagBlock: string, itemID: number): Result;
}
