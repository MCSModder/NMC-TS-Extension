/**
 * 封装自定义返回结果
 */
type Result<T> = Promise<T>;

/**
 * UINpcData 类型
 */
type UINpcData = {
  IsException: boolean;
  ID: number;
  UUID: string;
  Tag: number;
  IsGuDingNPC: boolean;
};

/**
 * KBEngine.Avatar 类型
 */
type Avatar = {};

/**
 * 自定义字典类型
 */
type Dictionary<T> = {
  [key: string]: T;
};
interface DateTime {
  Now: DateTime;
  Day: number;
  Month: number;
  Year: number;
  DayOfYear: number;
  Hour: number;
  Minute: number;
  Millisecond: number;
  DayOfYear: number;
}
/**
 * 运行时脚本 - Next 内置
 */
export interface BaseEnv {
  /**
   * 获取用于查询的角色数据
   *
   * @returns 角色数据
   */
  bindNpc(): Result<UINpcData>;

  /**
   * 获取当前环境内的 Flowchart
   *
   * @returns Flowchart 对象
   */
  flowchart(): Result<Flowchart>;

  /**
   * 根据参数名称获取临时参数,未找到则返回 0
   *
   * @param key 参数 key 值
   * @returns 返回值
   */
  GetArg(key: string): Result<number>;

  /**
   * 获取当前大地图节点名称 (仅当场景处于大地图时有效)
   *
   * @returns 节点名称
   */
  GetCurMapRoad(): Result<string>;

  /**
   * 获取 ConfigSetting 中的 bool 类型字段值
   *
   * @param key 键名称
   * @returns bool 值
   */
  GetBoolSetting(key: string): Result<boolean>;

  /**
   * 获取当前场景名称
   *
   * @returns 场景名称
   */
  GetCurScene(): Result<string>;

  /**
   * 根据键值，获取一个整型数据，请确保该 key 键已进行过声明
   *
   * @param key 键名称
   * @returns 整型数据
   */
  GetInt(key: string): Result<number>;

  /**
   * 根据大地图节点编号获取节点名称
   *
   * @param roadId 节点编号
   * @returns 节点名称
   */
  GetRoadName(roadId: string): Result<string>;

  /**
   * 根据场景编号获取场景名称
   *
   * @param sceneId 场景编号
   * @returns 场景名称
   */
  GetSceneName(sceneId: string): Result<string>;

  /**
   * 根据键值，获取一个字符串数据，请确保该 key 键已进行过声明
   *
   * @param key 键名称
   * @returns 字符串数据
   */
  GetStr(key: string): Result<string>;

  /**
   * 获取指定触发器的触发次数
   *
   * @param troggerId 触发器编号
   * @returns 触发次数
   */
  GetTriggerCount(troggerId: string): Result<number>;

  /**
   * 获取使用 Runner.Input() 输入的文字
   *
   * @returns 文字信息
   */
  input(): Result<string>;

  /**
   * 根据触发器编号获取触发器是否开启
   *
   * @param triggerId 触发器编号
   * @returns 启用状态
   */
  IsTriggerOn(triggerId: string): Result<boolean>;

  /**
   * 获取之前使用物品的编号
   *
   * @returns 物品编号
   */
  itemID(): Result<number>;

  /**
   * 获取加载场景时的场景名
   *
   * @returns 场景名称
   */
  mapScene(): Result<string>;

  /**
   * 获取使用 ShowOption 或 SayOption 后的选项值
   *
   * @returns 选项值
   */
  optionID(): Result<number>;

  /**
   * 获取主角数据
   *
   * @returns 角色对象
   */
  player(): Result<Avatar>;

  /**
   * 获取环境奇遇的编号
   *
   * @returns 奇遇编号
   */
  qiyuID(): Result<number>;

  /**
   * 获取环境奇遇中的已选择项
   *
   * @returns 奇遇选项值
   */
  qiyuOption(): Result<number>;

