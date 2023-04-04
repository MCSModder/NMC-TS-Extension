import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMCRunnerFungus {
  RunFungusFlowchart(flowchartName: string, tagBlock: string): Result;
  RunFungusFlowchartItemId(
    flowchartName: string,
    tagBlock: string,
    itemID: number
  ): Result;
  RunFungusItemId(tagBlock: string, itemID: number): Result;
  RunFungusTalk(talkID: number, tagBlock: string): Result;
  RunFungusTalkItemId(talkID: number, tagBlock: string, itemID: number): Result;
}
