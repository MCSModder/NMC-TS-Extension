/**
 * 封装自定义返回结果
 */
type Result = Promise<void>;

/**
 * Log 日志打印级别限定
 */
type LogType = "" | "Info" | "Warning" | "Error";

/**
 * 角色关系枚举对象
 */
export enum Relation {
  师傅,
  徒弟,
  道侣,
  结义,
}

/**
 * 主角死亡类型枚举对象
 */
export enum Death {
  身死道消,
  毒发身亡,
  寿元已尽,
  炉毁人亡,
  器毁人亡,
  心魔入体,
  渡劫失败,
}

/**
 * 消息图标类型枚举对象
 */
export enum TipIcon {
  叹号,
  上箭头,
  下箭头,
  包裹,
  任务进度,
  任务完成,
  感悟,
  传音符,
}

/**
 * 战斗类型枚举对象
 */
export enum FightType {
  普通战斗,
  心魔,
  渡劫,
  擂台,
  幻境,
  boss战,
  敌方逃离普通,
  切磋,
  新手引导,
  神仙斗法,
  长老战,
  不杀对手,
  古树根须,
  生死比试,
  无装备无丹药擂台,
}

/**
 * 运行时指令调用对象 - Next 内置
 */
export interface BaseRunner {
  /**
   * 添加主角指定悟道的悟道经验
   *
   * @param wuDaoType 悟道类型
   * @param wuDaoExp 悟道经验值
   * @returns 无需处理
   */
  AddComprehensionExp(wuDaoType: number, wuDaoExp: number): Result;

  /**
   * 给主角添加 1 层先天 Buff
   *
   * @param buffId Buff 编号
   * @returns 无需处理
   */
  AddCongenitalBuff(buffId: number): Result;

  /**
   * 给主角添加物品
   *
   * @param itemId 物品编号
   * @param number 物品数量
   * @param show 是否显示提示 (可选参数，默认不显示提示)
   * @returns 无需处理
   */
  AddItem(itemId: number, number: number, show: boolean = false): Result;

  /**
   * 为指定 NPC 添加对应物品
   *
   * @param npcId NPC 编号
   * @param itemId 物品编号
   * @param number 物品数量
   * @returns 无需处理
   */
  AddNpcItem(npcId: number, itemId: number, number: number): Result;

  /**
   * 添加主角与 NPC 的关系
   *
   * @param npcId NPC 编号
   * @param relation 关系
   * @returns 无需处理
   */
  AddRelation(npcId: number, relation: Relation): Result;

  /**
   * 添加主角思绪
   *
   * @param thinkingId 思绪编号
   * @returns 无需处理
   */
  AddThinking(thinkingId: number): Result;

  /**
   * 跳过指定的时间长度,并根据需要显示对应的提示
   *
   * 若需要显示提示信息，需要同时修改 show 以及 info
   *
   * @param year 年
   * @param mouth 月
   * @param day 日
   * @param show 是否显示提示 (可选参数，默认不显示提示)
   * @param info 提示信息 (可选参数，默认提示信息为空)
   * @returns 无需处理
   */
  AddTime(
    year: number,
    mouth: number,
    day: number,
    show?: boolean,
    info?: string
  ): Result;

  /**
   * 将目标 NPC 绑定到当前环境中，会自动绑定bindNpc、roleBindID、roleID、roleName变量
   *
   * @param npcId NPC 编号
   * @returns 无需处理
   */
  BindNPC(npcId: number): Result;

  /**
   * 修改主角悟性
   *
   * @param ability 悟性变化值 (整型数据)
   * @returns 无需处理
   */
  ChangeAbility(ability: number): Result;

  /**
   * 修改主角年龄
   *
   * @param age 年龄变化值 (整型数据)
   * @returns 无需处理
   */
  ChangeAge(age: number): Result;

  /**
   * 修改主角基础血量上限
   *
   * @param hpMax 基础血量上限值 (整型数据)
   * @returns 无需处理
   */
  ChangeBaseHpMax(hpMax: number): Result;

