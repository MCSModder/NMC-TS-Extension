import { Result, NpcDeathType } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 NPC相关
 */
export interface NMCRunnerDongFu {
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
}
