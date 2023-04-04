import {
  EFightBuffType,
  EJuLingZhen,
  StoryManager,
  Result,
  NpcDeathType,
  EquipSlotType,
  EShengWang,
} from "./common";
import { NMC指令 } from "./runnerChinese";
import { NMCRunnerNpc } from "./Npc";
import { NMCRunnerFight } from "./Fight";
import { NMCRunnerFungus } from "./Fungus";
import { NMCRunnerDongFu } from "./DongFu";
import { NMCRunnerUtils } from "./Utils";
/**
 * 运行时指令调用对象方法扩展 - NextMoreCommand 扩展
 */
export interface NMCRunner
  extends NMCRunnerNpc,
    NMCRunnerFight,
    NMCRunnerFungus,
    NMCRunnerDongFu,
    NMCRunnerUtils,
    NMC指令 {}