  /**
   * 修改主角基础遁速
   *
   * @param moveSpeed 遁速变化值 (整型数据)
   * @returns 无需处理
   */
  ChangeBaseMoveSpeed(moveSpeed: number): Result;

  /**
   * 修改主角基础神识
   *
   * @param scirit 基础神识值 (整型数据)
   * @returns 无需处理
   */
  ChangeBaseSpirit(scirit: number): Result;

  /**
   * 添加主角悟道点
   *
   * @param comprehensionPoint 悟道点数量 (整型数据)
   * @returns 无需处理
   */
  ChangeComprehensionPoint(comprehensionPoint: number): Result;

  /**
   * 修改主角丹毒值
   *
   * @param drugsPoison 丹毒值 (整型数据)
   * @returns 无需处理
   */
  ChangeDrugsPoison(drugsPoison: number): Result;

  /**
   * 修改主角修为
   *
   * @param exp 主角修为 (整型数据，支持负值)
   * @returns 无需处理
   */
  ChangeExp(exp: number): Result;

  /**
   * 修改主角血量
   *
   * @param hp 血量变化值 (整型数据，支持负值)
   * @returns 无需处理
   */
  ChangeHP(hp: number): Result;

  /**
   * 修改主角灵感值
   *
   * @param inspiration 灵感值 (整型数据)
   * @returns 无需处理
   */
  ChangeInspiration(inspiration: number): Result;

  /**
   * 根据 key 键修改绑定的数值，需要确保该 key 键已进行过声明
   *
   * @param key 键名称
   * @param value 值数据 (需使用整型数据)
   * @returns 无需处理
   */
  ChangeInt(key: string, value: number): Result;

  /**
   * 修改主角寿元值
   *
   * @param life 寿元变化值 (整型数据)
   * @returns 无需处理
   */
  ChangeLife(life: number): Result;

  /**
   * 修改主角心境
   *
   * @param mentality 心境变化值 (需使用整型数据)
   * @returns 无需处理
   */
  ChangeMentality(mentality: number): Result;

  /**
   * 修改主角灵石数量
   *
   * @param money 灵石数量变化值 (整型数据，支持负值)
   * @returns 无需处理
   */
  ChangeMoney(money: number): Result;

  /**
   * 修改主角与指定 NPC 的好感度
   *
   * @param npcId NPC 编号
   * @param fav 好感度变化值 (整型数据)
   * @param qingFen 是否同时修改情分 (可选参数，默认不修改)
   * @param show 是否显示提示 (可选参数，默认不提示)
   * @returns 无需处理
   */
  ChangeNpcFav(
    npcId: number,
    fav: number,
    qingFen?: boolean,
    show?: boolean
  ): Result;

  /**
   * 修改主角资质
   *
   * @param talent 资质变化值 (整型数据)
   * @returns 无需处理
   */
  ChangeTalent(talent: number): Result;

  /**
   * 关闭背包界面
   *
   * @returns 无需处理
   */
  CloseTabUI(): Result;

  /**
   * 主角死亡
   *
   * @param death 死亡类型
   * @returns 无需处理
   */
  Death(death: Death): Result;

  /**
   * 跳转到指定目标事件
   *
   * @param eventName 事件名称
   * @param condition 跳转条件(可选参数，不建议使用)
   * @returns 异步调用，需要添加 await 关键字
   */
  Event(eventName: string, condition?: string): Result;

  /**
   * 关闭当前显示的 CG 背景
   *
   * @returns 无需处理
   */
  HideCG(): Result;

  /**
   * 条件判定，当满足判定条件时，执行相应指令(不建议使用)
   *
   * @param condition 判定条件
   * @param command 执行指令
   * @returns 无需处理 （若执行指令为异步指令，则应添加 await 关键字）
   */
  If(condition: string, command: string): Result;

  /**
   * 打开输入框，允许玩家输入文字。输入的数据会储存在环境变量 input 中
   *
   * @param info 提示信息
   * @returns 异步调用，需要添加 await 关键字
   */
  Input(info: string): Result;

