import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMC指令战斗 {
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
  增加战斗Buff(target: EFightBuffType, ...buffList: string[]): Result;

  /**
   * 设置战斗时玩家自定义立绘
   * 只有对同性的立绘参数有效
   * ```ts
   *  runner.SetFightCustomFace(7200)
   * ```
   * @param {number} faceId 设置 0 还原立绘 -1 不变 自定义立绘ID(要去CustomFace文件夹找对应文件id)
   * @returns {Result}
   */
  自定义战斗立绘(faceId: number): Result;

  /**
   * 在战斗时替换神通
   *
   * @param {number} oldSkillId 需要替换神通ID
   * @param {number} newSkillId 替换新神通ID
   * @returns {Result}
   */
  技能替换(oldSkillId: number, newSkillId: number): Result;

  /**
   * 在战斗时替换神通 根据名字替换
   *
   * @param {string} oldSkillName 需要替换神通名字
   * @param {string} newSkillName 替换新神通名字
   * @returns {Result}
   */
  技能名字替换(oldSkillName: string, newSkillName: string): Result;
}
