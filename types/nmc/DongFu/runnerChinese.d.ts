import { Result, NpcDeathType, EJuLingZhen } from "../common";

/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展 洞府相关
 */
export interface NMC指令洞府 {
  /**
   * 设置聚灵阵
   *
   * @param {number} id 洞府ID
   * @param {EJuLingZhen} level 聚灵阵等级
   * @returns {Result}
   */
  设置洞府聚灵阵(id: number, level: EJuLingZhen): Result;

  /**
   * 加载洞府
   *
   * @param id 洞府ID
   * @returns {Result}
   */
  加载洞府(id: number): Result;

  /**
   * 设置新洞府
   *
   * @param id 洞府ID
   * @param level 聚灵阵等级
   * @param name 洞府ID
   * @returns {Result}
   */
  设置新洞府(id: number, level: EJuLingZhen, name: string): Result;
}