  /**
   * 直接学习对应神通
   *
   * @param skillId 神通编号
   * @returns 无需处理
   */
  LearnSkill(skillId: number): Result;

  /**
   * 直接学习对应功法
   *
   * @param staticSkillId 功法编号
   * @returns 无需处理
   */
  LearnStaticSkill(staticSkillId: number): Result;

  /**
   * 直接学习对应双休秘术
   *
   * @param trainSkillId 双修秘术编号
   * @returns 无需处理
   */
  LearnTrainSkill(trainSkillId: number): Result;

  /**
   * 不做任何处理
   *
   * @returns 无需处理
   */
  Nothing(): Result;

  /**
   * 播放音效
   *
   * @param effect 音效名称
   * @param volume 音量大小 (浮点型数据)
   * @returns 无需处理
   */
  PlayEffect(effect: string, volume: number): Result;

  /**
   * 播放音乐
   *
   * @param music 音乐名称
   * @returns 无需处理
   */
  PlayMusic(music: string): Result;

  /**
   * 日志打印方法(不推荐使用)
   *
   * 建议直接使用 TS 默认的日志处理方法
   *
   * @param type Log 日志级别 ["", "Info", "Warning", "Error"]
   * @param message Log 日志信息
   * @returns 无需处理
   */
  Print(type: LogType, message: string): Result;

  /**
   * 移除主角一层先天 Buff
   *
   * @param buffId Buff 编号
   * @returns 无需处理
   */
  RemoveCongenitalBuff(buffId: number): Result;

  /**
   * 移除主角对应物品
   *
   * @param itemId 物品编号
   * @param number 物品数量
   * @param show 是否显示提示 (可选参数，默认不显示提示)
   * @returns 无需处理
   */
  RemoveItem(itemId: number, number: number, show?: boolean): Result;

  /**
   * 调用当前环境内 Flowchart 的对应 Block
   *
   * @param blockName Block 名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunFungusBlock(blockName: string): Result;

  /**
   * 运行 Lua 脚本方法
   *
   * @param src Lua 文件名称
   * @param funcName Lua 方法名称
   * @returns 异步调用，需要添加 await 关键字
   */
  RunLua(src: string, funcName: string): Result;

  /**
   * 移除主角与 NPC 的关系
   *
   * @param npcId NPC 编号
   * @param relation 关系
   * @returns 无需处理
   */
  RemoveRelation(npcId: number, relation: Relation): Result;

  /**
   * 角色对话方法
   *
   * @param avatar 角色绑定名称
   * @param text 对话文本
   * @returns 无需处理
   */
  Say(avatar: string, text: string): Result;

  /**
   * 显示对话选项(会先显示角色对话，然后弹出选项)
   *
   * @param avatar 绑定角色名称
   * @param text 对话文本
   * @param option 对话选项(具体示例可参考 ShowOption 方法)
   * @returns 异步调用，需要添加 await 关键字
   */
  SayOption(avatar: string, text: string, ...option: Array<string>): Result;

  /**
   * 向玩家发送传音符消息
   *
   * @param msgId 传音符编号
   * @returns 无需处理
   */
  SendMsg(msgId: number): Result;

  /**
   * 对话角色绑定
   *
   * @param avatar 绑定角色名称
   * @param id 绑定角色编号
   * @returns 无需处理
   */
  SetChar(avatar: string, id: number): Result;

  /**
   * 将指定角色立绘修改为对应的捏脸立绘
   *
   * 该指令会优先获取自定义捏脸立绘，其次按人物 ID 获取对应人物的捏脸立绘
   *
   * @param npcId 角色编号 (若输入1则为修改主角捏脸)
   * @param faceId 捏脸立绘编号
   * @returns 无需处理
   */
  SetCustomFace(npcId: number, faceId: number): Result;

