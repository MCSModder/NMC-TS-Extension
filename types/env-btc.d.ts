/**
 * 运行时脚本 - BTC 扩展
 */
export interface BTCEnv {
  /**
   * "异火踪迹" 事件检测指令
   *
   * @returns 检测结果
   */
  FireTrace(): Promise<boolean>;

  /**
   * 获取主角当前所在大地图节点，并验证相关逻辑
   *
   * @returns 所在节点
   */
  GetNowMapIndex(): Promise<number>;

  /**
   * 获取主角所在门派
   *
   * @returns 门派数据 (0:散修 1:竹山 2:玄道 3:金虹 4:星河 5:离火 6:化尘)
   */
  GetPlayerSect(): Promise<number>;

  /**
   * 检测主角是否拥有指定数量的指定物品
   *
   * @param itemId 物品编号
   * @param count 物品数量
   * @returns 检测结果
   */
  HasNumberOfItem(itemId: number, count: number): Promise<boolean>;

  /**
   * 检测是否启用 BTC 剧情
   *
   * @returns 检测结果
   */
  HasScript(): Promise<boolean>;

  /**
   * 检测是否拥有指定任务
   *
   * @param taskId 任务编号
   */
  HasTask(taskId: number): Promise<boolean>;
}