  /**
   * 获取环境角色的绑定编号
   *
   * @returns 绑定编号
   */
  roleBindID(): Result<number>;

  /**
   * 获取环境角色的实时编号
   *
   * @returns 实时编号
   */
  roleID(): Result<number>;

  /**
   * 获取环境角色名称
   *
   * @returns 角色名称
   */
  roleName(): Result<string>;

  /**
   * 获取临时参数字典
   *
   * 不推荐使用，建议使用 GetArg 方法获取对应的参数值
   *
   * @returns Args 参数字典
   */
  tmpArgs(): Result<Dictionary<int>>;

  /**
   * 获取一个随机数 (包含最小值，不包含最大值)
   *
   * 不推荐使用，建议使用 JavaScript 自带的随机数获取方式
   *
   * @param min 最小值
   * @param max 最大值
   * @returns 随机结果
   */
  Random(min: number, max: number): Result<number>;
  curDialogID(): Result<string>;
  curDialogIndex(): Result<number>;
  fightTags(): Result<string[]>;
  customData(): Result<Dictionary<any>>;
  GetLuaInt(src: string, funcName: string): Result<number>;
  GetLuaStr(src: string, funcName: string): Result<string>;
  GetBoolSetting(key: string): Result<boolean>;
  GetIntSetting(key: string): Result<number>;
  GetLongSetting(key: string): Result<bigint>;
  GetFloatSetting(key: string): Result<number>;
  GetDoubleSetting(key: string): Result<number>;
  GetStringSetting(key: string): Result<string>;
  Before(year: number, month: number, day: number): Result<boolean>;
  After(year: number, month: number, day: number): Result<boolean>;
  GetDateTime(year: number, month: number, day: number): Result<DateTime>;
  GetNowTime(): Result<DateTime>;
  HasSkill(skillID: number): Result<boolean>;
  HasStaticSkill(skillID: number): Result<boolean>;
  HasTrainSkill(skillID: number): Result<boolean>;
  GetCall(man: string, woman: string): Result<string>;
  GetCurScene(): Result<string>;
  GetCurMapRoad(): Result<string>;
  GetSceneName(sceneID: string): Result<string>;
  GetRoadName(roadId: string): Result<string>;
  GetMoney(): Result<bigint>;
  GetHp(): Result<number>;
  GetBaseHpMax(): Result<number>;
  GetHpMax(): Result<number>;
  GetMentality(): Result<number>;
  GetDrugsPoison(): Result<number>;
  GetComprehensionPoint(): Result<number>;
  GetSex(): Result<number>;
  GetInspiration(): Result<number>;
  GetInspirationMax(): Result<number>;
  GetAge(): Result<bigint>;
  GetLife(): Result<bigint>;
  GetTalent(): Result<number>;
  GetBaseSpirit(): Result<number>;
  GetSpirit(): Result<number>;
  GetAbility(): Result<bigint>;
  GetBaseMoveSpeed(): Result<number>;
  GetMoveSpeed(): Result<number>;
  GetLevel(): Result<number>;
  GetLevelType(): Result<number>;
  GetComprehensionExp(typeID: number): Result<number>;
  GetCongenitalBuffCount(buffID: number): Result<number>;
  GetItemNum(itemID: number): Result<number>;
  GetNpcFav(npcId: number): Result<number>;
  GetNpcSex(npcId: number): Result<number>;
  GetNpcAge(npcId: number): Result<number>;
  GetNpcLife(npcId: number): Result<number>;
  GetNpcLevel(npcId: number): Result<number>;
  GetNpcLevelType(npcId: number): Result<number>;
  GetNpcSprite(npcId: number): Result<number>;
  IsNpcDeath(npcId: number): Result<boolean>;
  IsCouple(npcId: number): Result<boolean>;
  IsTeacher(npcId: number): Result<boolean>;
  IsBrother(npcId: number): Result<boolean>;
  IsStudent(npcId: number): Result<boolean>;
}