  /**
   * 将指定角色立绘修改为对应立绘
   *
   * @param npcId 角色编号 (若输入1则为修改主角立绘)
   * @param avatarId Avatar 立绘编号 (若输入0则为还原立绘)
   * @returns 无需处理
   */
  SetFace(npcId: number, avatarId: number): Result;

  /**
   * 储存一个整形键值对，该键值对将储存在游戏存档中
   * @param key 键名称
   * @param value 值数据 (需使用整型数据)
   * @returns 无需处理
   */
  SetInt(key: string, value: number): Result;

  /**
   * 储存一个字符串键值对，该键值对将储存在游戏存档中。
   * @param key 键名称
   * @param value 值数据
   * @returns 无需处理
   */
  SetStr(key: string, value: string): Result;

  /**
   * 开启或关闭一个触发器，被关闭的触发器不会再参与触发判断
   *
   * 触发器状态： false: 关闭 true: 开启
   *
   * @param triggerId 触发器名称
   * @param state 触发器状态 (可选参数, 默认关闭)
   * @returns
   */
  SetTrigger(triggerId: string, state?: boolean): Result;

  /**
   * 显示指定的 CG 背景
   *
   * @param imageId CG 文件名称或对应路径
   * @returns 无需处理
   */
  ShowCG(imageId: string): Result;

  /**
   * 显示对话选项
   *
   * 例：ShowOption("1:选项A", "2:选项B")
   *
   * @param option 对话选项
   * @returns 异步调用，需要添加 await 关键字
   */
  ShowOption(...option: Array<string>): Result;

  /**
   * 显示自定义提示信息
   *
   * @param message 提示信息
   * @param tipIcon 信息图标类型
   * @returns 无需处理
   */
  ShowTip(message: string, tipIcon: TipIcon): Result;

  /**
   * 开启自定义战斗
   *
   * 在战斗结束后，会根据战斗结果触发对应的事件
   *
   * 注：如果战斗类型没有玩家不死亡的设定，则战斗失败会直接死亡。
   *
   * @param enemyId 敌方角色编号
   * @param canRun 能否逃跑
   * @param fightType 战斗类型
   * @param bg 背景图片编号
   * @param music 背景音乐编号
   * @param enemyBuff 敌方 Buff 例：["buffId,buffNumber|buffId,buffNumber"]
   * @param selfBuff 自身 Buff 例：["buffId,buffNumber|buffId,buffNumber"]
   * @param battleSuccessEvent 战斗胜利事件
   * @param battleFailureEvent 战斗失败事件
   * @param fightTag 用于战斗中事件的判断 例: ["TagA,TagB,TagC"]
   * @returns 异步调用，需要添加 await 关键字
   */
  StartFight(
    enemyId: number,
    canRun: boolean,
    fightType: FightType,
    bg: number,
    music: number,
    enemyBuff: string,
    selfBuff: string,
    battleSuccessEvent: string,
    battleFailureEvent: string,
    fightTag: FightTag
  ): Result;

  /**
   * 对指定的触发器进行一次触发判断,若满足触发条件则进行事件跳转(同 Event)
   *
   * @param triggerId 触发器名称
   * @returns 异步调用，需要添加 await 关键字
   */
  Trigger(triggerId: string): Result;

  /**
   * 对指定的触发器组进行一次触发判断，若满足触发条件则进行事件跳转(同 Event)
   *
   * 触发器组可指定多个触发器，中间使用 ` 进行分割
   *
   * 触发器模式为 false 时，只会触发第一个触发成功的触发器
   *
   * 触发器模式为 true 时，会依次触发所有满足条件的触发器
   *
   * @param triggerId 触发器组
   * @param all 触发模式 (可选参数，默认 false 模式)
   * @returns 异步调用，需要添加 await 关键字
   */
  TriggerAll(triggerId: string, all?: boolean): Result;

  /**
   * 为主角使用物品
   *
   * @param itemId 物品编号
   * @param useBag 是否消耗背包物品 (可选参数，默认不消耗)
   * @returns 无需处理
   */
  UseItem(itemId: number, useBag?: boolean): Result;
}
