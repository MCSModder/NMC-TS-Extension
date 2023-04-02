import {
  EFightBuffType,
  EJuLingZhen,
  StoryManager,
  Result,
  NpcDeathType,
  EquipSlotType,
  EShengWang,
} from "./common";
import { NMC指令 } from "./runnerChinese";
/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展
 */
export interface NMCRunner extends NMC指令 {
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
   * 设置聚灵阵
   *
   * @param {number} id 洞府ID
   * @param {EJuLingZhen} level 聚灵阵等级
   * @returns {Result}
   */
  SetDongFuJuLingZhen(id: number, level: EJuLingZhen): Result;

  /**
   * 加载洞府
   *
   * @param id 洞府ID
   * @returns {Result}
   */
  SetLoadDongFu(id: number): Result;

  /**
   * 设置新洞府
   *
   * @param id 洞府ID
   * @param level 聚灵阵等级
   * @param name 洞府ID
   * @returns {Result}
   */
  SetNewDongFu(id: number, level: EJuLingZhen, name: string): Result;

  /**
   * 增加战斗Buff
   * 只有下一场战斗有效
   * ```ts
   * runner.AddFightBuff(EFightBuffType.玩家,"1000:1","1000:10","1000")
   * ```
   * @param {EFightBuffType} target 目标
   * @param {...string[]} buffIDList Buff编号列表 Buff编号:Buff数量(默认不填为1) ```"1000" 等价 "1000:1"```
   * @returns {Result}
   */
  AddFightBuff(target: EFightBuffType, ...buffList: string[]): Result;

  /**
   * 设置战斗时玩家自定义立绘
   * 只有对同性的立绘参数有效
   * ```ts
   *  runner.SetFightCustomFace(7200)
   * ```
   * @param {number} faceId 设置 0 还原立绘 -1 不变 自定义立绘ID(要去CustomFace文件夹找对应文件id)
   * @returns {Result}
   */
  SetFightCustomFace(faceId: number): Result;

  /**
   * 在战斗时替换神通
   *
   * @param {number} oldSkillId 需要替换神通ID
   * @param {number} newSkillId 替换新神通ID
   * @returns {Result}
   */
  SetFightReplaceSkill(oldSkillId: number, newSkillId: number): Result;

  /**
   * 在战斗时替换神通 根据名字替换
   *
   * @param {string} oldSkillName 需要替换神通名字
   * @param {string} newSkillName 替换新神通名字
   * @returns {Result}
   */
  SetFightReplaceSkillName(oldSkillName: string, newSkillName: string): Result;
  RunFungusFlowchart(flowchartName: string, tagBlock: string): Result;
  RunFungusFlowchartItemId(
    flowchartName: string,
    tagBlock: string,
    itemID: number
  ): Result;
  RunFungusItemId(tagBlock: string, itemID: number): Result;
  RunFungusTalk(talkID: number, tagBlock: string): Result;
  RunFungusTalkItemId(talkID: number, tagBlock: string, itemID: number): Result;
  NpcForceRemoveTeleport(...npcID: number[]): Result;
  NpcForceTeleport(npcID: string | number): Result;
  NpcForceMultiTeleport(...npcID: Array<string | number>): Result;
  SetNpcRemoveFollow(...npcID: number[]): Result;
  SetNpcFollow(npcID: string | number): Result;
  SetNpcMultiFollow(...npcID: Array<string | number>): Result;
  SetAllDaolvFollow(): Result;
  SetAllDaolvRemoveFollow(): Result;
  SetNpcTeleport(sceneName: string, ...npcID: number[]): Result;
  AddNpcWudaoExp(npc: number, wudaoId: number, exp: number): Result;
  AddNpcWudaoSkill(npc: number, wudaoSkill: number): Result;
  UpdateNpcWuDao(npc: number): Result;
  AddNpcMoney(npc: number, money: number): Result;
  SetNpcMoney(npc: number, money: number): Result;
  SetNpcName(npc: number): Result;
  SetNpcName(npc: number, surname: string, name: string): Result;
  SetNpcSelfName(npc: number): Result;
  AddNpcQingFen(npc: number, qingFen: number): Result;
  NpcForceJiaoHu(npc: number): Result;
  NpcForceJiaoTan(npc: number): Result;
  NpcForceJiaoYi(npc: number): Result;
  SetNpcXinQuType(npc: number, ...xinQuType: string[]): Result;
  AddNpcXinQuType(npc: number, ...xinQuType: string[]): Result;
  SetAllDaolvDeath(...filterNpc: number[]): Result;
  SetFightFace(npc: number, fightFace: number): Result;
  SetNpcFightFace(npc: number, show: boolean): Result;
  SetNpcDeath(
    deathType: NpcDeathType,
    npcId: number,
    killNpcId?: number,
    after?: boolean
  ): Result;
  SetNpcFlyToSky(npc: number): Result;
  SetNpcHuaShenTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  SetNpcJinDanTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  SetNpcYuanYingTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  SetNpcZhuJiTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
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
