import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMC指令角色 {
  /**
   * 移除一个或者多个角色在附近列表
   * @param npcID 角色编号列表
   */
  角色强制删除传送(...npcID: number[]): Result;
  /**
   * 传送角色在附近列表
   * @param npcID 角色编号
   */
  角色强制传送(npcID: string | number): Result;
  /**
   * 传送多个角色在附近列表
   * @param npcID 角色编号列表
   */
  角色多人强制传送(...npcID: Array<string | number>): Result;
  /**
   * 移除一个或者多个角色跟随
   * @param npcID 角色编号列表
   */
  设置角色取消跟随(...npcID: number[]): Result;
  /**
   * 添加角色跟随
   * @param npcID 角色编号
   */
  设置角色跟随(npcID: string | number): Result;
  /**
   * 添加多个角色跟随
   * @param npcID 角色编号
   */
  设置角色多人跟随(...npcID: Array<string | number>): Result;
  /**
   * 添加所有道侣跟随
   */
  设置所有道侣跟随(): Result;
  /**
   * 移除所有道侣跟随
   */
  设置所有道侣取消跟随(): Result;
  /**
   * 把角色传送指定场景
   * @param sceneName 场景名字
   * @param npcID 角色编号列表
   */
  设置角色传送(sceneName: string, ...npcID: number[]): Result;
  /**
   * 给角色添加指定悟道编号的经验值
   * @param npc 角色编号
   * @param wudaoId 悟道编号
   * @param exp 经验值
   */
  增加角色悟道经验(npc: number, wudaoId: number, exp: number): Result;
  /**
   * 给角色设置指定悟道编号的经验值
   * @param npc 角色编号
   * @param wudaoId 悟道编号
   * @param exp 经验值
   */
  设置角色悟道经验(npc: number, wudaoId: number, exp: number): Result;
  /**
   * 给角色添加悟道感悟
   * @param npc 角色编号
   * @param wudaoSkill 悟道感悟
   */
  增加角色悟道技能(npc: number, wudaoSkill: number): Result;
  /**
   * 强制刷新角色悟道日期
   * @param npc 角色编号
   */
  更新角色悟道(npc: number): Result;
  /**
   * 给角色添加灵石
   * @param npc 角色编号
   * @param money 灵石
   */
  增加角色灵石(npc: number, money: number): Result;
  /**
   * 给角色指定灵石
   * @param npc 角色编号
   * @param money 灵石
   */
  设置角色灵石(npc: number, money: number): Result;
  /**
   * 给角色起姓名 会弹出输入框 `姓氏 名字` `江 疏影`
   * @param npc 角色编号
   */
  设置角色名字(npc: number): Result;
  /**
   * 给角色起名
   * @param npc 角色编号
   * @param surname 姓氏
   * @param name 名字
   */
  设置角色名字(npc: number, surname: string, name: string): Result;
  /**
   * 设置角色自称
   * @param npc 角色编号
   */
  设置角色自称(npc: number): Result;
  /**
   * 添加角色情分
   * @param npc 角色编号
   * @param qingFen 情分值
   */
  增加角色情分(npc: number, qingFen: number): Result;
  /**
   * 强制角色交互
   * @param npc 角色编号
   */
  角色强制交互(npc: number): Result;
  /**
   * 强制角色交谈
   * @param npc 角色编号
   */
  角色强制交谈(npc: number): Result;
  /**
   * 强制角色交易
   * @param npc 角色编号
   */
  角色强制交易(npc: number): Result;
  /**
   * 设置角色兴趣
   * @param npc 角色编号
   * @param xinQuType 兴趣列表
   */
  设置角色兴趣类型(npc: number, ...xinQuType: string[]): Result;
  /**
   * 添加角色兴趣
   * @param npc 角色编号
   * @param xinQuType 兴趣列表
   */
  添加角色兴趣类型(npc: number, ...xinQuType: string[]): Result;
  /**
   * 设置所有道侣死亡
   * @param filterNpc 需要过滤角色编号列表
   */
  设置所有道侣死亡(...filterNpc: number[]): Result;
  /**
   * 给角色设置战斗立绘
   * @param npc 角色编号
   * @param fightFace 战斗立绘
   */
  设置战斗立绘(npc: number, fightFace: number): Result;
  /**
   * 给角色设置显示静态战斗立绘
   * @param npc 角色编号
   * @param show 是否显示
   */
  设置角色战斗立绘(npc: number, show: boolean): Result;
  /**
   * 给角色设置显示骨骼战斗立绘
   * @param npc 角色编号
   * @param show 是否显示
   */
  设置角色战斗骨骼(npc: number, show: boolean): Result;
  /**
   * 设置角色死亡
   * @param deathType 死亡类型
   * @param npcId 角色编号
   * @param killNpcId 凶手编号
   * @param after 延期死亡
   */
  设置角色死亡(
    deathType: NpcDeathType,
    npcId: number,
    killNpcId?: number,
    after?: boolean
  ): Result;
  /**
   * 设置角色是否飞升
   * @param npc 角色编号
   */
  设置角色飞升(npc: number): Result;
  /**
   * 设置角色化神保底
   * @param npc 角色编号
   * @param year 年
   * @param month 月
   * @param day 日
   */
  保送角色化神时间(
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
  保送角色金丹时间(
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
  保送角色元婴时间(
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
  保送角色筑基时间(
    npc: number,
    year: number,
    month: number,
    day: number
  ): Result;
}
