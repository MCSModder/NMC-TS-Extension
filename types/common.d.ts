/**
 * 导出自定义返回值类型
 */
export type Result<T> = Promise<T>;

/**
 * 自定义字典类型
 */
export type Dictionary<K, V> = {
  [key: K]: V;
};

/**
 * 自定义封装 DateTime 数据
 *
 * 实际上前端使用 Date 进行数据接收即可
 */
export interface DateTime {
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
 * 导出 UINpcData 类型
 */
export interface UINpcData {
  IsException: boolean;
  ID: number;
  UUID: string;
  Tag: number;
  IsGuDingNPC: boolean;
}

export interface ITEM_INFO {
  UUID: bigint;
  uuid: string;
  itemId: number;
  itemCount: bigint;
  itemIndex: number;
  seid: JSON;
}

// 暂不添加详细的对象声明
type CardMag = unknown;
type Combat = unknown;
type AI = unknown;
type Spell = unknown;
type JieYin = unknown;
type Dialog = unknown;
type BuffMag = unknown;
type WuDaoMag = unknown;
type WorldTime = unknown;
type EmailDataMag = unknown;
type StreamData = unknown;
type TaskMag = unknown;
type FightTempValue = unknown;
type ZulinContorl = unknown;
type FubenContrl = unknown;
type NomelTaskMag = unknown;
type chenghaoMag = unknown;
type RandomFuBenMag = unknown;
type SeaNodeMag = unknown;
type ChuanYingManager = unknown;
type JianLingManager = unknown;
type SkillBox = unknown;
// GUIPackage.Skill
type Skill = unknown;
// GUIPackage.StaticSkill
type StaticSkill = unknown;

/**
 * 导出 KBEngine.Avatar 类型
 */
export interface Avatar {
  lastScencd: string;
  lastFuBenScence: string;
  NowFuBen: string;
  BanBenHao: number;
  NowRandomFuBenID: number;
  showSkillName: number;
  showStaticSkillDengJi: number;
  chengHao: number;
  cardMag: CardMag;
  ai: AI;
  spell: Spell;
  jieyin: JieYin;
  dialogMag: Dialog;
  buffmag: BuffMag;
  wuDaoMag: WuDaoMag;
  worldTimeMag: WorldTime;
  emailDateMag: EmailDataMag;
  StreamData: StreamData;
  ExchangeMeetingID: number;
  taskMag: TaskMag;
  fightTemp: FightTempValue;
  zulinContorl: ZulinContorl;
  fubenContorl: FubenContrl;
  nomelTaskMag: NomelTaskMag;
  chenghaomag: chenghaoMag;
  randomFuBenMag: RandomFuBenMag;
  seaNodeMag: SeaNodeMag;
  chuanYingManager: ChuanYingManager;
  jianLingManager: JianLingManager;
  skillbox: SkillBox;
  itemDict: Dictionary<bigint, ITEM_INFO>;
  equipItemDict: Dictionary<bigint, ITEM_INFO>;
  skill: Array<Skill>;
  StaticSkill: Array<StaticSkill>;
  // ...
}
