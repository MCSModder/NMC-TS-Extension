import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMCRunnerNpc {
  /**
   * 移除一个或者多个角色在附近列表
   * @param npcID 角色编号列表
   */
  NpcForceRemoveTeleport(...npcID: number[]): Result;
  /**
   * 传送角色在附近列表
   * @param npcID 角色编号
   */
  NpcForceTeleport(npcID: string | number): Result;
  /**
   * 传送多个角色在附近列表
   * @param npcID 角色编号列表
   */
  NpcForceMultiTeleport(...npcID: Array<string | number>): Result;
  /**
   * 移除一个或者多个角色跟随
   * @param npcID 角色编号列表
   */
  SetNpcRemoveFollow(...npcID: number[]): Result;
  /**
   * 添加角色跟随
   * @param npcID 角色编号
   */
  SetNpcFollow(npcID: string | number): Result;
  /**
   * 添加多个角色跟随
   * @param npcID 角色编号
   */
  SetNpcMultiFollow(...npcID: Array<string | number>): Result;
  /**
   * 添加所有道侣跟随
   */
  SetAllDaolvFollow(): Result;
  /**
   * 移除所有道侣跟随
   */
  SetAllDaolvRemoveFollow(): Result;
  /**
   * 把角色传送指定场景
   * @param sceneName 场景名字
   * @param npcID 角色编号列表
   */
  SetNpcTeleport(sceneName: string, ...npcID: number[]): Result;
  /**
   * 给角色添加指定悟道编号的经验值
   * @param npc 角色编号
   * @param wudaoId 悟道编号
   * @param exp 经验值
   */
  AddNpcWudaoExp(npc: number, wudaoId: number, exp: number): Result;
  /**
   * 给角色设置指定悟道编号的经验值
   * @param npc 角色编号
   * @param wudaoId 悟道编号
   * @param exp 经验值
   */
  SetNpcWudaoExp(npc: number, wudaoId: number, exp: number): Result;
  /**
   * 给角色添加悟道感悟
   * @param npc 角色编号
   * @param wudaoSkill 悟道感悟
   */
  AddNpcWudaoSkill(npc: number, wudaoSkill: number): Result;
  /**
   * 强制刷新角色悟道日期
   * @param npc 角色编号
   */
  UpdateNpcWuDao(npc: number): Result;
  /**
   * 给角色添加灵石
   * @param npc 角色编号
   * @param money 灵石
   */
  AddNpcMoney(npc: number, money: number): Result;
  /**
   * 给角色指定灵石
   * @param npc 角色编号
   * @param money 灵石
   */
  SetNpcMoney(npc: number, money: number): Result;
  /**
   * 给角色起姓名 会弹出输入框 `姓氏 名字` `江 疏影`
   * @param npc 角色编号
   */
  SetNpcName(npc: number): Result;
  /**
   * 给角色起名
   * @param npc 角色编号
   * @param surname 姓氏
   * @param name 名字
   */
  SetNpcName(npc: number, surname: string, name: string): Result;
  /**
   * 设置角色自称
   * @param npc 角色编号
   */
  SetNpcSelfName(npc: number): Result;
  /**
   * 添加角色情分
   * @param npc 角色编号
   * @param qingFen 情分值
   */
  AddNpcQingFen(npc: number, qingFen: number): Result;
  /**
   * 强制角色交互
   * @param npc 角色编号
   */
  NpcForceJiaoHu(npc: number): Result;
  /**
   * 强制角色交谈
   * @param npc 角色编号
   */
  NpcForceJiaoTan(npc: number): Result;
  /**
   * 强制角色交易
   * @param npc 角色编号
   */
  NpcForceJiaoYi(npc: number): Result;
  /**
   * 设置角色兴趣
   * @param npc 角色编号
   * @param xinQuType 兴趣列表
   */
  SetNpcXinQuType(npc: number, ...xinQuType: string[]): Result;
  /**
   * 添加角色兴趣
   * @param npc 角色编号
   * @param xinQuType 兴趣列表
   */
  AddNpcXinQuType(npc: number, ...xinQuType: string[]): Result;
  /**
   * 设置所有道侣死亡
   * @param filterNpc 需要过滤角色编号列表
   */
  SetAllDaolvDeath(...filterNpc: number[]): Result;
  /**
   * 给角色设置战斗立绘
   * @param npc 角色编号
   * @param fightFace 战斗立绘
   */
  SetFightFace(npc: number, fightFace: number): Result;
  /**
   * 给角色设置显示静态战斗立绘
   * @param npc 角色编号
   * @param show 是否显示
   */
  SetNpcFightFace(npc: number, show: boolean): Result;
  /**
   * 设置角色死亡
   * @param deathType 死亡类型
   * @param npcId 角色编号
   * @param killNpcId 凶手编号
   * @param after 延期死亡
   */
  SetNpcDeath(
    deathType: NpcDeathType,
    npcId: number,
    killNpcId?: number,
    after?: boolean
  ): Result;
  /**
   * 设置角色是否飞升
   * @param npc 角色编号
   */
  SetNpcFlyToSky(npc: number): Result;
  /**
   * 设置角色化神保底
   * @param npc 角色编号
   * @param year 年
   * @param month 月
   * @param day 日
   */
  SetNpcHuaShenTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  /**
   * 设置角色金丹保底
   * @param npc 角色编号
   * @param year 年
   * @param month 月
   * @param day 日
   */
  SetNpcJinDanTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  /**
   * 设置角色元婴保底
   * @param npc 角色编号
   * @param year 年
   * @param month 月
   * @param day 日
   */
  SetNpcYuanYingTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
  /**
   * 设置角色筑基保底
   * @param npc 角色编号
   * @param year 年
   * @param month 月
   * @param day 日
   */
  SetNpcZhuJiTime(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
}
