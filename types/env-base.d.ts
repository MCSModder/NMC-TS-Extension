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

/**
 * 自定义封装 DateTime 数据
 *
 * 实际上前端使用 Date 进行接受即可
 */
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
   * 获取主角血量
   *
   * @returns 血量数据
   */
  GetHp(): Result<number>;

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

  /**
   * 运行 luaFile 的 luaFunc 函数，返回 Str 值。
   *
   * @param src Lua 文件名
   * @param funcName Lua 函数名
   * @returns 返回值 (具体参考 Lua 脚本)
   */
  GetLuaInt(src: string, funcName: string): Result<number>;

  /**
   * 运行 luaFile 的 luaFunc 函数，返回 Str 值。
   *
   * @param src Lua 文件名
   * @param funcName Lua 函数名
   * @returns 返回值 (具体参考 Lua 脚本)
   */
  GetLuaStr(src: string, funcName: string): Result<string>;

  /**
   * 从 id 为 key 的 Int 字符串类型设置中获取当前的设置值
   *
   * @param key 键值
   * @returns 返回值
   */
  GetIntSetting(key: string): Result<number>;

  /**
   * 从 id 为 key 的 Long 字符串类型设置中获取当前的设置值
   *
   * @param key 键值
   * @returns 返回值
   */
  GetLongSetting(key: string): Result<bigint>;

  /**
   * 从 id 为 key 的 Float 字符串类型设置中获取当前的设置值
   *
   * @param key 键值
   * @returns 返回值
   */
  GetFloatSetting(key: string): Result<number>;

  /**
   * 从 id 为 key 的 Double 字符串类型设置中获取当前的设置值
   *
   * @param key 键值
   * @returns 返回值
   */
  GetDoubleSetting(key: string): Result<number>;

  /**
   * 从 id 为 key 的 String 字符串类型设置中获取当前的设置值
   *
   * @param key 键值
   * @returns 返回值
   */
  GetStringSetting(key: string): Result<string>;

  /**
   * 判断是否在某个日期之前
   *
   * @param year 年
   * @param month 月
   * @param day 日
   * @returns 判定结果
   */
  Before(year: number, month: number, day: number): Result<boolean>;

  /**
   * 判断是否在某个日期之后
   *
   * @param year 年
   * @param month 月
   * @param day 日
   * @returns 判定结果
   */
  After(year: number, month: number, day: number): Result<boolean>;

  /**
   * 获取 DateTime 格式的时间数据
   *
   * @param year 年
   * @param month 月
   * @param day 日
   * @returns DateTime 数据
   */
  GetDateTime(year: number, month: number, day: number): Result<Date>;

  /**
   * 获取 DateTime 格式的游戏当前时间数据
   *
   * @returns 当前时间
   */
  GetNowTime(): Result<Date>;

  /**
   * 获取主角是否学习对应神通
   *
   * @param skillID 神通编号
   * @returns 验证结果
   */
  HasSkill(skillID: number): Result<boolean>;

  /**
   * 获取主角是否学习对应功法
   *
   * @param skillID 功法编号
   * @returns 验证结果
   */
  HasStaticSkill(skillID: number): Result<boolean>;

  /**
   * 获取主角是否学习对应双修秘术
   *
   * @param skillID 双修秘术编号
   * @returns 验证结果
   */
  HasTrainSkill(skillID: number): Result<boolean>;

  /**
   * 根据主角性别返回称呼
   *
   * @param man 对男性称呼
   * @param woman 对女性称呼
   * @returns 实际返回称呼
   */
  GetCall(man: string, woman: string): Result<string>;

  /**
   * 获取主角灵石数量
   *
   * @returns 灵石数量 (bigint 数据)
   */
  GetMoney(): Result<bigint>;

  /**
   * 获取主角基础血量上限
   *
   * @returns 基础血量上限数据
   */
  GetBaseHpMax(): Result<number>;

  /**
   * 获取主角血量上限
   *
   * @returns 血量上限数据
   */
  GetHpMax(): Result<number>;

  /**
   * 获取主角心境
   *
   * @returns 心境数据
   */
  GetMentality(): Result<number>;

  /**
   * 获取主角丹毒
   *
   * @returns 丹毒数据
   */
  GetDrugsPoison(): Result<number>;

  /**
   * 获取主角道点数量
   *
   * @returns 主角道点数量
   */
  GetComprehensionPoint(): Result<number>;

  /**
   * 获取主角性别 (1:男 2:女)
   *
   * @returns 主角性别 (1:男 2:女)
   */
  GetSex(): Result<number>;

  /**
   * 获取主角灵感
   *
   * @returns 灵感数据
   */
  GetInspiration(): Result<number>;

  /**
   * 获取主角灵感上限
   *
   * @returns 灵感上限数据
   */
  GetInspirationMax(): Result<number>;

  /**
   * 获取主角年龄
   *
   * @returns 年龄数据
   */
  GetAge(): Result<bigint>;

  /**
   * 获取主角寿命
   *
   * @returns 寿命数据
   */
  GetLife(): Result<bigint>;

  /**
   * 获取主角资质
   *
   * @returns 资质数据
   */
  GetTalent(): Result<number>;

  /**
   * 获取主角基础神识
   *
   * @returns 基础神识数据
   */
  GetBaseSpirit(): Result<number>;

  /**
   * 获取主角神识
   *
   * @returns 神识数据
   */
  GetSpirit(): Result<number>;

  /**
   * 获取主角悟性
   *
   * @returns 悟性数据
   */
  GetAbility(): Result<bigint>;

  /**
   * 获取主角基础遁速
   *
   * @returns 基础遁速数据
   */
  GetBaseMoveSpeed(): Result<number>;

  /**
   * 获取主角遁速
   *
   * @returns 遁速数据
   */
  GetMoveSpeed(): Result<number>;

  /**
   * 获取主角等级
   *
   * 1~3 炼气前中后期
   * 4~6 筑基前中后期
   * 7~9 金丹前中后期
   * 10~12 元婴前中后期
   * 13~15 化神前中后期
   *
   * @returns 主角等级信息
   */
  GetLevel(): Result<number>;

  /**
   * 获取主角阶段
   *
   * @returns 主角修炼阶段数据(1:炼气 2:筑基 3:金丹 4:元婴 5:化神)
   */
  GetLevelType(): Result<number>;

  /**
   * 获取主角身上指定悟道经验值
   *
   * @param typeID 悟道类型
   * @returns 悟道经验值
   */
  GetComprehensionExp(typeID: number): Result<number>;

  /**
   * 获取主角身上指定先天 Buff 数量
   *
   * @param buffId 先天 Buff 编号
   * @returns Buff 数量
   */
  GetCongenitalBuffCount(buffId: number): Result<number>;

  /**
   * 获取主角身上物品的数量
   *
   * @param itemId 物品编号
   * @returns 物品数量
   */
  GetItemNum(itemId: number): Result<number>;

  /**
   * 获取与 Npc 的好感度
   *
   * @param npcId NPC 编号
   * @returns 好感度数值
   */
  GetNpcFav(npcId: number): Result<number>;

  /**
   * 获取 Npc 的性别 1 男;2 女
   *
   * @param npcId NPC 编号
   * @returns NPC 性别 (1:男 2:女)
   */
  GetNpcSex(npcId: number): Result<number>;

  /**
   * 获取 Npc 的年龄 单位是月
   *
   * @param npcId NPC 编号
   * @returns NPC 年龄(月)
   */
  GetNpcAge(npcId: number): Result<number>;

  /**
   * 获取 Npc 的寿元
   *
   * @param npcId NPC 编号
   * @returns NPC 寿元
   */
  GetNpcLife(npcId: number): Result<number>;

  /**
   * 获取 Npc 的等级，含义同 GetLevel
   *
   * 1~3 炼气前中后期
   * 4~6 筑基前中后期
   * 7~9 金丹前中后期
   * 10~12 元婴前中后期
   * 13~15 化神前中后期
   *
   * @param npcId NPC 编号
   * @returns NPC 等级
   */
  GetNpcLevel(npcId: number): Result<number>;

  /**
   * 获取 Npc 的等级阶段，含义同 GetLevelType
   *
   * @param npcId NPC 编号
   * @returns NPC 等级 (1:炼气 2:筑基 3:金丹 4:元婴 5:化神)
   */
  GetNpcLevelType(npcId: number): Result<number>;

  /**
   * 获取 Npc 的神识
   *
   * @param npcId NPC 编号
   * @returns 神识数据
   */
  GetNpcSprite(npcId: number): Result<number>;

  /**
   * 获取 Npc 是否死亡
   *
   * @param npcId NPC 编号
   * @returns 验证结果
   */
  IsNpcDeath(npcId: number): Result<boolean>;

  /**
   * Npc 是否为玩家的道侣
   *
   * @param npcId NPC 编号
   * @returns 验证结果
   */
  IsCouple(npcId: number): Result<boolean>;

  /**
   * Npc 是否为玩家的师傅
   *
   * @param npcId NPC 编号
   * @returns 验证结果
   */
  IsTeacher(npcId: number): Result<boolean>;

  /**
   * Npc 是否与玩家结义
   *
   * @param npcId NPC 编号
   * @returns 验证结果
   */
  IsBrother(npcId: number): Result<boolean>;

  /**
   * Npc 是否为玩家的徒弟
   *
   * @param npcId NPC 编号
   * @returns 验证结果
   */
  IsStudent(npcId: number): Result<boolean>;
}
